import router from './router'
import store from './store'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import {
  setDocumentTitle,
  domTitle
} from '@/utils/domUtil'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'
import {
  i18nRender
} from '@/locales'

NProgress.configure({
  showSpinner: false
}) // NProgress 配置

const whiteList = ['login', 'register', 'registerResult'] // 没有重定向白名单
const loginRoutePath = '/user/login'
const defaultRoutePath = '/Home/overview' // 首页 总览

router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`))
  /* has token */
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({
        path: defaultRoutePath
      })
      NProgress.done()
    } else {
      // 检查登录用户。角色为空
      if (store.getters.roles.length === 0) {
        // 请求登录用户信息
        store
          .dispatch('GetInfo')
          .then(res => {
            const roles = res.result && res.result.role
            // 生成动态的路由器
            store.dispatch('GenerateRoutes', {
              roles
            }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表
              router.addRoutes(store.getters.addRouters)
              // 请求带有 redirect 重定向时，登录自动重定向到该地址
              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                // 设置replace: true，这样导航就不会留下历史记录
                next({
                  ...to,
                  replace: true
                })
              } else {
                // 跳转到目的路由
                next({
                  path: redirect
                })
              }
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            // 失败时，获取用户信息失败时，调用登出，来清空历史保留信息
            store.dispatch('Logout').then(() => {
              next({
                path: loginRoutePath,
                query: {
                  redirect: to.fullPath
                }
              })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({
        path: loginRoutePath,
        query: {
          redirect: to.fullPath
        }
      })
      NProgress.done() // 如果当前页面是登录将不会触发后每个钩子，所以手动处理它
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 完成进度条
})