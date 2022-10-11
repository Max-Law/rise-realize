import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/formRealize/apply',
    component: (resolve) => require(['@/views/pc/apply'], resolve),
    name: '表单申请',
  },
  {
    path: '/mobile/apply',
    component: (resolve) => require(['@/views/mobile/apply'], resolve),
    name: '移动端申请',
  },
  {
    path: '/formRealize/approve',
    component: (resolve) => require(['@/views/pc/approve'], resolve),
    name: '表单审批',
  },
  {
    path: '/mobile/approve',
    component: (resolve) => require(['@/views/mobile/approve'], resolve),
    name: '移动端审批',
  },
  {
    path: '/formRealize/detail',
    component: (resolve) => require(['@/views/pc/detail'], resolve),
    name: '表单详情',
  },
  {
    path: '/mobile/detail',
    component: (resolve) => require(['@/views/mobile/detail'], resolve),
    name: '移动端详情',
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
