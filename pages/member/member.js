// pages/member/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 是否登录
        isLogin: wx.getStorageSync('loginInfo') != null,
        loginInfo: wx.getStorageSync('loginInfo'),
        showConfirm: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            isLogin: wx.getStorageSync('loginInfo') != null,
            loginInfo: wx.getStorageSync('loginInfo'),
        });

        // wx.getSetting({
        //     success (res){
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        //             wx.getUserInfo({
        //                 success: function(res) {
        //                     console.log(res.userInfo)
        //                 }
        //             })
        //         }
        //     }
        // })
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
    onShareAppMessage() {

    },

    jumpToLogin() {
        if (this.data.isLogin) {
            return;
        }
        wx.redirectTo({
          url: '../login/login',
        })
    },

    clickLogout() {
        this.setData({
            showConfirm: true,
        });
    },

    logout() {
        wx.setStorageSync('loginInfo', null);
        wx.reLaunch({
            url: '../index/index'
        });
    },

    cancelLogout() {
        this.setData({
            showConfirm: false,
        });
    }
})