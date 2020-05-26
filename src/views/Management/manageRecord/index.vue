<template>
  <!-- 工程档案 -->
  <a-row class='manageRecord_container' :gutter="24">
    <a-col :lg="8" :xs='24'>
      <a-card :bordered="false" style="width: 100%">
        <div slot="title">
          <span>工程列表</span>
          &nbsp;
          <a-icon type="double-right" />
          &nbsp;
          <span>列表名字</span>
        </div>
        <!-- 表格 -->
        <a-table :columns="columns" :data-source="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
          <span slot="no" slot-scope="text" align='right'>{{ text }}</span>
          <span slot="name" slot-scope="text" align='right'>{{ text }}</span>
          <span slot="gender" slot-scope="text" align='right'>{{ text }}</span>
        </a-table>
      </a-card>
    </a-col>
    <a-col :lg="16" :xs='24'>
      <a-card :bordered="false" style="width: 100%">
        <a-tabs default-active-key="1">
          <!-- 档案信息 -->
          <a-tab-pane key="1">
            <span slot="tab">
              <a-icon type="form" />
              <span>档案信息</span>
            </span>
            <a-table :columns="columns1" :data-source="data1" bordered>
              <template slot="name" slot-scope="text">
                <a>{{ text }}</a>
              </template>
            </a-table>
          </a-tab-pane>
          <!-- 流程信息 -->
          <a-tab-pane key="2">
            <span slot="tab">
              <a-icon type="align-center" />
              <span>流程信息</span>
            </span>
            <div class="top_content">
              <div v-for="(item,index) in 10" :key='index'>
                <a-card :hoverable='true' style="width:180px;height:180px;margin:0 20px 10px 0;">
                  <p>Card {{index + 1}}</p>
                  <p>Card {{index + 1}}</p>
                  <p>Card {{index + 1}}</p>
                </a-card>
              </div>
            </div>
            <div class="bottom_content">
              <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="表单信息">
                  表单信息 Content of Tab Pane 1
                </a-tab-pane>
                <a-tab-pane key="2" tab="附件信息" force-render>
                  附件信息 Content of Tab Pane 2
                </a-tab-pane>
              </a-tabs>
            </div>
          </a-tab-pane>
          </div>
          </a-tab-pane>
          <!-- 费用信息 -->
          <a-tab-pane key="3">
            <span slot="tab">
              <a-icon type="money-collect" />
              <span>费用信息</span>
            </span>
            <div class="topMoneyContent">
              <p style="font-weight: 550;margin-bottom:12px;">费用详情：</p>
            </div>
            <div class="botMoneyContent">
              <p style="font-weight: 550;margin-bottom:12px;">收支记录：</p>
              <a-table :columns="columns1" :data-source="data1" bordered>
                <template slot="name" slot-scope="text">
                  <a>{{ text }}</a>
                </template>
              </a-table>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      data: [
        {
          key: '1',
          no: 12,
          name: 'John Brown',
          gender: 21
        }
      ],
      pagination: {},
      loading: false,
      columns: [
        {
          title: '工程编号',
          key: 'no',
          dataIndex: 'no'
        },
        {
          title: '工程名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '立项日期',
          className: 'column-gender',
          dataIndex: 'gender',
          key: 'gender',
          width: '40%',
          sorter: true,
          scopedSlots: { customRender: 'gender' }
        }
      ],
      columns1: [
        {
          title: 'Name',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'Cash Assets',
          className: 'column-money',
          dataIndex: 'money'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ],
      data1: [
        {
          key: '1',
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          money: '￥1,256,000.00',
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          money: '￥120,000.00',
          address: 'Sidney No. 1 Lake Park'
        }
      ]
    }
  },
  created() {
    this.fetch()
    for (let i = 0; i < 20; i++) {
      this.data.push({
        key: '1',
        no: 21212,
        name: 'John Brown',
        gender: 322121
      })
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch(params = {}) {
      console.log('params:', params)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>
.manageRecord_container {
  .top_content {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-bottom: 15px;
  }
  .bottom_content {
    width: 100%;
    height: 300px;
  }
}
</style>

<style lang="less">
.manageRecord_container {
  .ant-card-body {
    padding: 8px;
  }
  // 控制表格列样式
  th.column-money,
  td.column-money {
    text-align: center !important;
  }
  th.column-gender,
  td.column-gender {
    text-align: center !important;
  }
}
</style>