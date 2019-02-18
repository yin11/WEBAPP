<template>
	<div>
		<!-- 入门必学课程 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<div class="main-box ">
			<div class="bg-f mb-10 fz12 top-box" >
				<div class="flex-box progress-box">
					<span class="item">距离实车训练还有</span>
					<span class="progress item"><span class="active"></span></span>
				</div>
				<h2 class="fc-green fz36 fw-6">A</h2>
				<p>评价</p>
				<div class="flex-box">
					<div class="item">
						<p class="fz14 fc-green"><span class="fz36">22</span>小时</p>
						<p>累计练车</p>
					</div>
					<div class="item">
						<p class="fz14 fc-green"><span class="fz36">22</span>%</p>
						<p>总进度</p>
					</div>
				</div>
			</div>
			<div class="table-view bg-f">
				<div class="fz16">今日训练</div>
				<div class="border-top relative">
					<p class="fz14">课程名称</p>
					<p class="fz13 fc-green"><router-link to="/progressDetail" tag="span">课程名称 |</router-link><span>课程名称 |</span></p>
					<span class="percent fz12 fc-green">100%</span>
				</div>
				<div class="border-top relative">
					<p class="fz14">课程名称</p>
					<p class="fz13 fc-green">111</p>
					<span class="percent ico-ok"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"muststudy",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top-box{
		padding-bottom: 10px;
		text-align: center;
		
		.progress-box{
			padding:0 15px;
			line-height:40px;
			.item:first-of-type{
				flex: 1;
			}
			.item:last-of-type{
				flex: 2;
			}
			
			.progress{
				height: 10px;
				border-radius: 10px;
				background: #F2F3F4;
				margin-top: 15px;
				overflow: hidden;
				
				.active{
					background: $main-color;
					display: block;
					height: 100%;
					width: 20%;
				}
			}
		}
	}
	.table-view{
		.border-top{
			line-height: 1.5;
			padding:3px 0;
			
			p{
				margin: 5px 0;
			}
			
			.percent{
				position: absolute;
				right: 0;
				top: 24px;
				
				&.ico-ok{
					width: 20px;
					height: 20px;
					background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAATlBMVEUAAAAsl4wtl40tl40ulI4tlYwsl40slo0tloz////1+vpAoJfi8O+q1dFMpp7P5+WFwrybzchsta5ZrKXr9fTZ7OrD4d663Nl3u7VksaqbpyOiAAAACHRSTlMA8dFwKalMXGDc1wQAAAEcSURBVDjLlZTdsoMgDIRLgBa0/ta29v1f9HSHkxQEdNwbRb9JQhZySWS0JfUVWW0uNWlykUiXIeU2UjloyBVEm9RX5YpS15i6uapuUSy3I4ln1B6muD5yu6JA6SrQDSseoS/VlC/vfY+0u8He/qsPh6NaRlADV2cq1ATq3oaFqeUcQS2gQlZbpFZQTc9LWy7t04B6yJqK7XiA8nPkBGMSH+8LqNVlWHuXTWEBanQ5hn09+dsT1ORSjPCY8ecVPg1477bu258xHRvp3wJwQ3QUYxSLWNJeE9c9T56rTGTE+r4BwUbmB1Nz5/+ppU8QOZcqdhsWbaXSQz4xVQom1WGbzZxTlF3AtnoBj6/zmeFwPGrOD676GDw/VI9H9B8TUyUdRWKM6QAAAABJRU5ErkJggg==) no-repeat center;
					background-size: cover;
				}
			}
		}
	}
</style>
