import Toast from 'tdesign-miniprogram/toast/index';
import {submitLogin} from "../../api/submitLoginInfo";

// pages/member/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        account: "",
		password: "",
		disabled: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    accountHandle(e) {
        this.data.account = e.detail.value;
    },

    passwordHandle(e) {
        this.data.password = e.detail.value;
	},
	
	submitHandle() {
        if (!this.data.account) {
            Toast({
                message: '账号不能为空',
            });
            return;
        }
        if (!this.data.password) {
            Toast({
                message: '密码不能为空',
            });
            return;
		}
		this.setData({
			disabled: true,
		});
        submitLogin(this.data).then(result => {
            wx.setStorageSync("loginInfo", result);
            wx.reLaunch({
                url: '../index/index'
            });
        }).catch(message => {
			Toast({  message });
			this.setData({
				disabled: false,
			});
        });
	}
})