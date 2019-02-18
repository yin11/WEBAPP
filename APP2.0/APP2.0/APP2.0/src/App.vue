<template>
  <div id="app">
		<!-- <transition :name="transitionName">  --> 
      <router-view/>
    <!-- </transition> -->
		<!--  -->
		<!-- <v-error></v-error> -->
		<!-- 底部菜单栏 -->
		<v-menu v-show="showMune"></v-menu>
  </div>
</template>

<script>
	import bottomMenu from '@/components/menu'
	export default {
		name: 'App',
		components : {
			'v-menu':bottomMenu ,
		},
		data () {
			return {
				showMune:true,
				transitionName:''
			}
		},
		watch:{
			$route( to , from ){     
				//console.log( to , from ) //  to , from 分别表示从哪跳转到哪，都是一个对象 ,,to.path   ( 表示的是要跳转到的路由的地址 eg:  /home )
				if(to.path != "/" && to.path != "/enrollList" && to.path != "/today" && to.path != "/person" && to.path != "/" && to.path != "/bespoke"){
					this.showMune = false ;
					//如果to索引大于from索引,判断为前进状态,反之则为后退状态
					if(to.meta.index > from.meta.index){
						//设置动画名称
						this.transitionName = 'transition-left';
					}else{
						this.transitionName = 'transition-right';
					}
				}else{
					this.showMune = true ;
				}
			}
		},
	}
</script>

<style>
	@import 'swiper/dist/css/swiper.css';
</style>
<style lang="scss">
	
</style>
