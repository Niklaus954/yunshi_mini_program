import {getGoodsList} from "../../service/index";
import {GoodsQueryVO} from "../../domain/GoodsQueryVO";
import Toast from 'tdesign-miniprogram/toast/index';

Page({
	data: {
		// 是否登录
		isLogin: false,

		// 页面路由参数
		options: null,

		// 来自分享
		fromShare: false,

		// 分享信息
		shareInfo: null,

		// 页面刷新或初始化
		pageLoading: false,

		// 商品查询参数
		goodsQueryVO: new GoodsQueryVO(),

		// 商品列表
		goodsList: [],
		goodsLoading: false,
		hasMore: true,

		// 精选好物bar
		tabList: [{
			key: "1",
			text: "精选好物"
		}],

		// 轮播相关参数
		imgSrcs: [{
			img: "https://ysscj-1315026611.cos.ap-nanjing.myqcloud.com/mini-program/swiper-1.jpg"
		}, {
			img: "https://ysscj-1315026611.cos.ap-nanjing.myqcloud.com/mini-program/swiper-2.jpg"
		}],
		current: 1,
		autoplay: true,
		duration: 500,
		interval: 5000,
		navigation: {
			type: 'dots'
		},
	},

	onLoad(options) {
		this.setData({
			options,
			fromShare: options && options.goodsIds,
			shareInfo: options && options.shareInfo ? JSON.parse(decodeURIComponent(options.shareInfo)) : {},
		});
		this.init().then(() => {
			this.setData({
				pageLoading: false,
			});
		});
		// 当前页面允许分享
		wx.showShareMenu({
			withShareTicket: true,
			//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
			menus: ["shareAppMessage", "shareTimeline"]
		});
	},

	onPullDownRefresh() {
		if (this.data.fromShare) {
			return;
		}
		this.setData({
			options: null,
		});
		this.init().then(() => {
			this.setData({
				pageLoading: false,
			});
		});
	},

	async onReachBottom() {
		if (this.data.goodsQueryVO.goodsIds && this.data.goodsQueryVO.goodsIds.length > 0) {
			return;
		}
		await this.queryGoodsList();
	},

	async init() {
		wx.stopPullDownRefresh();
		const query = new GoodsQueryVO();
		if (this.data.options && this.data.options.goodsIds) {
			query.goodsIds = this.data.options.goodsIds.split(",");
		}
		this.setData({
			pageLoading: true,
			goodsQueryVO: query,
			goodsList: [],
			hasMore: true,
			isLogin: wx.getStorageSync('loginInfo') != null,
		});
		await this.queryGoodsList();
	},

	async queryGoodsList() {
		// 未登录不能查看商品
		if (!this.data.isLogin) {
			return;
		}
		// 没有更多了
		if (!this.data.hasMore) {
			this.toastNoMore();
			return;
		}
		this.data.goodsQueryVO.page++;
		this.setData({
			goodsLoading: true,
		});
		const result = await getGoodsList(this.data.goodsQueryVO, this.data.options);
		if (result.length === 0) {
			this.toastNoMore();
		}
		this.setData({
			goodsList: [...this.data.goodsList, ...result],
			goodsLoading: false,
			hasMore: result.length > 0,
		});
		if (this.data.options && this.data.options.goodsIds) {
			if (this.data.goodsList && this.data.goodsList.length > 1) {
				return;
			}
			if (this.data.goodsList.length < 1) {
				return;
			}
			wx.redirectTo({
				url: '../detail/detail?info=' + encodeURIComponent(JSON.stringify(this.data.goodsList[0])) + "&shareInfo=" + this.data.options.shareInfo,
			});
		}
	},

	// 搜索关键字
	async searchHandle(e) {
		const goodsQueryVO = this.data.goodsQueryVO;
		goodsQueryVO.keywords = e.detail.value === "" ? null : e.detail.value;
		goodsQueryVO.page = 0;
		goodsQueryVO.pageSize = 10;
		goodsQueryVO.goodsIds = [];
		this.setData({
			goodsList: [],
			hasMore: true,
		});
		await this.queryGoodsList();
	},

	// 搜索框输入
	async changeSearchHandle(e) {
		this.data.goodsQueryVO.keywords = e.detail.value;
	},

	toastNoMore() {
		Toast({
			message: '没有更多了',
		});
	},

	goodListClickHandle: function (e) {
		let str = '?info=' + encodeURIComponent(JSON.stringify(e.detail.goods));
		if (this.data.options && this.data.options.shareInfo) {
			str += `&shareInfo=${this.data.options.shareInfo}`;
		}
		wx.navigateTo({
			url: '../detail/detail' + str,
		});
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		const loginInfo = wx.getStorageSync('loginInfo');
    let shareInfo = {
        name: loginInfo.user.nickname,
        phone: loginInfo.user.telephoneNum ? loginInfo.user.telephoneNum : loginInfo.user.phoneNum,
        introUrl: loginInfo.user.introUrl,
        intro: loginInfo.user.intro,
    };
		if (this.data.options && this.data.options.shareInfo) {
			shareInfo = JSON.parse(decodeURIComponent(this.data.options.shareInfo))
		}
		const goodsIds = this.data.goodsList.map(item => item._id).join();
		return {
			title: "来自" + shareInfo.name + "的分享",
			path: '/pages/index/index?goodsIds=' + goodsIds + "&shareInfo=" + encodeURIComponent(JSON.stringify(shareInfo)),
		};
	}
});