<template>
	<div>
		<!-- 优惠券列表 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
			<ul class="flex-box bg-f border-buttom fz14 move-tab bg-f">
				<li class="item" :class="tabNum == 1 ? 'active fc-green' : '' " @click="selectTab(1)">未使用</li>
				<li class="item" :class="tabNum == 2 ? 'active fc-green' : '' " @click="selectTab(2)">已使用</li>
				<li class="item" :class="tabNum == 3 ? 'active fc-green' : '' " @click="selectTab(3)">已过期</li>
				<li class="move-line"> </li>
			</ul>
			<div style="height: 36px;"></div>
		</div>
		<!-- list -->
		<ul class="list-box bg-f">
			<li class="coupon-box fz12 outdate" >
				<div class="coupon-l">
					<div class="num">
						<p class="fc-green fz14">￥<i class="fz26">200</i></p>
						<p>限时优惠</p>
					</div>
					<div class="tip">
						<p class="clearfix"><span class="fl-l">sss</span><span class="fl-r fz9 fc-9">可叠加</span></p>
						<p>sssss</p>
						<p class="fc-9 fz9 ">2018-2019</p>
					</div>
				</div>
				<div class="coupon-r fz16">立即使用</div>
			</li>
			<li class="coupon-box fz12 used">
				<div class="coupon-l">
					<div class="num">
						<p class="fc-green fz14">￥<i class="fz26">200</i></p>
						<p>限时优惠</p>
					</div>
					<div class="tip">
						<p class="clearfix"><span class="fl-l">sss</span><span class="fl-r fz9 fc-9">可叠加</span></p>
						<p>sssss</p>
						<p class="fc-9 fz9 ">2018-2019</p>
					</div>
				</div>
				<div class="coupon-r fz16">已过期</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"coupons",
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
			width: 33.33333%;
		}
		
		.item.active:nth-of-type(1)~ .move-line{
			left: 0px;
		}
		.item.active:nth-of-type(2)~ .move-line{
			left: 33.3333%;
		}
		.item.active:nth-of-type(3)~ .move-line{
			left: 66.6666%;
		}
	}
	.list-box{
		padding: 10px 0;
	}
</style>
