import router from "./router"
// import store from "./store"
// import { Message } from "element-ui"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  if (to.path === "/permission") {
    next()
  } else {
    console.log("zhixngle")
    router.addRoutes(router.accessRoutes)

    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    next({ ...to, replace: true })
  }
})
