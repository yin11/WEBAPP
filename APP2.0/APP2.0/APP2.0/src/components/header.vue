<template>
	<div>
        <!-- 导航栏 -->
			<header class=" head-box bg-f">
				<span class="ico-retrun" @click="back"><i class="left-arrow"></i></span>
        	<h1 class="fz18 border-buttom">{{msg}}</h1>
        </header>
			<div style="height: 44px;"></div>
    </div>
</template>

<script>
	//import router from '@/router/index'
	export default {
		data() {
			return {
				msg:"标题"
			};
		},
		watch:{
			$route: {
			  handler:function(val, oldVal){
					if(val.meta.title){
						if(val.name == 'testExplain'){
							val.query.type == 1 ? this.msg = '科目一' : this.msg = '科目四' ;
						}else{
							this.msg = val.meta.title ;
						}
					}else{
						this.msg = val.query.name ;
					}
				},
				// 深度观察监听
				//deep: true
				immediate: true
			}
		},
		created: function(){
			
		},
		mounted () {  
			
		},
		methods:{
			/*返回上一页*/
			back(){
				this.$router.go(-1);//返回上一层
			},
		}
	}
	
</script>

<style>

</style>
