<template>
  <div class="page-header-index-wide">
    <a-row :gutter="24">
       <a-col :sm="24" :md="24" :xl="24" :style="{ marginBottom: '24px' }">
         <div>
        <a-card :bordered="false">
          <a-row>
            <a-col :sm="4" :xs="4">
              <head-info title="项目分类" content="自建工程" :bordered="true" :hasdown="true"/>
              
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="年度新建" content="288" :bordered="true"/>
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="上年延续" content="58" :bordered="true"/>
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="年度设计" content="122" :bordered="true"/>
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="年度完工" content="98" :bordered="true"/>
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="年度验收" content="88" :bordered="true"/>
            </a-col>
            <a-col :sm="3" :xs="3">
              <head-info title="本年决算" content="24" :bordered="true"/>
            </a-col>
          </a-row>
        </a-card>
        </div>
      </a-col>
    </a-row>


  <a-row :gutter="24">
    <a-col :xl="16">
    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
          </div>
          <a-tab-pane loading="true" tab="工程受理" key="1">
            <a-row>
              <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" title="工程受理" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="工程施工" key="2">
            <a-row>
              <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" title="工程施工" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="工程验收" key="3">
            <a-row>
              <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" title="工程验收" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    </a-col>
    <a-col :xl="8">
      <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="施工检查" :style="{ height: '410px' }">
            <div slot="extra" style="height: inherit;">
              <span class="dashboard-analysis-iconGroup">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a-icon type="ellipsis" class="ant-dropdown-link" />
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">操作一</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">操作二</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>
              <div class="analysis-salesTypeRadio">
              </div>
            </div>
            <div>
              <!-- style="width: calc(100% - 240px);" -->
              <div>
                <v-chart :force-fit="true" :height="350" :data="pieData" :scale="pieScale">
                  <v-tooltip :showTitle="false" dataKey="item*percent" />
                  <v-axis />
                  <!-- position="right" :offsetX="-140" -->
                  <v-legend dataKey="item"/>
                  <v-pie position="percent" color="item" :vStyle="pieStyle" />
                  <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
                </v-chart>
              </div>

            </div>
          </a-card>
    </a-col>
  </a-row>


  <a-row :gutter="24" style="margin-top:16px;">
    <a-col :xl="16">
    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrapper" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>今日</a>
              <a>本周</a>
              <a>本月</a>
              <a>本年</a>
            </div>
            <a-range-picker :style="{width: '256px'}" />
          </div>
          <a-tab-pane loading="true" tab="工程设计" key="1">
            <a-row>
              <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData" title="工程设计" />
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="合同签订" key="2">
            <a-row>
              <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :data="barData2" title="合同签订" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    </a-col>
    <a-col :xl="8">
     <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="工程费用" :style="{ height: '410px' }">
            <div slot="extra" style="height: inherit;">
              <!-- style="bottom: 12px;display: inline-block;" -->
              <span class="dashboard-analysis-iconGroup">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a-icon type="ellipsis" class="ant-dropdown-link" />
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">操作一</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">操作二</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>


            </div>
            <div>
              <div id="linechart" :loading="loading" >
               
              </div>

            </div>
          </a-card>

    </a-col>
  </a-row>



    <div class="antd-pro-pages-dashboard-analysis-twoColLayout" :class="isDesktop() ? 'desktop' : ''">
     

    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { ChartCard, MiniArea, MiniBar, MiniProgress, RankList, Bar, Trend, NumberInfo, MiniSmoothArea } from '@/components'
import { mixinDevice } from '@/utils/mixin'
import HeadInfo from '@/components/tools/HeadInfo'

import { Chart } from '@antv/g2';

const barData = []
const barData2 = []
for (let i = 0; i < 12; i += 1) {
  barData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
  barData2.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
}

const linedata = []
for (let i = 0; i < 12; i += 1) {
  linedata.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
  linedata.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
}

const rankList = []
for (let i = 0; i < 7; i++) {
  rankList.push({
    name: '白鹭岛 ' + (i + 1) + ' 号店',
    total: 1234.56 - i * 100
  })
}

const searchUserData = []
for (let i = 0; i < 7; i++) {
  searchUserData.push({
    x: moment().add(i, 'days').format('YYYY-MM-DD'),
    y: Math.ceil(Math.random() * 10)
  })
}
const searchUserScale = [
  {
    dataKey: 'x',
    alias: '时间'
  },
  {
    dataKey: 'y',
    alias: '用户数',
    min: 0,
    max: 10
  }]

const searchTableColumns = [
  {
    dataIndex: 'index',
    title: '排名',
    width: 90
  },
  {
    dataIndex: 'keyword',
    title: '搜索关键词'
  },
  {
    dataIndex: 'count',
    title: '用户数'
  },
  {
    dataIndex: 'range',
    title: '周涨幅',
    align: 'right',
    sorter: (a, b) => a.range - b.range,
    scopedSlots: { customRender: 'range' }
  }
]
const searchData = []
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2)
  })
}

const DataSet = require('@antv/data-set')

const sourceData = [
  { item: '安全检查', count: 32.2 },
  { item: '施工质量', count: 21 },
  { item: '工程材料', count: 17 },
  { item: '工程质量', count: 13 },
  { item: '工程进度', count: 9 }
]

const pieScale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const pieData = dv.rows

export default {
  name: 'Analysis',
  mixins: [mixinDevice],
  components: {
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea,
    HeadInfo
  },
  data () {
    return {
      loading: true,
      rankList,

      // 搜索用户数
      searchUserData,
      searchUserScale,
      searchTableColumns,
      searchData,

      barData,
      barData2,

      //
      pieScale,
      pieData,
      sourceData,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      }
    }
  },
  created () {
    setTimeout(() => {
      this.loading = !this.loading
    }, 100)
  },
  mounted() {
     setTimeout(() => {
            const chart = new Chart({
              container: 'linechart',
              height: 320,
              autoFit:400,
              forceFit: true
            });

            const data = [
              { year: '1月', type:'收入',value: 3 },
              { year: '2月', type:'收入',value: 4 },
              { year: '3月', type:'收入',value: 3 },
              { year: '4月', type:'收入',value: 5 },
              { year: '5月', type:'收入',value: 4 },
              { year: '6月', type:'收入',value: 6 },
              { year: '7月',type:'收入', value: 7 },
              { year: '8月', type:'收入',value: 9 },
              { year: '9月', type:'收入',value: 13 },
              { year: '10月', type:'收入',value: 2 },
              { year: '11月', type:'收入',value: 1 },
              { year: '12月', type:'收入',value: 0 },
              { year: '1月', type:'支出',value: 2 },
              { year: '2月', type:'支出',value: 2 },
              { year: '3月', type:'支出',value: 5 },
              { year: '4月', type:'支出',value: 6 },
              { year: '5月',type:'支出', value: 7 },
              { year: '6月', type:'支出',value: 9 },
              { year: '7月', type:'支出',value: 1 },
              { year: '8月',type:'支出', value: 5 },
              { year: '9月', type:'支出',value: 19 },
              { year: '10月', type:'支出',value: 2 },
              { year: '11月', type:'支出',value: 2 },
              { year: '12月', type:'支出',value: 1 },
            ];

            chart.data(data);
            chart.scale({
              year: {
                range: [0, 1],
              },
              value: {
                alias:"值",
                nice: true,
              },
            });
            chart.tooltip({
              showCrosshairs: true,
              shared: true,
            });
            chart.line().position('year*value').color('type');
            chart.point().position('year*value').color('type').shape('circle');
            chart.render();
        }, 1000)
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
