<template>
 <a-table :columns="columns" :data-source="data" bordered :pagination="false">
    <a slot="serial" slot-scope="text, record, index">{{ index+1 }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
</template>

<script>
import { ArticleListContent } from '@/components'
import IconText from '@/views/list/search/components/IconText'


const columns = [
  {
    title: '顺序',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '环节',
    dataIndex: 'task',
    key: 'task',
  },
  {
    title: '人员',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '接收时间',
    dataIndex: 'time1',
    key: 'time1',
  },
  {
    title: '完成时间',
    key: 'time2',
    dataIndex: 'time2'
  },
  {
    title: '阶段用时',
    key: 'use1',
    dataIndex: 'use1'
  },
  {
    title: '累计',
    key: 'use2',
    dataIndex:'use2'
  },
    {
    title: '状态',
    key: 'action',
    dataIndex: 'action',
  },
];

const data = [
  {
    key: '1',
    task: '受理',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
   {
    key: '2',
    task: '现场查勘',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
   {
    key: '3',
    task: '方案审核',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
     {
    key: '4',
    task: '表计审核',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
     {
    key: '5',
    task: '设计',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
    {
    key: '6',
    task: '预算',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },    {
    key: '7',
    task: '经理审批',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
      {
    key: '7',
    task: '施工派工',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
  {
    key: '7',
    task: '签订合同',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
   {
    key: '7',
    task: '前期费用',
    user: '王三',
    time1:"2020-1-1",
    time2:"2020-1-1",
    use1:"1d",
    use2:"1d",
    action: ''
  },
   {
    key: '7',
    task: '工程施工',
    user: '王三',
    time1:"2020-1-1",
    time2:"",
    use1:"",
    use2:"",
    action: '超期'
  },
   {
    key: '7',
    task: '工程验收',
    user: '王三',
    time1:"",
    time2:"",
    use1:"",
    use2:"",
    action: ''
  },
   {
    key: '7',
    task: '工程竣工',
    user: '王三',
    time1:"",
    time2:"",
    use1:"",
    use2:"",
    action: ''
  },
   {
    key: '7',
    task: '决算',
    user: '王三',
    time1:"",
    time2:"",
    use1:"",
    use2:"",
    action: ''
  },
   {
    key: '7',
    task: '结算',
    user: '王三',
    time1:"",
    time2:"",
    use1:"",
    use2:"",
    action: ''
  },
   {
    key: '7',
    task: '归档',
    user: '王三',
    time1:"",
    time2:"",
    use1:"",
    use2:"",
    action: ''
  },
];

export default {
  name: 'Article',
  components: {
    IconText,
    ArticleListContent
  },
  data () {
    return {
      loading: true,
      loadingMore: false,
      data,
      columns,
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
