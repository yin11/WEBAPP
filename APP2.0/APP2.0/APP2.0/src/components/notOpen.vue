<template>
	<div>
		<!-- 未开放 -->
		<!--  -->
		<v-header></v-header>
		<div class="bg-f box">
			<img src="../assets/image/notOpen.png" width="50%"/>
		</div>
	</div>
</template>

<script>
	export default {
		name : "notOpen" ,
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100%;
		position: fixed;
		padding-top: 160px;
		box-sizing: border-box;
		left: 0;
		top: 0;
		text-align: center;
	}
	html,body{
		height: 100%;
		background: #1BC2AC;
	}
</style>
