<template>
	<div>
		<!-- 点赞与评论列表 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- tab -->
		<div class="flex-box fz12 tab-box">
			<div class="item  relative">
				<input type="radio" name="type" id="Answer" checked/>
				<label for="Answer">答题模式</label>
			</div>
			<div class="item  relative">
				<input type="radio" name="type" id="Analysis" />
				<label for="Analysis">解析模式</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'newsComments',
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
