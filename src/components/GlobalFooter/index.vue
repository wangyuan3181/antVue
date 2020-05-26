<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="#" target="_blank">PFT 工程管理系统</a>
    </template>
    <template v-slot:copyright>
      <a>Copyright &copy; 2020 PFT出品</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
