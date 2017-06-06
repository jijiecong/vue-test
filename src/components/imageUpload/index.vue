<template>
 <div>
    <el-upload
      ref="upload"
      :action="action"
      :auto-upload="autoUpload"
      list-type="picture-card"
      :http-request="httpRequest"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-button v-if="!autoUpload" style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      action: {
        type: String,
        require: true
      },
      autoUpload: {
        type: Boolean,
        require: true
      }
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    create(){

    },
    methods: {
      async httpRequest(option) {//自定义上传方法
//        console.log(option.action)
        console.log(option)
        let imageData = new FormData();
          imageData.append(option.filename, option.file);
        this.axios.post(option.action, imageData)
          .then(({ data: responseData }) => {
            if (responseData !== null) {

            }
          }).catch(() => {
        })
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        //移除图片时执行
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
