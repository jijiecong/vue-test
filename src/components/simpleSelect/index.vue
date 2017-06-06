/**
*
* 选择下拉框组件
*
* @Date: 2017/3/23 18:41
*
*/
<template >
  <el-row >
    <el-col :span="label_span" class="simple-select-label" :class="[size ? 'label--' + size : '']" v-if="title" >
      <label v-text="titleText" ></label >
    </el-col >
    <el-col :span="select_span" >
      <el-select
        :value="currentValue"
        :multiple="multiple"
        filterable
        :clearable="clearable"
        :placeholder="placeholder"
        v-loading="load_data"
        :size="size"
        @input="handleInput" >
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.id" >
        </el-option >
      </el-select >
    </el-col >
  </el-row >
</template >

<script >
  export default {
    props: {
      value: [String, Number, Array],
      selectUrl: String,
      selectData: {
        type: Array,
        default: () => {
          return []
        }
      },
      params: {
        type: Object,
        default: () => {
          return {}
        }
      },
      size: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: null
      },
      clearable: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        options: this.selectData,
        load_data: false,
        label_span: 0,
        currentValue: this.value,
      }
    },
    created(){
      if (this.title !== null) {
        this.label_span = 6
      }
      this.selectUrl && this.get_select_data()
    },
    watch: {
      value(val) {
        this.setCurrentValue(val)
      },
    },
    computed: {
      select_span(){
        return 24 - this.label_span
      },
      titleText(){
        return this.title + '：'
      }
    },
    methods: {
      handleInput(val) {
        this.setCurrentValue(val);
        this.$emit('input', val);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      get_select_data(){
        this.load_data = true
        this.$http.get(this.selectUrl, {
          params: this.params
        }).then(({ data }) => {
          this.options = data
          this.load_data = false
        }).catch(() => {
          this.load_data = false
        })
      },
    }
  }
</script >
