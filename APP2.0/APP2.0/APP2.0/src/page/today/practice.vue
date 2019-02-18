<template>
	<div>
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 内容 -->
		<div class="bg-f main-box">
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
			<!-- 标题 -->
			<div class="title-bg fz16">单选</div>
			<!-- 题目 -->
			<div class="fz14">
				<p class="subject">题目内容题目内容题目内容题目内容题目内容</p>
				<img src="@/assets/image/today2.png" width="50%"/>
				<!-- 答案 -->
				<ul class="answer-list">
					<li class="relative">
						<input type="radio" name="answer" id="answer1"/>
						<label for="answer1">
							<i class="ico-answer">A</i>
							<p class="border-buttom">题目内容题目内容题目内容题目内容题目内容</p>
						</label>
					</li>
					<li class="relative">
						<input type="radio" name="answer" id="answer1"/>
						<label for="answer1">
							<i class="ico-answer">A</i>
							<p class="border-buttom">题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容</p>
						</label>
					</li>
					<li class="relative">
						<input type="radio" name="answer" id="answer1"/>
						<label for="answer1">
							<i class="ico-answer">A</i>
							<p class="border-buttom">答案</p>
						</label>
					</li>
				</ul>
			</div>
			<!-- 解析 -->
			<div class="analysis-box fz12">
				<p>答案：A</p>
				<p>解析</p>
			</div>
		</div>
		
		<!-- 底部题目数量 -->
		<v-nextFooter></v-nextFooter>
	</div>
</template>

<script>
	export default {
		name: 'practice',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.main-box{
		padding: 28px 15px 0;
		
		.title-bg{
			display: inline-block;
			margin: 10px 0 20px ;
		}
		
		.subject{
			padding: 0 20px;
		}
		img{
			margin: 10px auto;
			display: inherit;
		}
	}
	.tab-box{
		margin: 0 auto;
		width: 260px;
		border: 1px solid $main-color;
		border-radius: 5px;
		line-height: 32px;
		
		input[type="radio"]:checked+label{
			background: $main-color;
			color: #fff;
		}
	}
	.answer-list{
		width: 85%;
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAA2kAAABdCAMAAAAIVd6yAAAAM1BMVEUAAAA4j4Q5koY4j4M5kYU+kYdIl5E5j4Q5joM4j4Q6kYY5j4M5j4Q5kIU4joQ6j4Q4joMQWPndAAAAEHRSTlMAwD/yNyIM6qTfLNd/W5px0Z4EngAABBRJREFUeNrs3NFSgzAQRuGEEIQB6r7/0yq9QNNhXLvb0Zns+a64/h0sPWJS32Yxm9Nhb67hG3BP6NS0iNEypU+1NNfwDVhqQqdGMRrTITfX8A6YE3q1icmWDltzDf+AW0KvshjkdBiba7xiwDGhU5avV6WeX/K+rvGKAZcpoVOGZLinw9xc4zUDzgm9mgn8f0cfkNTfrWkh8P8ZfUBSf79Gecr7bS1lfSPwK2wDkvp7tskTFrkj8CtsA5L6+5bFZCXwN/wDkvo7V4sxVhP4G+4BSf2928UkE/gb3gFJ/f2bxWQg8J/8A5L6A/jdM2CRBzcC/8k/IKk/gvGZbHZaCfwn94Ck/hg2UW1FHvCJ1nANSOqPIosiJ24shWNAUn8YtahJehUozAOS+uPY1RfQbwKFdUBSfySz9oMfBArjgKT+UH5K/cvEu8Rm+oCk/lhGucJb+076gKT+aNrUz1v7BpYBSf3xZHnEsTwO1wOS+pFqUU+Y2e//yMif1hTqgKT+2HaO6HkFfUBSf3QzR/T46QOS+sObFo7ocdMHJPVfGe4P1rchhTByBr+XPiCp/+K2qucsOcbvl40z+J3UAUn9F7fVUORUYnysZc7gd1IGJPVf3Fa1xHtqroUz+J30AWO/1X9xW+UoT83f7QT+/w/8Xaf+D3buKLdBGIiiKMY0hFDR2f9qK6ttRI2tKlXAecw9X1nAXCmZMGyz6i3j4/vjlQV/+wX/iVf9hawWyyydB5eJBX/zBf+Jf7QUspotM3cuDCz42y/4z/ujpZBVtEzsfHhnwd9+wX/aVf82K95RAxwg8o4a4AAz76gBDrDwjhrgAD27NmB/gf+PgH1s/y/so7snRID/u40Ph9bfH++/6wA8N7Xw9utkjdKAB1ILSzL9fArRSgoH1q9amq97cEhMSEotDunTJZjZR/o0xBTd9du4+pIoUZq7e3BITEgttfHWfQlipTm8B4fEhNRTkyzN4z04NCaknppiaS7vwaExIfXU9Epzeg8OjQmppyZXmtN7cIhMSD01tdK83oNDZELqqYmVFi0XgBVr/MaAemrqpQGZpqXVU5ulSuMeHH9o/vuilppJlbZYJvTASmi/MyunJlYaW368/oSUU9MqjX+uITAh5dS0SuNpLAhMSDE1rdJ4whgKE1JKbdQqjasZKExIIbVJrDQuQaEwIXlqiqUBAvLUKA3I7JMapQGZXVKLlAZ8tnfHJgDDMBQFy4Cy/75pTTCokDF8uNvhFQIJNeaphe2IQJI1NaVBb55a1tUMZFlSM6dBb57aqzRojFNTGjTOpKY0aJxJTWnQOJOa0qA3Ty3tagby1GNHBC6oR2lwQcV9KoRIZU6DG0ppcIPSYENpEElpsKE0iKQ02FAaRFIabCgNIv2C+gCKRppcRrBEvwAAAABJRU5ErkJggg==) no-repeat top,
					url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAA3UAAABOBAMAAAB1dSLgAAAAJ1BMVEUAAAA5koY4j4Q6j4M4j4Q4j4M5j4M8kYk4joQ8lIg4j4Q5j4Q4joM0dyL6AAAADHRSTlMAP7+B7PfWJ5sUsWagkW0GAAACCUlEQVR42u3auy50YRSH8TW+5BungoRCohAthQvQKCUahWgUSsUUGr1KNQWJqF2AQtQK5wjrojCbHcvIaNYr+y/P7xLWM17vYdu7cfcrQ+Mtu7u9o50W2uminS7a6aKdLtrpop0u2uminS7a6aKdLtrpop0u2uminS7a6aKdLtrpop0u2uminS7a6aKdLtrpop0u2uminS7a6aKdLtrpop0u2ukq3a51sLEzYYgDkWjXXnT3m11DHIhCuyl/s2KIAxFo117zN3f84X0dSPPbDXllzhAH0vx2s165NsSBNL9d1yuPhjiQ5rfreOXBEAfS/HZbXrmfR089EJ12+KDTruOIdNbMrleeJtFzprNX4Yyge0bgbK57NudOTPdOjLto3bto3oCE34B4e9V9e8VXQt88oEY7/NAOKmini3a6+i/doGLCgpE1h4pVC0YdMh4tuPQ8t4Y+/4otmu0tT8DjzwCdUovmf89zd2jot+d5buJpPQHv5YOMeaIlq7U80b7hO2eeZ9Nqx/6qSV9D/UWpQy71k0BQdnEb80TnhqDspmLP8zwZgoKb+fyjB4JCh+hT6xn2RHynEhS7vHrOf0K4tcrFPD5ZSL80vt9Nf0LYrv8vI/yky0x6KPXXQLtv2xVa4ZZzV+HK0SQ+mSmzs2jl7n4wwEjyjv6EJ4TfM517ku56nnXD773Anr8AzjUa4f9VWzsAAAAASUVORK5CYII=) no-repeat bottom;
		background-size: 100% auto;
		padding: 40px 46px;
		box-sizing: border-box;
		margin: 0 auto;
		
		li{
			padding-left: 47px;
			
			.ico-answer{
				position: absolute;
				width: 20px;
				height: 20px;
				border: 1px solid $gray-c;
				background: #d3d3d3;
				left: 0;
				text-align: center;
				border-radius: 50%;
				vertical-align: middle;
				top: 4px;
			}
			
			p{
				padding: 4px 0;
			}
			
			input[type="radio"]:checked+label{
				.ico-answer{
					background: $main-color url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAYFBMVEUAAAAtmZAtlowtl40tl40tl44tlo0umIwtlo0ul40tlo8vmI0vl44smYotloz///83nJLs9vZGpJv2+/vc7uzE4t9ZrKRjsam329iezsmOxsGBwLqn089zubPP5+Wv19PyHinwAAAADnRSTlMAEefNo0fzh7p7Zlw2IzRD/BAAAAHZSURBVEjHpZfbloMgDEWBCGqnRrxUrbXt///ltCODChTo4rxvY5ITE4lLtOJlBkygYJCVvKIkSpTnBcO9WJHzCPgHGNpi8BOKB/hJ4It7zgR+lsjOn8ATQ7/Yyf2mOYaVUweYYYwyaoEFxqmg/ojxUXOMV36oKn6j066P7CuSnb9MUo6jNFLlIgZsH03zaFc3cUVCFNjXLz3XqKCmIwq81G+poPg3OTQq5ArWF5Up0HeWLMzJ5wp2t//y8jgTyGu3klep7RBn2FmBi9zbtwq/7K1eNW0gsorwIHhvVHVa3ImTMgSOCuwPIJYk5LzBDWJGIAD2K9iMeBQQFjCrauRgDQwRW9ek3ciHjmhKkK0SyzS3plm1dWwRsa/EJF2eq2dpg0LnOWl7bZ5TEa/oENO1vejHm+AiXSToft7MlObO8JzZz9KYwGZQnuv0RDpVEm4Wsh8+mvXo24q5fHZ3e+4wK7SwvD1J7bnWt15ya566pdcv7lsRnNnDryLeXcz2HaJgucZskC2g5vdWTltED4jqUgGHyetu9oCw7RV7lBcPKLi1y7beLDK4tu39Ofav8ZCB/ene2XJo/Ts74U5IuE0S7qGEGyz17ou/NZPu2/SbOv2OT/93iP9f+QUucI72W5OzNAAAAABJRU5ErkJggg==) no-repeat center;
					background-size: cover;
					border-color: $main-color;
					text-indent: -9999px;
				}
			}
		}
	}
	.analysis-box{
		width: 86%;
		border: 1px solid $main-color;
		border-radius: 5px;
		margin: 40px auto;
		padding: 18px 5px;
		min-height: 80px;
		box-sizing: border-box;
		position: relative;
		
		&:after{
			content: "";
			display: block;
			height: 10px;
			width: 108%;
			background: $main-color;
			border-radius: 10px;
			position: absolute;
			top: -8px;
			left: -4%;
		}
		&:before{
			content: "";
			display: block;
			height: 1px;
			width: 108%;
			background: #fff;
			position: absolute;
			top: -1px;
			left: -4%;
			z-index: 2;
		}
		
	}
</style>
