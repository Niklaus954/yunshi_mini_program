export function preHandle(result, reject, options) {
    if (!result.success) {
        reject(result.errorMsg);
        if (result.errorCode == "401") {
            setTimeout(() => {
                wx.redirectTo({
                    url: '../login/login' + generateUrlParams(options),
                });
            }, 1000);
            wx.setStorageSync('loginInfo', null);
        }
        return false;
    }
    return true;
}

function generateUrlParams(options) {
    let str = '';
    if (options && options.goodsIds && options.goodsIds.length > 0) {
        str = `?goodsIds=${options.goodsIds}&shareInfo=${options.shareInfo}`;
    }
    return str;
}