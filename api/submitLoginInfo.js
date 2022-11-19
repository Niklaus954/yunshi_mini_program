export function submitLogin(loginParams) {
    // loginParams.account;
    // loginParams.password;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                account: "",
                token: "",
            });
            // reject("密码错误");
        }, 1000);
    })
}