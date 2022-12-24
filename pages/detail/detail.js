// pages/detail.js
import {GoodsResultVO} from "../../domain/GoodsResultVO";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsDetail: new GoodsResultVO(),
        shareInfo: null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            goodsDetail: JSON.parse(decodeURIComponent(options.info)),
            shareInfo: options.shareInfo ? JSON.parse(decodeURIComponent(options.shareInfo)) : null,
        });
        wx.showShareMenu({
            withShareTicket: true,
            //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
            menus: ["shareAppMessage", "shareTimeline"]
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        let shareInfo = {
            name: wx.getStorageSync('loginInfo').user.nickname,
            phone: wx.getStorageSync('loginInfo').user.phoneNum,
            introUrl: wx.getStorageSync('loginInfo').user.introUrl,
            intro: wx.getStorageSync('loginInfo').user.intro,
        };
        if (this.data.shareInfo) {
            shareInfo = this.data.shareInfo;
        }
        return {
            title: this.data.goodsDetail._title,
            path: '/pages/index/index?goodsIds=' + this.data.goodsDetail._id + "&shareInfo=" + encodeURIComponent(JSON.stringify(shareInfo)),
            success: function (res) {

            },
            fail: function (res) {

            },
        };
    }
})