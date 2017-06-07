<template>
  <div class="panel">
    <img src="../../assets/logo.png">
    <panel-title :title="$route.meta.title"></panel-title>
    <h2>{{title}}</h2>
    <div align="center">
      <form @submit.prevent="on_refresh">
        <el-row style="margin-bottom: 20px;">
          <el-col :span="17" :offset="4">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-select v-model="city" placeholder="请选择" >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" >
                  </el-option >
                </el-select >
              </el-col>
              <el-col :span="1">
                <el-button type="primary" icon="search" native-type="submit">查看详情</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </form>

      <el-table
        ref="multipleTable"
        :data="articles"
        v-loading="load_data"
        element-loading-text="拼命加载中"
        :align="'center'"
        border
        style="width: 60%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="电影"
          width="">
        </el-table-column>
        <el-table-column
          prop="year"
          label="年份"
          width="100">
        </el-table-column>
        <el-table-column
          label="平均得分"
          width="100">
          <template scope="scope">
            <label v-text="scope.row.rating.average" ></label>
          </template>
        </el-table-column>
        <el-table-column
          prop="alt"
          label="链接"
          width="">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template scope="scope">
            <el-button type="info" icon="edit" size="small" @click="to_router('movieDetail',scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="rows"
          layout="total,prev, pager, next"
          :total="getHotMovies.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import{panelTitle, simpleSelect } from  'components'
  import {vue_test} from 'common/request_api'
  import {mapGetters,mapActions } from 'vuex'

  export default{
    data(){
      return {
        options: [{
          value: '杭州',
          label: '杭州'
        }, {
          value: '北京',
          label: '北京'
        }, {
          value: '上海',
          label: '上海'
        }],
        //当前页码
        currentPage: 1,
        //每页显示多少条数据
        rows: 10,
        start:0,
        title:'',
        city: '杭州',
        articles:[],
        //请求时的loading效果
        load_data: true
      }
    },
    components: {
      panelTitle,
      simpleSelect
    },
    computed: {
      ...mapGetters(['getHotMovies']),
      getMovies: {
        get(){
          return this.getHotMovies
        },
        set(val){
          this.setHotMovies(val)
        }
      },
    },
    created(){
      this.get_table_data()
    },
    methods: {

      ...mapActions(['setHotMovies']),
      //跳转路由
      to_router(routerName, row){
        this.$router.push({name: routerName, params: {id: row.id}})
      },
      //刷新
      on_refresh(){
        this.get_table_data()
      },
      //获取数据
      get_table_data(){
        this.load_data = true
        this.$http.get(vue_test.list, {
          params: {
            city: this.city,
            start: this.start,
            count: this.rows
          }
        }).then(({data}) => {
          this.getMovies = data
          this.articles = data.subjects
          this.title = data.title
          this.load_data = false
        }).catch(() => {
          this.load_data = false
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //页码选择
      handleCurrentChange(val) {
        this.currentPage = val
        this.start = (this.currentPage-1) * this.rows
        this.get_table_data()
      },
    }
  }
</script>
