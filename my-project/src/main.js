// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import vueRouter from 'vue-router';


import VueAwesomeSwiper from 'vue-awesome-swiper'
import './www/css/style.css'
// import "./www/jian/css/htmleaf-demo.css"
// import "./www/jian1/css/htmleaf-demo1.css"
// import './www/icon/iconfont.css'


import aboutMap from './components/aboutMap'
import './www/icon/iconfont.js'

import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(vueRouter);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
    },
  
  
});
