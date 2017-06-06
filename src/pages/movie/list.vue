<template>
  <div>
    <img src="../../assets/logo.png">
    <panel-title :title="$route.meta.title"></panel-title>
    <simple-select></simple-select>
    <h2>{{title}}</h2>
    <ul v-for="article in articles">
      <li>
        {{article.title}}
      </li>
    </ul>
    <div v-text="getHotMovies.total"></div>
  </div>
</template>
<script type="text/javascript">
  import{panelTitle, simpleSelect, simpleImageUpload } from  'components'
  import {vue_test} from 'common/request_api'
  import {mapGetters,mapActions } from 'vuex'

  export default{
    data(){
      return {
        title:'',
        articles:[]
      }
    },
    components: {
      panelTitle,
      simpleSelect,
      simpleImageUpload
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
      //获取数据
      ...mapActions(['setHotMovies']),
      get_table_data(){
        this.$http.get(vue_test.list, {
          headers:{}
        }).then(({data}) => {
          console.log(data)
          this.getMovies = data
          this.articles = data.subjects
          this.title = data.title
        }).catch((data) => {
          console.log(data)
        })
      }
    }
  }
</script>
