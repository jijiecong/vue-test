<template>
  <div>
    <img src="../../assets/logo.png">
    <panel-title :title="$route.meta.title"></panel-title>
    <simple-select></simple-select>
  </div>
</template>
<script type="text/javascript">
  import{panelTitle, simpleSelect } from  'components'
  import {user} from 'common/request_api'
  import {mapGetters,mapActions } from 'vuex'

  export default{
    data(){
      return {
      }
    },
    components: {
      panelTitle,
      simpleSelect
    },
    computed: {
    },
    created(){
      this.get_table_data()
    },
    methods: {
      //获取数据
      get_table_data(){
        this.$http.get(user.list, {
          params: {
            page: 1,
            rows: 10,
            businessId: 4
          }
        }).then(({data}) => {
          console.log(data)
        }).catch((data) => {
          console.log(data)
        })
      }
    }
  }
</script>
