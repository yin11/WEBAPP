<template>
	<div>
		<!-- 必学课程 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<img width="100%"  src="@/assets/image/banner1.png"/>
		<div class="main-box bg-f">
			<div class="border-box">
				<h3 class="fz16 fw-6">必学入门课介绍</h3>
				<p class="fz14 p-paragraph">很多学员在学车之前，由于对车辆完全不了解，导致学车比较慢，只会生搬硬套，其实只要了解了车辆工作原理，学车就能事半功倍!为了防止出现这种状况，以下带各位新手学员先了解下学车的基本常识。</p>
			</div>
			<div class="hilite-box">
				<img src="../../assets/image/hilitecolor.png">
				<span class="fz16">基础课程</span>
				<img src="../../assets/image/hilitecolor.png">
			</div>
			<ul class="basicsList">
				<li class="border-buttom">
					<p class="clearfix">
						<span class="fl-l fz14 fc-f title">上下车</span>
						<span class="fl-r fz10">共3节课</span>
					</p>
					<p class="clearfix">
						<span class="fl-l fz13">| 座椅 | 安全带 | 内外视镜 |</span>
						<span class="fl-r fz12">10min课时</span>
					</p>
				</li>
			</ul>
			<div class="btn-solid fc-f fz14 bottom-box">预约</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mustLearn",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped" lang="scss">
	@import '../../assets/scss/index.scss';
	.main-box{
		text-align: center;
		vertical-align: middle;
		
		
		.basicsList{
			li{
				padding: 10px 0 10px 10px ;
			}
			.title{
				background: rgba(56, 142, 131, 0.5);
				padding: 0 5px;
				line-height: 18px;
				border-left: 2px solid $main-color;
				margin-bottom: 10px;
			}
		}
	}
</style>
