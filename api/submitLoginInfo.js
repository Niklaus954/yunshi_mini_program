import {API_CONSTANT} from "./commonApiConstant";
import * as base64 from "base-64"

export function submitLogin(loginParams) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: API_CONSTANT.url + "/meteorolite/pc/user/login.json",
            data: {
                phoneNum: loginParams.account,
                password: base64.encode(loginParams.password),
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