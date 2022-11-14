Page({
	data: {
		imgSrcs: [{
			img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8"
		},{
			img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170322%2F765bfadc418e461e94985412d4e32af3_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023724&t=ae59a1b763d32983e498f51683b1909f"
		}],
		pageLoading: false,
		current: 1,
		autoplay: true,
		duration: 500,
		interval: 5000,
		navigation: {
			type: 'dots'
		},
	},

	privateData: {
		tabIndex: 0,
	},

	onLoad() {
		this.init();
	},

	onPullDownRefresh() {
		this.init();
	},

	init() {
		this.loadHomePage();
	},

	loadHomePage() {
		wx.stopPullDownRefresh();

		this.setData({
			pageLoading: false,
		});
	},
});