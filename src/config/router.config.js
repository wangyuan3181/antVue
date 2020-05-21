// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/analysis',
    children: [
      // dashboard
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
        children: [
          {
            path: 'analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/GCZL'),
            meta: { title: '工程总览', keepAlive: false, permission: [ 'dashboard' ] }
          },
          {
            path: 'workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/GCFB'),
            meta: { title: '工程分布', keepAlive: true, permission: [ 'dashboard' ] }
          }
        ]
      },
      //工程管理
      {
        path: 'GCGL',
        name: 'GCGL',
        redirect: '/GCGL/GCDA',
        component: RouteView,
        meta: { title: '工程管理', keepAlive: true, icon: 'table', permission: [ 'dashboard' ] },
        children: [
          {
            path: 'GCDA/:pageNo([1-9]\\d*)?',
            name: 'GCDA',
            component: () => import('@/views/GCGL/GCDA'),
            meta: { title: '工程档案', keepAlive: false, permission: [ 'dashboard' ] }
          },
          {
            path: 'GCJD',
            name: 'GCJD',
            component: () => import('@/views/GCGL/GCJD'),
            meta: { title: '工程进度', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: 'FYQK',
            name: 'FYQK',
            component: () => import('@/views/GCGL/FYQK'),
            meta: { title: '费用情况', keepAlive: true, permission: [ 'dashboard' ] }
          }
        ]
      },

      //工程操作
      {
        path: 'GCCZ',
        name: 'GCCZ',
        redirect: '/GCCZ/WDRW',
        component: RouteView,
        meta: { title: '工程操作', keepAlive: true, icon: 'form', permission: [ 'dashboard' ] },
        children: [
          {
            path: 'GCDA',
            name: 'GCDA',
            component: () => import('@/views/GCGL/GCDA'),
            meta: { title: '我的任务', keepAlive: false, permission: [ 'dashboard' ] }
          },
          {
            path: 'GCJD',
            name: 'GCJD',
            component: () => import('@/views/GCGL/GCJD'),
            meta: { title: '工程创建', keepAlive: true, permission: [ 'dashboard' ] }
          }
        ]
      },
      // forms
      {
        path: '/CLGL',
        redirect: '/CLGL/base-form',
        component: PageView,
        meta: { title: '材料管理', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: '/form/base-form',
            name: 'BaseForm',
            component: () => import('@/views/form/BasicForm'),
            meta: { title: '材料汇总', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: '/form/step-form',
            name: 'StepForm',
            component: () => import('@/views/form/stepForm/StepForm'),
            meta: { title: '材料料单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: '/form/advanced-form',
            name: 'AdvanceForm',
            component: () => import('@/views/form/advancedForm/AdvancedForm'),
            meta: { title: '发料领料', keepAlive: true, permission: [ 'form' ] }
          }
        ]
      },



      // profile
      {
        path: '/JCRZ',
        name: 'profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: { title: '检查日志', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/profile/basic',
            name: 'ProfileBasic',
            component: () => import('@/views/profile/basic/Index'),
            meta: { title: '检查报告', permission: [ 'profile' ] }
          },
          {
            path: '/profile/advanced',
            name: 'ProfileAdvanced',
            component: () => import('@/views/profile/advanced/Advanced'),
            meta: { title: '日志报告', permission: [ 'profile' ] }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      },

     


    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
