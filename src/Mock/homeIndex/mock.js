let Mock = require("mockjs")
let data = [
    {id:0,name:"小虎",text:"我是小虎"},
    {id:1,name:"小猫",text:"我是小猫"},
    {id:2,name:"小狗",text:"我是小狗"},
    {id:3,name:"小兔",text:"我是小兔"}
]
// 获取
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})
// 删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    data = data.map(function(item,id){
        return {
            id,
            name:item.name,
            text:item.text
        }
    })
    
    console.log(data)
    return data
})
// 更新
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop() // 获取id
    let canshu = config.body  // string
    canshu = JSON.parse(canshu) // obj
    console.log(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    return data
})
// 添加
Mock.mock("/api/homeindex",'post',function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    // 数据凹陷的解决方案
    data.push({id:data.length,name,text})
    return data;
})