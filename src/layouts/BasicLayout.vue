<template>
  <!-- 基础结构 -->
  <pro-layout title="工程管理系统" :menus="menus" :collapsed="collapsed" :mediaQuery="query" :isMobile="isMobile" :handleMediaQuery="handleMediaQuery" :handleCollapse="handleCollapse" :logo="logoRender" :i18nRender="i18nRender" v-bind="settings">
    <!-- 设置漂浮框 -->
    <setting-drawer :settings="settings" @change="handleSettingChange" />
    <!-- 头部右侧头像 -->
    <template v-slot:rightContentRender>
      <right-content :top-menu="settings.layout === 'topmenu'" :theme="settings.theme" />
    </template>
    <!-- 底部 -->
    <template v-slot:footerRender>
      <global-footer />
    </template>
    <!-- tabs 导航条 -->
    <MultiTab />
    <!-- title 主体内容 -->
    <template v-if="true">
      <GlobalTitle></GlobalTitle>
    </template>
    <!-- 主体内容 -->
    <router-view />
  </pro-layout>
</template>

<script>
import { SettingDrawer } from '@ant-design-vue/pro-layout'
import { i18nRender } from '@/locales'
import { mapState } from 'vuex'
import { SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'

import MultiTab from '@/components/MultiTab/MultiTab'
import GlobalTitle from '@/components/GlobalTitle'
import RightContent from '@/components/GlobalHeader/RightContent'
import GlobalFooter from '@/components/GlobalFooter'
import LogoSvg from '@/assets/icons/logo.svg?inline'

export default {
  name: 'BasicLayout',
  components: {
    SettingDrawer,
    GlobalTitle,
    RightContent,
    GlobalFooter,
    MultiTab
  },
  data() {
    return {
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      settings: {
        // 布局类型
        layout: 'sidemenu', // 'sidemenu', 'topmenu'
        // 定宽: true / 流式: false
        contentWidth: false,
        // 主题 'dark' | 'light'
        theme: 'dark',
        // 主色调
        primaryColor: '#1890ff',
        fixedHeader: true,
        fixSiderbar: true,
        colorWeak: false,
        hideHintAlert: false,
        hideCopyButton: false
      },
      // 媒体查询
      query: {},
      // 是否手机模式
      isMobile: false
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters
    })
  },
  created() {
    const routes = this.mainMenu.find(item => item.path === '/')
    this.menus = (routes && routes.children) || []
    console.log('全部路由', this.menus)

    // 处理侧栏收起状态
    this.$watch('collapsed', () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    this.$watch('isMobile', () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
  },
  mounted() {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  },
  methods: {
    i18nRender,
    handleMediaQuery(val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
        this.settings.contentWidth = false
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse(val) {
      this.collapsed = val
    },
    handleSettingChange({ type, value }) {
      console.log('type', type, value)
      type && (this.settings[type] = value)
      switch (type) {
        case 'contentWidth':
          this.settings[type] = value === 'Fixed'
          break
        case 'layout':
          if (value === 'sidemenu') {
            this.settings.contentWidth = false
          } else {
            this.settings.fixSiderbar = false
            this.settings.contentWidth = true
          }
          break
      }
    },
    logoRender() {
      return <LogoSvg />
    }
  }
}
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
