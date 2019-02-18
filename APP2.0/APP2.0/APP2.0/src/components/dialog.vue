<template>
	<div>
		<!-- Dialog  -->
		<!--  -->
		<div class="mask" v-show=""></div>
		<!--  -->
		<div class="bg-f dialog-box" v-show="">
			<div class="dialog-con">
				<p class="fz18">你预约的练习时间还没结束，是否提前结束？</p>
			</div>
			<div class="flex-box dialog-bottom border-top">
				<button class="item btn-solid">取消</button>
				<button class="item">确定</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"dialog",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.dialog-box{
		border-radius:6px;
		position: fixed;
		left: 28px;
		top: 50%;
		width: 320px;
		z-index: 8;
		overflow: hidden;
	}
	.dialog-con{
		padding: 18px 34px;
		text-align: center;
	}
	.dialog-bottom{
		line-height: 40px;
	}
</style>
