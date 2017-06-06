/**
*
* 穿梭框组件
*
* @Date: 2017/5/23
* @Author: jijc
*
*/
<style lang="scss" type="text/scss" rel="stylesheet/scss" >
  .transfer-meiren {
    .el-transfer-panel__filter .el-input__inner {
      height: 30px
    }
  }

</style >

<template >
  <div >
    <el-transfer class="transfer-meiren"
      v-loading.body="load_data"
      filterable ref="transfer"
      :filter-method="filterMethod"
      :titles="titles"
      :placeholder="placeholder"
      @change="handleChange"
      v-model="selected"
      :data="selectData" >
    </el-transfer >
  </div >
</template >
<script >
  export default {
    props: {
      initUrl: String,
      initId: [String, Number],
      params: {
        type: Object,
        default: () => {
          return {}
        }
      },
      placeholder: {
        type: String,
        default: '请输入搜索内容'
      },
      titles: {
        type: Array,
        default: () => {
          return ['列表1', '列表2']
        }
      },
    },
    data() {
      return {
        load_data: false,
        selectData: [],
        selected: [],
        filterMethod(query, item) {
          return item.label.indexOf(query) > -1;
        }
      };
    },
    created(){
      this.initUrl && this.get_form_data()
    },
    methods: {
      //获取数据
      get_form_data(){
        this.load_data = true
        let param = this.$qs.stringify({ initId: this.initId })
        this.axios.post(this.initUrl + '/init', param)
          .then(({ data: responseData }) => {
            if (responseData !== null) {
              let selectData = responseData.selectData;
              let selected = responseData.selected;
              let data = [];
              selectData.forEach(function (element) {
                data.push({
                  label: element.name,
                  key: element.id
                })
              });
              this.selectData = data;
              let value = [];
              selected.forEach(function (element) {
                value.push(element.id)
              });
              this.selected = value;
            }
            this.load_data = false
          }).catch(() => {
          this.load_data = false
        })
      },
      handleChange(value, direction, movedKeys) {
        this.load_data = true
        let param = this.$qs.stringify({ initId: this.initId, selectedIds: movedKeys.join(",") })
        this.axios.post(this.initUrl + '/' + direction, param)
          .then(({ data: responseData }) => {
            this.$message.success("操作成功")
            this.load_data = false
          }).catch(() => {
          this.load_data = false
        })
      },
      async sure(){
        let transfer = this.$refs.transfer;
        if (transfer.leftChecked.length !== 0) {
          await transfer.addToRight();
        }
        if (transfer.rightChecked.length !== 0) {
          await transfer.addToLeft();
        }
      },
    },
  };
</script >
