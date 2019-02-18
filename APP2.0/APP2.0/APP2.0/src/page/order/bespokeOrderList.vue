<template>
	<div>
		<!-- 预约订单列表 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
			<ul class="flex-box bg-f border-buttom fz14 move-tab bg-f">
				<li class="item" :class="tabNum == 1 ? 'active fc-green' : '' " @click="selectTab(1)">待付款</li>
				<li class="item" :class="tabNum == 2 ? 'active fc-green' : '' " @click="selectTab(2)">待使用</li>
				<li class="item" :class="tabNum == 3 ? 'active fc-green' : '' " @click="selectTab(3)">已使用</li>
				<li class="item" :class="tabNum == 4 ? 'active fc-green' : '' " @click="selectTab(4)">已取消</li>
				<li class="move-line"> </li>
			</ul>
			<div style="height: 36px;"></div>
		</div>
		<!-- list -->
		<ul class="table-list bg-f">
			<router-link to="/bespokeOrderDetail" tag="li" class=" mb-10 item" v-for="i in 10">
				<div class="img-box"><img  src="../../assets/image/ico-bg.png"  width="100%"/></div>
				<p class="fz14 txt-hide">kitcar001</p>
				<p class="fz10 p-hide fc-9">Tuobab智能学车—滨江立业园店滨江立业园店</p>
				<p class="fz16 p-hide fc-green">7月16日10：30-11：30</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"bespokeOrderList",
		data() {
			return {
				tabNum : 1 ,
			};
		},
		components : {
			
		},
		mounted(){
			
		},
		created: function(){
			
		},
		methods: {
			//选中tab
			selectTab(n){
				this.tabNum = n ;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.move-tab{
		.move-line{
			width: 25%;
		}
		
		.item.active:nth-of-type(1)~ .move-line{
			left: 0px;
		}
		.item.active:nth-of-type(2)~ .move-line{
			left: 25%;
		}
		.item.active:nth-of-type(3)~ .move-line{
			left: 50%;
		}
		.item.active:nth-of-type(4)~ .move-line{
			left: 75%;
		}
	}
</style>