<template>
	<div>
		<!-- 社区列表 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
			<ul>
				<li class="bg-f mb-10 community">
					<div class="img-box">
						<img  src="../../../assets/image/ico-bg.png" width="100%"/>
					</div>
					<p class="clearfix">
						<span class="fl-l fz16">昵称</span>
						<span class="fl-r fc-green fz12">科目四</span>
					</p>
					<p class="fz12 fc-9"><span>2小时</span>&nbsp;&nbsp;&nbsp;<span>杭州</span></p>
					<router-link to="/communityDetail" tag="div">
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
					</router-link>
					<P class="clearfix fc-9 fz14"><span class="fl-r  ico-nooice active">11</span><span class="fl-r ico-comment">22</span></P>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"community",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/scss/community.scss';
	
</style>
