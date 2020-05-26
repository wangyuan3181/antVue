<template>
  <div class='title_card_contaoner'>
    <a-card :bordered="false">
      <div class='title'>{{this.$route.meta.title}}</div>
      <!-- 类型 -->
      <div v-for="(item,index) in 6" :key="index">
        <a-button>{{index}}~Default~{{index}}</a-button>
      </div>
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

  .title {
    font-size: 18px;
    font-weight: 550;
  }
}
</style>

<style lang="less">
.title_card_contaoner {
  .ant-card-body {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    div {
      margin-left: 0.8%;
    }
  }
}
</style>