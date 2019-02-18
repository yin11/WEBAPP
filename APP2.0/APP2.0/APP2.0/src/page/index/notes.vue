<template>
	<div>
		<!-- 学车须知 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<img width="100%"  src="@/assets/image/banner3.png"/>
		<div class="notes-header"><div class="title-bg">报名须知</div></div>
		<div class="main-box bg-f">
			<ul class="list fz14">
				<li>
					<h5 class="fz18">年龄条件</h5>
					<p class="fc-9 p-paragraph">18周岁以上，70周岁以下，可报考C1（小型手动档）、C2（小型自动档）、D（普通三轮摩托车）、E（普通二轮摩托车）准驾车型的驾驶证。</p>
					<div class="border-box"></div>
				</li>
				<li>
					<h5 class="fz18">证件要求</h5>
					<p class="fc-9 p-paragraph">学员需要携带身份证原件，省外户口还需要告知单，需要提供近期正面免冠一寸白底照片。</p>
					<div class="border-box"></div>
				</li>
				<li>
					<h5 class="fz18">身体要求</h5>
					<p class="fc-9 p-paragraph" style="text-indent: 0;">1.视力：两眼裸视力或者矫正视力达到对数视力表4.9以上。<br/>
                            2.辨色力：无红绿色盲。<br />
                            3.听力：必须达到正常范围。<br />
                            4.四肢健全，运动功能正常。<br />
                            5.躯干、颈部无运动功能障碍。</p>
					<div class="border-box"></div>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"notes",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.notes-header{
		border-bottom: 1px dashed #388E83;
		padding: 10px 0 13px 0;
		text-align: center;
		
		.title-bg{
			border: none;
			display: inline-block;
		}
	}
	.list{
		padding: 15px 13px 15px 22px;
		text-align: center;
		li{
			background: rgba(56, 142, 131, 0.16);
			border-radius: 10px;
			margin-bottom: 15px;
			padding: 0 24px 15px;
			position: relative;
			
			h5{
				text-align: center;
				display: inline-block;
				border-bottom: 5px solid $main-color;
				position: relative;
				
				&:after{
					content: "";
					display: block;
					width: 100%;
					height: 1px;
					background: #fff;
					position: absolute;
					bottom: -4px;
				}
			}
			
			p{
				text-align: left;
				text-indent: 2em;
			}
			
			.border-box{
				width: 100%;
				height: 100%;
				border: 1px solid $main-color;
				position: absolute;
				top: -4px;
				left: -4px;
				border-radius: 10px;
				
				&:after{
					content: "";
					width: 12px;
					height: 12px;
					border: 2px solid $main-color;
					border-radius: 50%;
					position: absolute;
					right: 12px;
					top: 12px;
				}
				
			}
		}
	}
</style>
