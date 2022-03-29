
// 插件
// 对象
// let myplugin = {
//     install(Vue){ //写Vue的原因 把插件挂载Vue的原型上
//         Vue.prototype.cuiplugin = function(){
//             console.log("王")
//         }
//     }
// }
// let myplugin = function cuifn(){
//     Vue.prototype.cuifn = function(){
//         console.log("====")
//     }}
//防抖 点击多次只执行最后一次
let myplugin = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait){
        // 每次点击清除之前的定时器   只保留当前的定时器
        let timer = null;
        return function(){
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn()
            },wait)
        }
    }
}
export default myplugin;