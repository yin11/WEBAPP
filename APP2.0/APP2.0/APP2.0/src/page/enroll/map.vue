<template>
	<div>
		<!-- 练车点的地图：具有定位，打开手机地图导航功能 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div class="map-box">
			地图
		</div>
	</div>
</template>

<script>
	export default {
		name:"carMap",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.map-box{
		width: 100%;
		height: 100%;
		padding-top: 44px;
		box-sizing: border-box;
		top: 0;
		left: 0;
		background: #ccc;
		position: absolute;
	}
</style>
