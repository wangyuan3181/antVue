<template>
  <a-row :gutter='24' :class="wrpCls" class='right_content'>
    <!-- 面包屑 -->
    <a-col :xl="19" :lg="16" :md="16" :sm="12" :xs="0">
      <global-breadcrumb class='global_breadcrumb' />
    </a-col>
    <!-- 徽标 -->
    <a-col :xl="2" :lg="2" :md="2" :sm="4" :xs="8">
      <notice-icon :class="prefixCls" class='info_badge'></notice-icon>
    </a-col>
    <!-- 头像 -->
    <a-col :xl="3" :lg="6" :md="6" :sm="8" :xs="16">
      <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" class='avatar_dropdown' />
    </a-col>
    <!-- 控制语言 -->
    <!-- <select-lang :class="prefixCls" /> -->
    <!-- </div> -->
  </a-row>
</template>

<script>
import GlobalBreadcrumb from './GlobalBreadcrumb'
import AvatarDropdown from './AvatarDropdown'
import SelectLang from '@/components/SelectLang'
import NoticeIcon from '@/components/NoticeIcon'

export default {
  name: 'RightContent',
  components: {
    GlobalBreadcrumb,
    AvatarDropdown,
    SelectLang,
    NoticeIcon
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action'
    },
    isMobile: {
      type: Boolean,
      default: () => false
    },
    topMenu: {
      type: Boolean,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showMenu: true,
      currentUser: {}
    }
  },
  computed: {
    wrpCls() {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${(this.topMenu && this.isMobile && this.theme) || 'light'}`]: true
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentUser = {
        name: '汪渊3181'
      }
    }, 1500)
  }
}
</script>

<style lang="less" scoped>
.right_content {
  display: flex;
  flex-direction: row;
  width: calc(100% - 56px - 68px);
  margin-right: 4% !important;
}
.global_breadcrumb {
  height: 100%;
  width: 100%;
}
.info_badge {
  min-width: 50px;
  height: 100%;
  padding-left: 0px !important;
  text-align: right;
}
.avatar_dropdown {
  min-width: 120px;
  text-align: center;
}
</style>

<style lang="less">
.ant-pro-global-header-trigger {
  position: absolute;
  height: 64px;
  line-height: 26px;
  // top: 3px;
  z-index: 999;
}
</style>
