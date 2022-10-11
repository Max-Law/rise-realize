<!-- 渲染器-申请页-移动端 -->
<template>
  <div class="mobile-applyForm" v-loading="loading">
    <bm-form-realize
      client="mobile"
      ref="realize"
      :value="formData"
      :config="formConfig"
      :headers="token"
      :otherInfo="otherInfo"
      @submit="formSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'mobile-apply',
  data() {
    return {
      // prop
      formData: {},
      formConfig: {},
      otherInfo: {},
      //insideData
      loading: true,
      annexInfoList: [],
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
      this.handlerGetConfig();
    } else {
      this.$message.warning('请先传递参数');
      this.loading = false;
    }
  },
  methods: {
    handlerGetConfig() {
      //获取表单配置
      // getFormData(this.query.id)
      //   .then((res) => {
      //     if (res.data) {
      //       this.formConfig = JSON.parse(
      //         decodeURIComponent(res.data.formConfig),
      //       );
      //       this.otherInfo = {
      //         query: this.query,
      //         applyData: JSON.parse(JSON.stringify(res.data)),
      //       };
      //       this.$refs.realize.init();
      //       this.loading = false;
      //     } else {
      //       this.loading = false;
      //       this.$message.error(res.data.msg || '获取表单配置失败！');
      //     }
      //   })
      //   .catch(() => {
      //     this.loading = false;
      //     this.$message.error('获取表单配置失败！');
      //   });
    },
    //表单提交
    formSubmit() {},
  },
};
</script>

<style lang="scss"></style>
