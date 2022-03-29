<template>
  <div class="home">
    <el-container>
      <!-- 左边侧边栏 -->
      <el-aside style="background-color: rgb(50, 64, 87); height: 100vh">
        <el-menu background-color="rgb(50, 64, 87)" text-color="#ffffff" :router="true">
          <el-menu-item class="item1" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item1">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户列表 </el-menu-item>
              <el-menu-item index="2-2">商家列表</el-menu-item>
              <el-menu-item index="2-3">视频列表 </el-menu-item>
              <el-menu-item index="2-4">订单列表 </el-menu-item>
              <el-menu-item index="2-5">管理员列表 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 添加数据 -->
          <el-submenu index="3" class="item1">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
              <el-menu-item index="3-1">添加用户 </el-menu-item>
              <el-menu-item index="3-2">添加商品</el-menu-item>
          </el-submenu>
          <!-- 图标分布 -->
          <el-submenu index="4" class="item1">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表分布</span>
            </template>
              <el-menu-item index="4-1">用户分布</el-menu-item>
          </el-submenu>
          <!-- 编辑 -->
          <el-submenu index="5" class="item1">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>编辑</span>
            </template>
              <el-menu-item index="5-1">文本编辑</el-menu-item>
          </el-submenu>
          <!-- 设置 -->
          <el-submenu index="6" class="item1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
              <el-menu-item index="6-1">管理员设置</el-menu-item>
          </el-submenu>
          <!-- 说明 -->
          <el-submenu index="7" class="item1">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
              <el-menu-item index="7-1">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边内容 -->
      <el-container>
        <el-header>
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <!-- 下拉 -->
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item ><span @click="tiaozhuan('/MyLogin')">首页</span></el-dropdown-item>
                <el-dropdown-item ><span @click="tuichufn">退出</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <!-- 二级路由子组件 -->
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    tuichufn() {
      localStorage.clear()
      this.$router.push({path:"/MyLogin"})
    },
    // 路由跳转 
    tiaozhuan(to){
      console.log(argument)
      this.$router.push({path:to})
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.item1 {
  background-color: rgb(15, 15, 15);
  color: rgb(236, 236, 236);
}
.item1 i {
  color: blue;
}
.item1 span {
  color: rgb(236, 236, 236);
}
.img {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background: #eff2f7;
}
.el-dropdown-menu{
  width: 60px;
  text-align: center;
}
</style>