<template>
	<div>
		<!-- 签到 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<div class="main-box bg-f">
			<p>我的K币：1200</p>
			<div class="fc-f signIn-box">
				<div>
					<h3 class="fz24">签到</h3>
					<p class="fz10">已连续签到3天</p>
				</div>
			</div>
			<p class="fz16" style="text-align:center;">今日签到可领取8K币</p>
			<p class="fz12" style="text-align:center;">连续签到更多惊喜</p>
		</div>
		<ul class="border-buttom border-top flex-box bg-f fz14 time-box">
			<li class="item">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
			<li class="item">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
			<li class="item yesterday">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
			<li class="item today">
				<div class="fc-green">+9</div>
				<p>今天</p>
			</li>
			<li class="item">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
			<li class="item">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
			<li class="item">
				<div class="fc-green">+9</div>
				<p>07.12</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"signIn",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.main-box{
		padding: 10px 15px;
		
		.signIn-box{
			width: 120px;
			height: 120px;
			border-radius: 50%;
			text-align: center;
			margin: 40px auto 24px;
			background: #388E83;
			position: relative;
			display:flex;
			align-items:center;/*垂直居中*/
			justify-content: center;/*水平居中*/
			
			&:after{
				content: "";
				display: block;
				width: 15px;
				height: 15px;
				background: #32B1A1;
				border-radius: 50%;
				left: 0;
				top: -9px;
				position: absolute;
			}
			&:before{
				content: "";
				display: block;
				width: 9px;
				height: 9px;
				background: #1BC2AC;
				border-radius: 50%;
				right:0;
				top: 16px;
				position: absolute;
			}
			
			div{
				&:after{
					content: "";
					display: block;
					width: 18px;
					height: 18px;
					background: #8DD5CB;
					border-radius: 50%;
					right: 0;
					bottom: -9px;
					position: absolute;
				}
				&:before{
					content: "";
					display: block;
					width: 11px;
					height: 11px;
					background: #BDF0E9;
					border-radius: 50%;
					left:-4;
					bottom: -7px;
					position: absolute;
				}
			}
		}
	}
	.time-box{
		padding: 20px 0 13px;
		div{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: 1px solid $main-color;
			margin: 0 auto 7px;
			display:flex;
			align-items:center;/*垂直居中*/
			justify-content: center;/*水平居中*/
		}
		.today{
			div{
				background: $main-color;
				color: #fff;
			}
			p{
				color: $main-color;
			}
		}
		.yesterday{
			div{
				background:rgba(56, 142, 131, 0.61);
				color: $main-color;
			}
		}
	}
</style>
