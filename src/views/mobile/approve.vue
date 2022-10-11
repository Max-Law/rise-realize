<!-- 设计器实现-审批页-移动端 -->
<template>
  <div class="mobile-approveForm" v-loading="loading">
    <bm-form-realize
      client="mobile"
      ref="realize"
      :value="formData"
      :config="formConfig"
      :headers="token"
      :otherInfo="otherInfo"
      @submit="formSubmit"
      @save="formSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'mobile-approve',
  data() {
    return {
      // prop
      formData: {},
      formConfig: {},
      otherInfo: {
        applyData: {},
      },
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
      // getFormData(this.query.id)
      //   .then((res) => {
      //     //获取表单配置
      //     const data = res.data;
      //     if (data) {
      //       if (data.formData && data.formData.title) {
      //         document.title = data.formData.title;
      //       }
      //       // formConfig
      //       this.formConfig = JSON.parse(decodeURIComponent(data.formConfig));
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
    //表单提交
    formSubmit() {},
  },
};
</script>

<style lang="scss"></style>
