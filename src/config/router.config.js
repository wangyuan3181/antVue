// eslint-disable-next-line
import {
  UserLayout,
  BasicLayout,
  BlankLayout
} from '@/layouts'
import {
  bxAnaalyse
} from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [{
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: {
      title: '首页'
    },
    redirect: '/Home/overview',
    children: [{
        path: '/Home',
        name: 'Home',
        redirect: '/Home/overview',
        component: RouteView,
        meta: {
          title: '监控中心',
          keepAlive: true,
          icon: bxAnaalyse,
          permission: ['dashboard']
        },
        children: [{
            path: '/Home/overview/:pageNo([1-9]\\d*)?',
            name: 'overview',
            component: () => import('@/views/Home/projectOverview'),
            meta: {
              title: '工程总览',
              keepAlive: false,
              permission: ['dashboard']
            }
          },
          {
            path: '/Home/distribute',
            name: 'distribute',
            component: () => import('@/views/Home/projectDistribute'),
            meta: {
              title: '工程分布',
              keepAlive: true,
              permission: ['dashboard']
            }
          }
        ]
      },

      // forms 工程管理
      {
        path: '/Management',
        redirect: '/Management/manageRecord',
        component: RouteView,
        meta: {
          title: '工程管理',
          icon: 'form',
          permission: ['management']
        },
        children: [{
            path: '/Management/manageRecord',
            name: 'BaseForm',
            component: () => import('@/views/Management/manageRecord'),
            meta: {
              title: '工程档案',
              keepAlive: true,
              permission: ['management']
            }
          },
          {
            path: '/Management/manageProgress',
            name: 'StepForm',
            component: () => import('@/views/Management/manageProgress'),
            meta: {
              title: '工程进度',
              keepAlive: true,
              permission: ['management']
            }
          },
          {
            path: '/Management/costSituation',
            name: 'AdvanceForm',
            component: () => import('@/views/Management/costSituation'),
            meta: {
              title: '费用情况',
              keepAlive: true,
              permission: ['management']
            }
          }
        ]
      },

      // list 工程操作
      {
        path: '/Operation',
        name: 'Operation',
        component: RouteView,
        redirect: '/Operation/myTasks',
        meta: {
          title: '工程操作',
          icon: 'table',
          permission: ['table']
        },
        children: [{
            path: '/Operation/myTasks/:pageNo([1-9]\\d*)?',
            name: 'myTasks',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/Operation/myTasks'),
            meta: {
              title: '我的任务',
              keepAlive: true,
              permission: ['table']
            }
          },
          {
            path: '/Operation/peojectOptions',
            name: 'peojectOptions',
            component: () => import('@/views/Operation/peojectOptions'),
            meta: {
              title: '工程创建',
              keepAlive: true,
              permission: ['table']
            }
          }
        ]
      },

      // profile 材料管理
      {
        path: '/StoreKeeping',
        name: 'StoreKeeping',
        component: RouteView,
        redirect: '/StoreKeeping/materialList',
        meta: {
          title: '材料管理',
          icon: 'profile',
          permission: ['profile']
        },
        children: [{
            path: '/StoreKeeping/materialList',
            name: 'materialList',
            component: () => import('@/views/StoreKeeping/materialList'),
            meta: {
              title: '材料汇总',
              permission: ['profile']
            }
          },
          {
            path: '/StoreKeeping/materialSummary',
            name: 'materialSummary',
            component: () => import('@/views/StoreKeeping/materialSummary'),
            meta: {
              title: '材料料单',
              permission: ['profile']
            }
          },
          {
            path: '/StoreKeeping/sendMateria',
            name: 'sendMateria',
            component: () => import('@/views/StoreKeeping/sendMateria'),
            meta: {
              title: '发料领料',
              permission: ['profile']
            }
          },
        ]
      },

      // result 检查日志
      {
        path: '/AuditLog',
        name: 'AuditLog',
        component: RouteView,
        redirect: '/AuditLog/auditReport',
        meta: {
          title: '检查日志',
          icon: 'check-circle-o',
          permission: ['result']
        },
        children: [{
            path: '/AuditLog/auditReport',
            name: 'auditReport',
            component: () => import('@/views/AuditLog/auditReport'),
            meta: {
              title: '检查报告',
              keepAlive: false,
              hiddenHeaderContent: true,
              permission: ['result']
            }
          },
          {
            path: '/AuditLog/logReport',
            name: 'logReport',
            component: () => import('@/views/AuditLog/logReport'),
            meta: {
              title: '日志报告',
              keepAlive: false,
              hiddenHeaderContent: true,
              permission: ['result']
            }
          }
        ]
      },

      // Exception 异常页 
      {
        path: '/Exception',
        name: 'Exception',
        component: RouteView,
        redirect: '/Exception/403',
        hidden: true, // 错误提示页 侧边栏隐藏
        meta: {
          title: '异常页',
          icon: 'warning',
          permission: ['exception']
        },
        children: [{
            path: '/Exception/403',
            name: 'Exception403',
            component: () => import( /* webpackChunkName: "fail" */ '@/views/Exception/403'),
            meta: {
              title: '403',
              permission: ['exception']
            }
          },
          {
            path: '/Exception/404',
            name: 'Exception404',
            component: () => import( /* webpackChunkName: "fail" */ '@/views/Exception/404'),
            meta: {
              title: '404',
              permission: ['exception']
            }
          },
          {
            path: '/Exception/500',
            name: 'Exception500',
            component: () => import( /* webpackChunkName: "fail" */ '@/views/Exception/500'),
            meta: {
              title: '500',
              permission: ['exception']
            }
          }
        ]
      },

      // account 个人设置
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        hidden: true, // 个人页侧边栏隐藏
        meta: {
          title: '个人页',
          icon: 'user',
          keepAlive: true,
          permission: ['user']
        },
        children: [{
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: {
              title: '个人中心',
              keepAlive: true,
              permission: ['user']
            }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: {
              title: '个人设置',
              hideHeader: true,
              permission: ['user']
            },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [{
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: {
                  title: '基本设置',
                  hidden: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: {
                  title: '安全设置',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: {
                  title: '个性化设置',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: {
                  title: '账户绑定',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: {
                  title: '新消息通知',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [{
        path: 'login',
        name: 'login',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import( /* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/403',
    component: () => import('@/views/Exception/403')
  }, {
    path: '/404',
    component: () => import('@/views/Exception/404')
  }, {
    path: '/500',
    component: () => import('@/views/Exception/500')
  }

]