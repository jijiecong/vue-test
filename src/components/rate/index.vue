<template>
  <el-rate
    v-model="rate_five"
    disabled
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    show-text
    text-color="#ff9900"
    :text-template="rate_ten">
  </el-rate>
</template>

<script>
  export default {
    props: {
      rate_five: {
        type: Number,
        required: true,
      },
      rate_ten: {
        type: String,
        required: true
      }
    }
  }
</script>
