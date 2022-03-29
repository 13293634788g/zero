<template>
  <div>
    <el-form :model="form" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <!-- 密码框 -->
      <el-form-item>
        <el-input v-model="form.pwd" prop="pwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Myform",
  data() {
    return {
      form: {
        name: "小虎",
        pwd: "123456",
      },
      rules: {
        name: [{type:"string",required:true,pattern:/张三/,message:"用户名不正确"},],
        pwd: [{}],  
      },
    };
  },
};
</script>   
<style>
</style>