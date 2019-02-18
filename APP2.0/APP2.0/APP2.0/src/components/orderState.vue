<template>
	<div>
		<!-- 订单下单成功或者失败 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 报名订单成功 -->
		<div class="main-box bg-f">
			<h3 class="fw-6 fz18">报名成功</h3>
			<img src="@/assets/image/paySuccess.png" width="90"/>
			<p class="fc-9 fz14">我们将尽快安排相关人员与你联系，请耐心等待</p>
			<button class="btn-solid-big fc-f">我知道啦</button>
		</div>
		<!-- 预约时间成功 -->
		<div class="main-box bg-f">
			<h3 class="fw-6 fz18">预约成功</h3>
			<img src="@/assets/image/paySuccess.png" width="90"/>
			<button class="btn-solid-big fc-f">返回首页</button>
			<button class="btn-empty-big fc-green">前往查看</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"orderState",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.main-box{
		padding: 80px 30px;
		text-align: center;
		h3{
			margin-bottom: 15px;
		}
		p{
			margin: 10px 0 60px;
		}
		
		button{
			width: 100%;
			margin-bottom: 10px;
		}
	}
</style>
