<template>
  <div class="app-list">
    <div style="display:flex;overflow-x:scroll;">
      <div v-for="item in dataSource" :key="item.title" style="display:inline;">
        <a-card :hoverable="true" style="width:200px;margin-right:20px;margin-bottom:10px;">
          <a-card-meta>
            <div style="margin-bottom: 3px" slot="title">{{ item.title }}</div>
            <div class="meta-cardInfo" slot="description">
              <p>{{ item.name }}</p>
              <p>{{ item.time }}</p>
              <a-tag>完成</a-tag>
            </div>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <div>
      <a-card style="width:100%" :bordered="false" :tabList="tabListNoTitle" :activeTabKey="noTitleKey" @tabChange="key => handleTabChange(key, 'noTitleKey')">
        <form-page v-if="noTitleKey === 'form'"></form-page>
        <attr-page v-else-if="noTitleKey === 'attr'"></attr-page>
      </a-card>
    </div>
  </div>
</template>

<script>
import { FormPage, AttrPage } from './flowdown'
import { getRoleList, getServiceList } from '@/api/manage'
import { STable } from '@/components'
import moment from 'moment'

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
  components: {
    FormPage,
    AttrPage,
    STable
  },
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
      ],
      tabListNoTitle: [
        {
          key: 'form',
          tab: '表单信息'
        },
        {
          key: 'attr',
          tab: '附件信息'
        }
      ],
      noTitleKey: 'form'
    }
  },
  methods: {
    handleTabChange(key, type) {
      this[type] = key
    }
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
