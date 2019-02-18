<template>
	<div>
		<!-- 导航栏 -->
		<header class="border-buttom head-box">
			<h1 class="fz18">今日学习</h1>
		</header>
		<div></div>
		<!-- 内容区 -->
		<ul class="box fc-f">
			<router-link tag="li" :to="{path:'/testExplain',query:{type:1}}">
				<img src="@/assets/image/today1.png" width="100%" />
				<p class="clearfix">
					<span class="fl-l">科目一</span>
					<span class="fl-r">99分</span>
				</p>
			</router-link>
			<router-link tag="li" to="/muststudy">
				<img src="@/assets/image/today2.png" width="100%" />
				<p class="clearfix">
					<span class="fl-l">必学入门课（基础操作）</span>
					<span class="fl-r">50%</span>
				</p>
			</router-link>
			<li>
				<img src="@/assets/image/today3.png" width="100%" />
				<p class="clearfix">
					<span class="fl-l">全真模拟(科目二/科目三）</span>
					<span class="fl-r">敬请期待</span>
				</p>
			</li>
			<router-link tag="li" :to="{path:'/testExplain',query:{type:4}}" >
				<img src="@/assets/image/today4.png" width="100%" />
				<p class="clearfix">
					<span class="fl-l">科目四</span>
					<span class="fl-r">99分</span>
				</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'today',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		padding: 20px 15px;
		
		li{
			position: relative;
			margin-bottom: 12px;
			
			 p{
				 position: absolute;
				 width: 100%;
				 bottom: 10px;
				 padding: 0 10px;
				 box-sizing: border-box;
			 }
		}
		
	}
</style>
