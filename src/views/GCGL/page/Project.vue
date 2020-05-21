<template>
  <div class="ant-pro-pages-account-projects-cardList">
    <a-card :body-style="{padding: '0px 0px'}" :bordered="false">
      <a-card hoverable class='detail_title'>
        <span>工程费用总览</span>
      </a-card>
      <!-- 工程费用总览表格 -->
      <a-card hoverable class='detail_box'>
        <div>
          <div class='list_title'>
            <span>信息条目</span>
            <span>基础信息</span>
          </div>
          <div v-for="item in dataTable1" :key="item.key" class='list_content'>
            <p>{{item.name}}</p>
            <p>{{item.value}}</p>
          </div>
        </div>
        <div>
          <div class='list_title'>
            <span>信息条目</span>
            <span>收入信息</span>
          </div>
          <div v-for="item in dataTable2" :key="item.key" class='list_content'>
            <p>{{item.name}}</p>
            <p>{{item.value}}</p>
          </div>
        </div>
      </a-card>
      <!-- 工程费用明细 -->
      <a-card hoverable class='detail_bottom_box'>
        <p class='detail_title'>工程费用明细</p>
        <a-tabs>
          <a-tab-pane key="1" tab="全 部">
            <a-table :columns="columnsAll" :data-source="dataAll">
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="2" tab="收 入">
            <a-table :columns="columnsIn" :data-source="dataIn">
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="3" tab="支 出">
            <a-table :columns="columnsOut" :data-source="dataOut">
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-card>
  </div>
</template>

<script>
import moment from 'moment'
import { TagSelect, StandardFormRow, Ellipsis, AvatarList } from '@/components'
const TagSelectOption = TagSelect.Option
const AvatarListItem = AvatarList.AvatarItem
import { STable } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'

export default {
  name: 'Project',
  components: {
    AvatarList,
    AvatarListItem,
    Ellipsis,
    TagSelect,
    TagSelectOption,
    StandardFormRow,
    STable
  },
  data() {
    return {
      columnsAll: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 80
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true
        },
        {
          title: 'Long Column Long Column Long Column',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true
        },
        {
          title: 'Long Column Long Column',
          dataIndex: 'address',
          key: 'address 3',
          ellipsis: true
        },
        {
          title: 'Long Column',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: true
        }
      ],
      dataAll: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser']
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher']
        }
      ],
      dataTable1: [
        {
          key: '1',
          name: 'John Brown',
          value: 32
        },
        {
          key: '2',
          name: 'Jim Green',
          value: 42
        },
        {
          key: '3',
          name: 'Joe Black',
          value: 32
        },
        {
          key: '4',
          name: 'Joe Black',
          value: 32
        },
        {
          key: '5',
          name: 'Joe Black',
          value: 32
        }
      ],
      dataTable2: [
        {
          key: '1',
          name: 'John Brown',
          value: 32
        },
        {
          key: '2',
          name: 'Jim Green',
          value: 42
        },
        {
          key: '3',
          name: 'Joe Black',
          value: 32
        },
        {
          key: '4',
          name: 'Joe Black',
          value: 32
        },
        {
          key: '5',
          name: 'Joe Black',
          value: 32
        },
        {
          key: '6',
          name: 'Joe Black',
          value: 32
        }
      ],
      data: [],
      form: this.$form.createForm(this),
      loading: true,
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '工程编号',
          dataIndex: 'no'
        },
        {
          title: '工程名称',
          dataIndex: 'description'
        },
        {
          title: '立项日期',
          dataIndex: 'updatedAt',
          sorter: true,
          customRender: text => text.substring(0, 10)
        }
      ],
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getServiceList(Object.assign(parameter, this.queryParam)).then(res => {
          return res.result
        })
      }
    }
  },
  filters: {
    fromNow(date) {
      return moment(date).fromNow()
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleSubmit() {},
    validate(rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error('需要以 user- 开头'))
      }
      callback()
    },
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    getList() {
      this.$http.get('/list/article', { params: { count: 8 } }).then(res => {
        console.log('res', res)
        this.data = res.result
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-pages-account-projects-cardList {
  margin-top: 24px;

  /deep/ .ant-card-meta-title {
    margin-bottom: 4px;
  }

  /deep/ .ant-card-meta-description {
    height: 44px;
    overflow: hidden;
    line-height: 22px;
  }

  .cardItemContent {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;

    > span {
      flex: 1 1;
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;
    }

    /deep/ .ant-pro-avatar-list {
      flex: 0 1 auto;
    }
  }
}

.detail_title {
  font-weight: 550;
}
.detail_box {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  span {
    line-height: 10px;
  }
  .list_title {
    display: flex;
    flex-direction: row;
    span {
      height: 20px;
      flex: 1;
      text-align: center;
    }
  }
  .list_content {
    font-size: 16px;
    margin-bottom: -4px;
    display: flex;
    flex-direction: row;
    p {
      height: 20px;
      flex: 1;
      text-align: center;
    }
  }
}
</style>

<style lang="less">
.detail_box {
  .ant-card-body {
    display: flex;
    flex-direction: row;
    div {
      flex: 1;
    }
  }
}
</style>