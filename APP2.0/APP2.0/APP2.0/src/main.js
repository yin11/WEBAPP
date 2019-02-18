// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/rem'


import header from '@/components/header.vue'
import error from '@/components/error.vue'
import notOpen from '@/components/notOpen.vue'
import nextFooter from '@/page/today/nextFooter.vue'
import dialog from '@/components/dialog.vue'


import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.config.productionTip = false


import store from './store'//引入store


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { 
		App ,
	},
	template: '<App/>',
	store,//使用store
})

//全局挂载head组件
Vue.component("v-header",header);
Vue.component("v-error",error);
Vue.component("v-nextFooter",nextFooter);
Vue.component("v-notOpen",notOpen);
Vue.component("v-dialog",dialog);

//挂载swiper
Vue.use(VueAwesomeSwiper);


import * as comm from '@/assets/js/comm'
Vue.prototype.$comm = comm  ;

import * as getData from '@/assets/js/getData'
Vue.prototype.$getData = getData ;


/* import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'@/assets/image/no.png',
    loading:'@/assets/image/no.png'
}) */
import { Lazyload , Popup , Picker , DatetimePicker  , Swipe, SwipeItem , Notify  } from 'vant';
Vue.use(Lazyload, {
	error:'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
	loading:'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif'
}).use(Popup).use(Picker).use(DatetimePicker).use(Swipe).use(SwipeItem).use(Notify);