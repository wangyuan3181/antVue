import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  // 'menu.home': '首页',
  'menu.home.analysis': '工程总览',
  'menu.home.monitor': '监控页',
  'menu.home.workplace': '工程分布',

  'layouts.usermenu.dialog.title': '消息',
  'layouts.usermenu.dialog.content': '你真的注销了吗！',

  'app.setting.pagestyle': '页面风格设置',
  'app.setting.pagestyle.light': '白昼',
  'app.setting.pagestyle.dark': '黑夜',
  'app.setting.pagestyle.realdark': 'RealDark 风格',
  'app.setting.themecolor': '主题颜色',
  'app.setting.navigationmode': '导航模式',
  'app.setting.content-width': '内容宽度',
  'app.setting.fixedheader': '固定头部',
  'app.setting.fixedsidebar': '固定侧边栏',
  'app.setting.sidemenu': '侧菜单栏布局',
  'app.setting.topmenu': '顶部菜单布局',
  'app.setting.content-width.fixed': '固定',
  'app.setting.content-width.fluid': '流动',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '复制设置',
  'app.setting.loading': '加载主题',
  'app.setting.copyinfo': '复制成功，请替换默认设置 src/models/setting.js',
  'app.setting.production.hint': '设置面板只显示在开发环境中，请手动修改'
}

export default {
  ...components,
  ...locale
}