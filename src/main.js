// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials=true;
// axios.defaults.baseURL = '127.0.0.1:3000/api'

// //返回状态判断
// axios.interceptors.response.use((res) =>{
//   console.log(res);
//   //对响应数据做些事
//   if(res.status  !=200){
//     // _.toast(res.data.msg);
//     return Promise.reject(res);
//   }
//   return res;
// }, (error) => {
//   //404等问题可以在这里处理
//   _.toast("网络异常", 'fail');
//   return Promise.reject(error);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
