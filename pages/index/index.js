import {getGoodsList} from "../../service/index";
import {GoodsQueryVO} from "../../domain/GoodsQueryVO";
import Toast from 'tdesign-miniprogram/toast/index';

Page({
	data: {
		// 是否登录
		isLogin: false,

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
			img: "https://img2.baidu.com/it/u=6844442,3260035559&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
		}, {
			img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8"
		}],
		current: 1,
		autoplay: true,
		duration: 500,
		interval: 5000,
		navigation: {
			type: 'dots'
		},
	},

	onLoad() {
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
		})
	},

	onPullDownRefresh() {
		this.init().then(() => {
			this.setData({
				pageLoading: false,
			});
		});
	},

	async onReachBottom() {
		await this.queryGoodsList();
	},

	async init() {
		wx.stopPullDownRefresh();
		this.setData({
			pageLoading: true,
			goodsQueryVO: new GoodsQueryVO(),
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
		const result = await getGoodsList(this.data.goodsQueryVO);
		if (result.length === 0) {
			this.toastNoMore();
		}
		this.setData({
			goodsList: [...this.data.goodsList, ...result],
			goodsLoading: false,
			hasMore: result.length > 0,
		});
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

	onShareAppMessage: function () {
		return {
			title: '陨石收藏家',
			path: '/page/index/index?id=123',
			success: function (res) {
				console.log("分享成功");
				// console.log(res.shareTickets[0])
				// console.log
				// wx.getShareInfo({
				// 	shareTicket: res.shareTickets[0],
				// 	success: function (res) {
				// 		console.log(res)
				// 	},
				// 	fail: function (res) {
				// 		console.log(res)
				// 	},
				// 	complete: function (res) {
				// 		console.log(res)
				// 	}
				// })
			},
			fail: function (res) {
				// 分享失败
				console.log("分享失败");
			},
		};
	}
});