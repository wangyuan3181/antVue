<template>
  <div class='title_card_contaoner'>
    <a-card :bordered="false">
      <div slot="title">{{this.$route.meta.title}}</div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {
    console.log(this.$route.meta.title)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.title_card_contaoner {
  width: 100%;
  margin-top: -15px;
  margin-bottom: 10px;
  background: #ececec;
}
</style>