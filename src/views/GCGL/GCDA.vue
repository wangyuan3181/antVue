<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <a-row :gutter="24">
      <!-- 左侧列表 -->
      <a-col :md="24" :lg="8">
        <a-card :bordered="false">
          <div class='ProjectList'>
            <span>工程列表</span>
          </div>
          <s-table ref="table" size="default" rowKey="key" :columns="columns" :data="loadData">
            <span slot="serial" slot-scope="text, record, index">
              {{ index + 1 }}
            </span>
          </s-table>
        </a-card>
      </a-col>
      <!-- 右侧信息 -->
      <a-col :md="24" :lg="16">
        <a-card style="width:100%;" :bordered="false" :tabList="tabListNoTitle" :activeTabKey="noTitleKey" @tabChange="key => handleTabChange(key, 'noTitleKey')">
          <article-page v-if="noTitleKey === 'article'"></article-page>
          <app-page v-else-if="noTitleKey === 'app'"></app-page>
          <project-page v-else-if="noTitleKey === 'project'"></project-page>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import moment from 'moment'
import { PageView, RouteView } from '@/layouts'
import { STable } from '@/components'
import { mapGetters } from 'vuex'
import { getRoleList, getServiceList } from '@/api/manage'
import { AppPage, ArticlePage, ProjectPage } from './page'

export default {
  components: {
    RouteView,
    PageView,
    STable,
    AppPage,
    ArticlePage,
    ProjectPage
  },
  data() {
    return {
      tagInputVisible: false,
      tagInputValue: '',

      teams: [],
      teamSpinning: true,

      tabListNoTitle: [
        {
          key: 'article',
          tab: '档案信息'
        },
        {
          key: 'app',
          tab: '流程信息'
        },
        {
          key: 'project',
          tab: '费用信息'
        }
      ],
      noTitleKey: 'app',
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
      },
      options: {
        alert: {
          show: true,
          clear: () => {
            this.selectedRowKeys = []
          }
        },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange
        }
      }
    }
  },
  mounted() {
    this.getTeams()
  },
  methods: {
    ...mapGetters(['nickname', 'avatar']),

    getTeams() {
      this.$http.get('/workplace/teams').then(res => {
        this.teams = res.result
        this.teamSpinning = false
      })
    },

    handleTabChange(key, type) {
      this[type] = key
    },

    handleTagClose(removeTag) {
      const tags = this.tags.filter(tag => tag !== removeTag)
      this.tags = tags
    },

    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange(e) {
      this.tagInputValue = e.target.value
    },
    handleEdit(record) {
      this.$emit('onEdit', record)
    },

    handleTagInputConfirm() {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }

      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
// 工程列表
.ProjectList {
  width: 100%;
  height: 55px;
  margin-top: -25px;
  span {
    font-weight: 550;
    font-size: 16px;
    line-height: 55px;
  }
  // background: #000;
}
</style>
