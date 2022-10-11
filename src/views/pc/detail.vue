<!-- 设计器实现-详情页-移动端 -->
<template>
  <div class="PC-detailForm" v-loading="loading">
    <bm-form-realize
      client="mobile"
      ref="realize"
      :value="formData"
      :config="formConfig"
      :headers="token"
      :otherInfo="otherInfo"
    />
  </div>
</template>

<script>
export default {
  name: 'PC-detail',
  data() {
    return {
      // prop
      formData: {},
      formConfig: {
        disabled: true,
      },
      otherInfo: {},
      //insideData
      loading: true,
      query: {}, //传值参数
    };
  },
  components: {},
  computed: {
    token() {
      return {
        Authorization: 'Bearer ',
      };
    },
  },
  created() {
    //传参
    this.query = this.$route.query;
    if (this.query.title) {
      document.title = this.query.title;
    }
    if (this.query.id) {
      this.handlerInit();
    } else {
      this.$message.warning('请先传递参数');
      this.loading = false;
    }
  },
  methods: {
    handlerInit() {
      // getTaskFormData(this.query.id)
      //   .then((res) => {
      //     //获取表单配置
      //     const data = res.data;
      //     if (data) {
      //       if (data.formData && data.formData.title) {
      //         document.title = data.formData.title;
      //       }
      //       // formConfig
      //       this.formConfig = JSON.parse(decodeURIComponent(data.formConfig));
      //       this.formConfig.disabled = true;
      //       this.otherInfo = {
      //         query: this.query,
      //         applyData: JSON.parse(JSON.stringify(data)),
      //       };
      //       // 申请数据
      //       this.formData = data.formData;
      //       // 实例化
      //       this.$refs.realize.init();
      //     } else {
      //       throw new Error(data.msg);
      //     }
      //   })
      //   .catch((err) => {
      //     this.loading = false;
      //     this.$message.error(err || '表单加载失败！');
      //   });
    },
  },
};
</script>

<style lang="scss"></style>
