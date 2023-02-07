import {API_CONSTANT} from "./commonApiConstant";
import {preHandle} from "./resultHandler";
import {getNullable} from "../util/commonUtil";

export function queryUserInfoById(userId) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: API_CONSTANT.url + "/meteorolite/wx/user/queryById.json",
            data: {
                id: userId
            },
            header: {
                token: getNullable('token', wx.getStorageSync('loginInfo')),
            },
            method: "post",
            dataType: 'json',
            success: function(res) {
                if (preHandle(res.data, reject, null)) {
                    const data = res.data.result;
                    resolve(data);
                }
            },
            fail: function(err) {
                reject(err.message);
            }
        });
    });
}