<template>
  <div class="login">
    <h3>el后台管理系统</h3>
    <div class="login-box">
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitfn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示</p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>
<script>
import instance from "@/api/index.js";
export default {
  // 用户输入验证
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return; //格式对不处理
      return callback(new Error("密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      // 验证规则0
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
      newdebouncefn: null, //用于接手防抖封装后的业务函数
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 1000);
    //防抖封装后的新的业务函数
  },
  methods: {
    //  点击提交业务
    submitfn() {
      this.newdebouncefn();
    },
    //   登录业务
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      //   获取后台返回的数据
      let { data } = await instance.post("/api/login", { user, pw });
      //  登录状态
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        // 存token
        localStorage.setItem("token", "111");
        this.$message({
          message: "登陆成功",
          type: "success",
          duration: 2000,
          onClose: () => {
            //    登陆成功后跳转到主页
            this.$router.push({ name: "shouye" });
          },
        });
      }
    },
  },
};
</script>
<style>
.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
}
h3 {
  color: #fff;
  text-align: center;
}
.login-box {
  width: 370px;
  margin: auto;
}
.login-box {
  background: #fff;
  padding: 40px 20px;
}
h3 {
  margin-bottom: 20px;
}
.el-button {
  width: 100%;
}
p {
  font-size: 12px;
  margin-top: 10px;
  color: red;
  text-align: center;
}
</style>