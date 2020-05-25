<template>
  <div :class="wrpCls" class='right_content'>
    <!-- 面包屑 -->
    <global-breadcrumb class='global_breadcrumb' />
    <!-- 徽标 -->
    <info-badge :class="prefixCls" class='info_badge' />
    <!-- 头像 -->
    <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" class='avatar_dropdown' />
    <!-- 控制语言 -->
    <!-- <select-lang :class="prefixCls" /> -->
  </div>
</template>

<script>
import GlobalBreadcrumb from './GlobalBreadcrumb'
import AvatarDropdown from './AvatarDropdown'
import InfoBadge from './InfoBadge'
import SelectLang from '@/components/SelectLang'

export default {
  name: 'RightContent',
  components: {
    GlobalBreadcrumb,
    AvatarDropdown,
    InfoBadge,
    SelectLang
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
  width: 93%;
}
.global_breadcrumb {
  height: 100%;
  flex: 8;
}
.info_badge {
  width: 50px;
  height: 100%;
  flex: 1;
  text-align: right;
}
.avatar_dropdown {
  width: 120px;
  flex: 1;
}
</style>
