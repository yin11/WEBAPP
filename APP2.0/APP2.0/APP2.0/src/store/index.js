import Vue from 'vue';
import Vuex from 'vuex';
import { getStore } from '../assets/js/comm'

Vue.use(Vuex);

const state={//要设置的全局访问的state对象
	isLogin: true, //用户是否登录
};

if(getStore("token")){
	state.token = getStore("token") ;
}


const store = new Vuex.Store({
	state
});
 
export default store;