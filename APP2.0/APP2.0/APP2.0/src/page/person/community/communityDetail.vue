<template>
	<div>
		<!-- 社区动态详情 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
			<div class="bg-f mb-10 community">
				<div class="img-box">
					<img  src="../../../assets/image/ico-bg.png" width="100%"/>
				</div>
				<p class="clearfix">
					<span class="fl-l fz16">昵称4444</span>
					<span class="fl-r fc-green fz12">科目1</span>
				</p>
				<p class="fz12 fc-9"><span>2小时</span>&nbsp;&nbsp;&nbsp;<span>杭州</span></p>
				<p class="txt-hide fz14 con-p">内容</p>
				<div class="img-list clearfix">
					<div class="fl-l">
						<img  src="../../../assets/image/ico-bg.png" width="100%"/>
					</div>
					<div class="fl-l">
						<img  src="../../../assets/image/2@3x.png"  width="100%"/>
					</div>
					<div class="fl-l">
						<img  src="../../../assets/image/achievement-success.png"  width="100%"/>
					</div>
				</div>
				<P class="clearfix fc-9 fz14"><span class="fl-r  ico-nooice active">11</span><span class="fl-r ico-comment">22</span></P>
			</div>
			<!-- list -->
			<ul class="list-box bg-f">
				<li class="border-buttom comment">
					<div class="img-box">
						<img  src="../../../assets/image/ico-bg.png" width="100%"/>
					</div>
					<p class="clearfix fz12">
						<span class="fl-l"></span><span class="fl-l"></span>
					</p>
					<p class="fc-9 fz10">7-26 13:02</p>
					<p class="fz14">内容</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"communityDetail",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/scss/community.scss';
	.list-box{
		padding: 0 15px;
		
		.comment{
			
		}
	}
	
</style>
