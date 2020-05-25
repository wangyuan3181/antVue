<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item,index) in matched" :key="index">
      {{item.meta.title}}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'GlobalBreadcrumb',
  data() {
    return {
      basePath: '/Home'
    }
  },
  computed: {
    routes() {
      return this.$store.state.permission.addRouters[0].children
    },
    matched() {
      return this.$route.matched
    }
  },
  mounted() {
    console.log(this.$route.matched)
    for (const i of this.$route.matched) {
      console.log(i.meta.title)
    }

    // console.log('sws', this.routes)

    // SET_ROUTERS
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