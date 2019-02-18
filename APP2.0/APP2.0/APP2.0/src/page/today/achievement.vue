<template>
	<div>
		<!-- 考试成绩 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<div class="main-box fz12 fc-f relative">
			<div>
				<img src="@/assets/image/achievement-success.png" class="bg"/>
				<img src="@/assets/image/ico-bg.png" class="head"/>
				<h2><span class="fw-6 fz36">100</span>分</h2>
				<h2 class="fz36">驾考标兵</h2>
				<p>同样是腰间盘，为何你如此突出</p>
			</div>
			<div class="flex-box btn-box">
				<button class="item btn-empty-big">晒成绩</button>
				<button class="item btn-solid-big">重考</button>
			</div>
		</div>
		<!--  -->
	</div>
</template>

<script>
	export default {
		name:'achievement',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.main-box{
		padding: 40px 35px 40px 40px;
		height: 388px;
		text-align: center;
		
		.bg{
			width: 305px;
			position: absolute;
			z-index: -1;
			left: 40px;
			top: 40px;
		}
		
		.head{
			width: 66px;
			height: 66px;
			border-radius: 50%;
			border: 1px solid #fff;
			margin-top: 20px;
		}
		
		h2:first-of-type{
			margin-bottom: 160px;
		}
	}
	.btn-box{
		position: fixed;
		width: 88%;
		bottom: 20px;
		left: 6%;
		
		button{
			width: 144px;
			margin: 0 10px;
		}
	}
</style>
