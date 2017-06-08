<template>
  <div>
    <el-upload
      class="upload-demo"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      :disabled="disabled"
      list-type="picture">
      <el-button v-if="!disabled" size="small" type="primary">点击上传</el-button>
      <div slot="tip" v-if="!disabled" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt readonly="true">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      autoUpload: {
        type: Boolean,
        require: true
      },
      imageUrl: {
        type: String,
      },
      disabled:{
        type: Boolean,
        require: true
      },
      fileList:{
        type:Array,
        require: true
      }
    },
    data() {
      return {
        dialogImageUrl: '',
        title:"",
        dialogVisible: false,
        fileList2: []
      };
    },
    created(){
        this.fileList2 = this.fileList
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.title = file.name;
        this.dialogVisible = true;
      }
    }
  }
</script>
