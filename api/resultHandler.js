export function preHandle(result, reject, options) {
    if (!result.success) {
        reject(result.errorMsg);
        if (result.errorCode == "401") {
            setTimeout(() => {
                wx.redirectTo({
                    url: '../login/login?options=' + options,
                });
            }, 1000);
            wx.setStorageSync('loginInfo', null);
        }
        return false;
    }
    return true;
}