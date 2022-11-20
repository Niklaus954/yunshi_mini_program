import {API_CONSTANT} from "./commonApiConstant";

export function submitLogin(loginParams) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: API_CONSTANT.url + "/meteorolite/pc/user/login.json",
            data: {
                phoneNum: loginParams.account,
                password: loginParams.password,
            },
            method: "post",
            dataType: 'json',
            success: function(res) {
                if (!res.data.success) {
                    reject(res.data.errorMsg);
                    return;
                }
                resolve(res.data.result);
            },
            fail: function(err) {
                reject(err.message);
            }
        });
    })
}