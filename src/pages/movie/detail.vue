<template>
  <div class="panel" >
    <panel-title style="text-align: center;margin-bottom: 30px;margin-top: 30px;font-size: 24px" :title="$route.meta.title"></panel-title>
    <div class="panel-body"  style="width: 60%;"
         v-loading="load_data"
         element-loading-text="拼命加载中" >
      <el-row>
        <el-col :offset="14">

          <el-form ref="form" :model="form" label-width="80px" >
            <el-form-item label="海报:" prop="image">
              <image-preview :disabled="disabled" :fileList="fileList" style="margin-top: -40px"></image-preview>
            </el-form-item>
            <el-form-item label="电影名:" prop="title">
              <el-input v-model="form.title" placeholder="请输入内容" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="电影简介:" prop="summary">
              <el-input v-model="form.summary" placeholder="请输入内容" type="textarea" :autosize="{ minRows: 2, maxRows: 10}" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="年份:" prop="year">
              <el-input v-model="form.year" placeholder="请输入内容" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="链接:" prop="alt">
              <el-input v-model="form.alt" placeholder="请输入内容" :readonly="true" ></el-input>
            </el-form-item>
            <el-form-item label="国家:" v-for="country in form.countries" :key="country">
              <el-input :value="country" placeholder="请输入内容" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="导演:" v-for="director in form.directors" :key="director.id">
              <el-input  :value="director.name" placeholder="请输入内容" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="评分:">
              <rate :rate_five="rate_five" :rate_ten="rate_ten" style="margin-top: 7px"></rate>
            </el-form-item>
            <el-form-item align="center">
              <el-button  @click="$router.back()">取消</el-button>
              <el-button type="info" @click="$router.back()">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {panelTitle,imagePreview,rate } from 'components'
  import {vue_test} from 'common/request_api'

  export default{
    data(){
      return {
        id: this.$route.params.id,
        load_data: true,
        autoUpload: true,
        action: '',
        imageUrl:'',
        fileList:[],
        disabled: true,
        rate_five:0,
        rate_ten:'',
        form: {
          title:'',
          summary:'',
          year:'',
          alt:'',
          rating:{
            average:''
          },
        }
      }
    },
    created(){
      this.get_table_data()
    },
    methods: {
      //获取数据
      get_table_data(){
        this.load_data = true
        this.$http.get(vue_test.detail+"/"+this.id, {

        }).then(({data}) => {
          this.form = data
          this.imageUrl = data.images.medium
          this.fileList.push({url:data.images.medium,name:data.title})
          this.rate_five = data.rating.average/2
          this.rate_ten = data.rating.average.toString()
          this.load_data = false
        }).catch(() => {
          this.load_data = false
        })
      },
    },
    components: {
      panelTitle,
      imagePreview,
      rate
    }
  }
</script>
