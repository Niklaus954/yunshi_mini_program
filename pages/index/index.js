Page({
	data: {
    goodsList: [{
      spuId: "spuId",
      thumb: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8",
      title: "title122321313242少烽各位的付出违法而GRE个人费尔巴哈人特润肺v35435464554",
      price: 12,
      originPrice: "45",
      // tags: item.spuTagList.map((tag) => tag.title),
    },{
      spuId: "spuId",
      thumb: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8",
      title: "额外付出你从哪上课呢恶趣味i哦发i哦额无法i哦文捷分为i少烽i了文捷哦i去",
      price: 111,
      originPrice: 222,
      // tags: item.spuTagList.map((tag) => tag.title),
    },{
      spuId: "spuId",
      thumb: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8",
      title: "title纷纷饿到人大如果跟他",
      price: 444,
      originPrice: 213,
      // tags: item.spuTagList.map((tag) => tag.title),
    },{
      spuId: "spuId",
      thumb: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8",
      title: "title v发热ver v特人v热",
      price: 1234,
      originPrice: 55,
      // tags: item.spuTagList.map((tag) => tag.title),
    }],
    goodsListLoadStatus: 0,
    tabList: [{
      key: "1",
      text: "精选好物"
    }],
		imgSrcs: [{
			img: "https://img2.baidu.com/it/u=6844442,3260035559&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
		}, {
			img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile07.zk71.com%2FFile%2FCorpProductImages%2F2014%2F06%2F05%2F0_chundao_2222_20140605141104.jpg&refer=http%3A%2F%2Ffile07.zk71.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671023708&t=d8488c3394f561b806cdb36bd7b950e8"
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

	searchHandle(e) {
		console.log(e.detail.value);
	},

	cancelSearchHandle() {
		console.log("cancel search");
	}
});