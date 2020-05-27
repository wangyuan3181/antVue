<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item,index) in matched" :key="index">
      <a-icon v-if="index==0" type="home" style="margin-right:2px;" />
      <router-link :to="item.path?item.path:'/'">{{item.meta.title}}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  computed: {
    matched() {
      return this.$route.matched
    }
  },
  mounted() {
    console.log(this.$route.matched)
  }
}
</script>

<style lang="less" scoped>
.global_breadcrumb {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>