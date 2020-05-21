<template>
  <div>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item label="标题" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入标题' }]}
          ]" name="name" placeholder="给目标起个名字" />
        </a-form-item>
        <a-form-item label="起止日期" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-range-picker name="buildTime" style="width: 100%" v-decorator="[
            'buildTime',
            {rules: [{ required: true, message: '请选择起止日期' }]}
          ]" />
        </a-form-item>
        <a-form-item label="目标描述" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea rows="4" placeholder="请输入你阶段性工作目标" v-decorator="[
            'description',
            {rules: [{ required: true, message: '请输入目标描述' }]}
          ]" />
        </a-form-item>
        <a-form-item label="衡量标准" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea rows="4" placeholder="请输入衡量标准" v-decorator="[
            'type',
            {rules: [{ required: true, message: '请输入衡量标准' }]}
          ]" />
        </a-form-item>
        <a-form-item label="客户" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" v-decorator="[
            'customer',
            {rules: [{ required: true, message: '请描述你服务的客户' }]}
          ]" />
        </a-form-item>
        <a-form-item label="邀评人" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }" :required="false">
          <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />
        </a-form-item>
        <a-form-item label="权重" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }" :required="false">
          <a-input-number :min="0" :max="100" />
          <span> %</span>
        </a-form-item>
        <a-form-item label="目标公开" :labelCol="{lg: {span: 7}, sm: {span: 7}}" :wrapperCol="{lg: {span: 10}, sm: {span: 17} }" :required="false" help="客户、邀评人默认被分享">
          <a-radio-group v-model="value">
            <a-radio :value="1">公开</a-radio>
            <a-radio :value="2">部分公开</a-radio>
            <a-radio :value="3">不公开</a-radio>
          </a-radio-group>
          <a-form-item>
            <a-select mode="multiple" v-if="value === 2">
              <a-select-option value="4">同事一</a-select-option>
              <a-select-option value="5">同事二</a-select-option>
              <a-select-option value="6">同事三</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
          <a-button htmlType="submit" type="primary">提交</a-button>
          <a-button style="margin-left: 8px">保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>

  </div>
</template>

<script>
const dataSource = [
  {
    title: '工程受理',
    name: '曲辕犁',
    time: '2020-1-1'
  },
  {
    title: '工程查勘',
    name: '曲辕犁',
    time: '2020-1-1'
  },
  {
    title: '工程方案',
    name: '曲辕犁',
    time: '2020-1-1'
  },
  {
    title: '方案审核',
    name: '曲辕犁',
    time: '2020-1-1'
  },
  {
    title: '表计审核',
    name: '曲辕犁',
    time: '2020-1-1'
  },
  {
    title: '工程设计',
    name: '曲辕犁',
    time: '2020-1-1'
  }
]

export default {
  name: 'Article',
  components: {},
  data() {
    return {
      dataSource,
      current: 0,
      steps: [
        {
          title: '工程受理',
          content: 'First-content'
        },
        {
          title: '工程查勘',
          content: 'Second-content'
        },
        {
          title: '工程方案',
          content: 'Last-content'
        }
      ]
    }
  },
  methods: {
    handleSubmit() {}
  }
}
</script>

<style lang="less" scoped>
.app-list {
  .meta-cardInfo {
    zoom: 1;
    margin-top: 16px;

    > div {
      position: relative;
      text-align: left;
      float: left;
      width: 50%;

      p {
        line-height: 32px;
        font-size: 24px;
        margin: 0;

        &:first-child {
          color: rgba(0, 0, 0, 0.45);
          font-size: 12px;
          line-height: 20px;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
