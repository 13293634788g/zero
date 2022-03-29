let Mock = require("mockjs")
Mock.mock("/api/login", 'post', function (config) {
    // config 前端传来的数据
    console.log(config)
    let obj = JSON.parse(config.body)
    let user = obj.user
    let pw = obj.pw
    if (user == "admin" && pw == "123456") {
        return {
            status: 200,
            message: "success",
            data: {
                user: "admin",
                pw: "123456"
            }
        }
    } else {
        return {
            status: 200,
            message: "fail"
        }
    }
})