<template>
  <div class='title_card_contaoner'>
    <a-card :bordered="false">
      <a-row :gutter='24'>
        <a-col :xl="4" :lg="24" :md="24" :sm="24" :xs="24">
          <div class='title'>{{this.$route.meta.title}}</div>
        </a-col>
        <!-- 类型 -->
        <a-col v-for="(item,index) in 6" :key="index" :xl="3" :lg="4" :md="5" :sm="8" :xs="12">
          <a-button>{{index}}~Default~{{index}}</a-button>
        </a-col>
      </a-row>
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
      margin-bottom: 1px;
    }
  }
}
</style>