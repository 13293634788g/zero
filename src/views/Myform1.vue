<template>
  <div>
    form1111
    <el-form :model="form" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- 密码框 -->
      <el-form-item prop="pwd">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Myform",
  data() {
    //   自定义验证
    let myfn = function (rule, value, callback) {
      //   自定义正则校验
      console.log(rule, value);
      let rg = /\w{2,6}/;
      if (!rg.test(value)) {
        return callback(new Error("信息不对"));
      }
    };
    return {
      form: {
        name: "小虎",
        pwd: "123456",
      },
      rules: {
        name: [{ validator: myfn, trigger: "blur" }],
        pwd: [],
      },
    };
  },
  //   valitor是个函数  跟message 和pattren二选一
  //  trigger 什么时候触发正则校验
};
</script>   
<style>
</style>