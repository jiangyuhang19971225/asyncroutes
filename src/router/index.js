import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
//导入
// import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Layout from "../views/asyncRout/layout.vue"
import Permission from "../views/asyncRout/permission.vue"
import error from "../views/404.vue"
// import LayoutHeader from "ant-design-vue/types/layout/layout-header"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/zhedie",
    name: "zhe",
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    },
    component: () => import("../views/zhediemianban.vue")
  }
]
const asyncroutes = [
  {
    path: "/layout",
    component: Layout,
    name: "lay",
    meta: {
      title: "用户管理",
      icon: "user",
      auth: true
    }
  },
  {
    path: "/permission",
    component: Permission,
    name: "per",
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    }
  },
  {
    path: "/404",
    component: error,
    name: "",
    hidden: true,
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    }
  },
  {
    path: "*",
    hidden: true,
    redirect: { path: "/404" },
    meta: {
      title: "用户管理",
      icon: "user",
      auth: false
    }
  }
]
const router = new VueRouter({
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: routes
})
const addroutes = asyncroutes
  .filter(item => !item.meta.auth)
  .map(ele => {
    return ele
  })
console.log(addroutes)
router.addRoutes([...addroutes])

export default router
