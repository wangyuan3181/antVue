/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
  navTheme: 'dark', // 导航菜单的主题
  primaryColor: '#52C41A', // 默认主题色
  layout: 'sidemenu', // 导航菜单位置:“sidemenu”或“topmenu”
  contentWidth: 'Fixed', // 内容区布局： 流式 |  固定
  fixedHeader: true, // 固定头部
  fixSiderbar: true, // 固定左侧菜单栏
  autoHideHeader: false, //  向下滚动时，隐藏 Header : boolean
  colorWeak: false, // 色盲模式
  menu: {
    locale: true
  },
  title: '工程管理系统',
  multiTab: true,
  pwa: false,
  iconfontUrl: '',
  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true'
}