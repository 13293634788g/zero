import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Myform from "../views/Myform.vue";
import Myform1 from "../views/Myform1.vue";
import MyLogin from "../views/MyLogin.vue";
Vue.use(VueRouter);
const routes = [{
    path: "/",
    name: "home",
    meta: ["首页"],
    component: HomeView,
    children: [
      {
        path: "/",
        component: () => import("../views/home/HomeIndex.vue"),
        name:"shouye"
      },
      {
        path: "2-1",
        meta: ["数据管理", "用户列表"],
        component: () => import("../views/home/HomeUser.vue")
      },
      {
        path: "2-2",
        meta: ["数据管理", "商户列表"],
        component: () => import("../views/home/HomeShop.vue")
      },
      {
        path: "2-3",
        meta: ["数据管理", "食品列表"],
        component: () => import("../views/home/HomeFood.vue")
      },
      {
        path: "2-4",
        meta: ["数据管理", "订单列表"],
        component: () => import("../views/home/HomeOrder.vue")
      },
      {
        path: "2-5",
        meta: ["数据管理", "管理员列表"],
        component: () => import("../views/home/HomePerson.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Myform",
    name: "Myform",
    component: Myform,
  },
  {
    path: "/Myform1",
    name: "Myform1",
    component: Myform1,
  },
  {
    path: "/MyLogin",
    name: "MyLogin",
    component: MyLogin,
  },
];

const router = new VueRouter({
  routes,
});
//权限管理
router.beforeEach(function (to, from, next) {
  // 如果打开界面跳转的是My就让他跳转
  if (to.name == "MyLogin") {
    next()
  } else {
    // 如果没有token的话就跳转到MyLogin 
    // 有token直接跳转
    let token = localStorage.getItem("token")
    if (!token) next({
      name: "MyLogin"
    })
    if (token) {
      next()
    }
  }
})
export default router;