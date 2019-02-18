<template>
	<div>
		<!-- 考试必约 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<div class="main-box">
			<ul class="fz20 fc-f">
				<li>
					<img src="@/assets/image/subscribe1.png" width="100%" />
					<h3>结业鉴定预约</h3>
				</li>
				<li>
					<img src="@/assets/image/subscribe2.png" width="100%" />
					<h3>科目一考试预约</h3>
				</li>
				<li>
					<img src="@/assets/image/subscribe3.png" width="100%" />
					<h3>马路站岗培训预约</h3>
				</li>
				<li>
					<img src="@/assets/image/subscribe4.png" width="100%" />
					<h3>科目四考试预约</h3>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"subscribe",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.main-box{
		padding: 20px 12px;
		li{
			position: relative;
			margin-bottom: 10px;
			
			h3{
				position: absolute;
				left: 130px;
				top: 37px;
			}
		}
		
	}
</style>
