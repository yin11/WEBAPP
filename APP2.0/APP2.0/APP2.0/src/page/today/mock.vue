<template>
	<div>
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 倒计时 -->
		<div class="count-down fz12"><i class="icon ico-countDowm"></i>倒计时{{time}}</div>
		<!-- 内容 -->
		<div class="main-box bg-f " v-for="(item , i) in questionList" v-if="i == (curIndex)  ">
			<!-- 标题 -->
			<div class="title-bg fz16">{{item.question_type_value}}</div>
			<!-- 题目 -->
			<div class="fz14"  >
				<p class="subject">{{item.question}}题</p>
				<img v-lazy="item.question_IMG" width="50%" v-show="item.question_IMG"/>
				<!-- 答案 -->
				<div class="answer-list">
					<ul class="answer-box" v-if="item.question_type_value == '判断'">
						<li class="relative">
							<input type="radio" name="answer" id="answer1" v-model="answer" value="A"/>
							<label for="answer1">
								<i class="ico-answer">A</i>
								<p class="border-buttom">对</p>
							</label>
						</li>
						<li class="relative">
							<input type="radio" name="answer" id="answer1" v-model="answer" value="B"/>
							<label for="answer1">
								<i class="ico-answer">B</i>
								<p class="border-buttom">错</p>
							</label>
						</li>
					</ul>
					<ul class="answer-box"  v-else>
						<li class="relative">
							<input type="radio" name="answer" id="answer1" v-model="answer" value="A"/>
							<label for="answer1">
								<i class="ico-answer">A</i>
								<p class="border-buttom">{{item.A}}</p>
							</label>
						</li>
						<li class="relative">
							<input type="radio" name="answer" id="answer2" v-model="answer" value="B"/>
							<label for="answer2">
								<i class="ico-answer">B</i>
								<p class="border-buttom">{{item.B}}</p>
							</label>
						</li>
						<li class="relative">
							<input type="radio" name="answer" id="answer3" v-model="answer" value="C"/>
							<label for="answer3">
								<i class="ico-answer">C</i>
								<p class="border-buttom">{{item.C}}</p>
							</label>
						</li>
						<li class="relative">
							<input type="radio" name="answer" id="answer4" v-model="answer" value="D"/>
							<label for="answer4">
								<i class="ico-answer">D</i>
								<p class="border-buttom">{{item.D}}</p>
							</label>
						</li>
					</ul>
				</div>
				<button class="btn-empty-big" @click="nextQuestion">下一题</button>
				<router-link to="/achievement">成绩</router-link>
			</div>
		</div>
		<!-- 底部题目数量 -->
		<v-nextFooter></v-nextFooter>
	</div>
</template>

<script>
	export default {
		name: 'mock',
		data() {
			return {
				type : 1 , //区分科目1和科目4
				page : 1 , //分页
				time: "45:00",
				questionList:[],//考试的列表内容
				curIndex: 0,//当前答题的序号
				answer: '',//当前题目选中的答案
				wrongArr: [],//错误题目的id
			};
		},
		mounted(){
			
		},
		created: function(){
			let self = this ;
			self.getList();
		},
		methods: {
			//获取模拟考试的题目信息
			getList(){
				this.getExamTest1();
			},
			//获取科目一的模拟考试信息
			getExamTest1(){
				let self = this ;
				let _data = {
					page : self.page
				} ;
				self.$getData.getExamTest1(_data).then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						self.countDown(45 * 60 - 1);
						self.questionList = res.data.all_question ;
						self.count = res.data.count;
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			},
			 //点击下一题
			nextQuestion() {
				var self = this;
				if (self.answer == "") { // 答案未选择时
					self.$comm.toast("请选择答案 ");
					
				} else { // 判断是否选择正确并保存错误题目的ID
					if (self.curRight == self.count - self.curWrong) { // 已经选择过做好一题的答案
						if (self.curState == 1) {//本题已经选过,且之前选的答案正确
							self.curRight--;
						} else if (self.curState == 0) {//本题已经选过,且之前选的答案错误
							self.curWrong--;
							self.wrongArr.pop(); //删除之前选中的答案
						}
					}
					if (self.questionList[self.curIndex].question_type_value == "判断") { //判断题时
						var _anwser = "";
						self.answer == "A" ? _anwser = "对" : _anwser = "错";
						if (self.questionList[self.curIndex].rightAnswer == _anwser) {
							self.curRight++;
							self.curState = 1;
						} else {
							self.curWrong++;
							self.curState = 0;
							self.wrongArr.push(self.questionList[self.curIndex].id);
						}
					} else {//单选题多选题时
						if (self.questionList[self.curIndex].rightAnswer == self.answer) {
							self.curRight++;
							self.curState = 1;
						} else {
							self.curWrong++;
							self.curState = 0;
							self.wrongArr.push(self.questionList[self.curIndex].id);
						}
					}
					if (self.curIndex < self.questionList.length - 1) {//不为最后一题时，
						self.curIndex++;
						self.answer = "";
					}
				}
				if (Number(self.curIndex) % 50 == 48) { //此时已经是倒数第二题
					self.page++;
					self.getList();
				}
			},
			//倒计时
			countDown(maxtime) {
				var _self = this;
				var timer = setInterval(function () {
					if (maxtime >= 0) {
						var minutes = Math.floor(maxtime / 60);
						minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
						var seconds = Math.floor(maxtime % 60);
						seconds < 10 ? seconds = "0" + seconds : seconds = seconds;
						_self.time = minutes + ":" + seconds;
						--maxtime;
					} else {
						_self.postHandOver();//时间到提交试卷
						clearInterval(timer);
					}
				}, 1000);
			},
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.count-down{
		position: fixed;
		top: 18px;
		right: 15px;
		z-index: 6;
		color: $warm-color;
		
		.ico-countDowm{
			width: 12px;
			height: 12px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAMAAAAw96PuAAAANlBMVEUAAADwZDfyaTfvYzzwZDfwZDfxZjjzZjvwZTjwZDfwZDfxZTjvZDfwZDfwZDfxZDfwZTjwZDdZ47ITAAAAEXRSTlMA3BQKwe49Ii/SpGd+c7KPWc1KkcIAAAEhSURBVDjLrZTbcoQgDIYDCRBB1Lz/yzZuF4OwU9uZ/jdq+JAcgbjIT1oiDMCM/IJgck5f3Ki3lRgAfSJx7EexE0oe4ZRXwsMor4Ra/4/YxKWJSE62RmCWECciBsnYPlaRigOAVWTtcfKjG9T/GEmkIC9dNbCIEN7ODAekPcipsDMcYfCtqL0gclYgM2JRttz92s+lBHDQAZhOcMfBsVV3vcoEr5ZxdcohRtLwWvAbI0wEbx1BcSJ8dSLu23smkbB6+OTpe6N5Okar5LHF81EtWstYOdezklkZLJYxyzokeuc0e7Csd5WLTpocW+Ws+moykb+qbx1UpVe9Osi6kG4EXV1onRxuRPjQ63LXH6ahTWXCUalN5eNkP94O9Egsz7fUFyVVIKYBIIOcAAAAAElFTkSuQmCC) no-repeat center;
			background-size: cover;
			display: inline-block;
			vertical-align: middle;
			margin-right: 2px;
		}
	}
	.main-box{
		padding: 12px 15px;
		
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
		
		.answer-list{
			width: 85%;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAA70AAABpCAMAAADBRLQ6AAAAXVBMVEUAAAAdw70orKUqqaAxmpE4j4MwnpUfwLknraQfvrgcysQrpp0juLEew8AhwLgtpJwvn5QmsKgZy8QiuLEhurMltKwew70hu7QltKwzlowymY8zlow4joM2lYoxoZj4Z5kaAAAAHHRSTlMAJ9HfjeXuSpU9GuaSC1/yXcESgG2xMVii4squ6I3FNQAABNtJREFUeNrs3MuSmzAQhWEkVUEQCEc3YGHy/o+ZYCckNcYVJoMd2vN/Xnpnc1DTtFQAAF6EVQUAgVzlTbQFAHF6PZ2nXBcApFFj+SO+DcsvII8b/HQ+T75yBQBhbGym81S2fQFAmjrP5bPuKJ8BcUKnp/O5HOleAfKo9tq94uUvII6rr92rge4VIA7dK+A+twgLe0v9qb9R/0W1Ylh0aTaoO92r89y9CgXw8uyPqNR3QrKIi3YxLvLCL/QK0/xWrpjeZ/39bkh6Lp/pXuETGHw5PdZ51fTz8++msl2NaH+dvUq8PMKrc2p+VpRpMlExe4XPzNVjKTa/fgh0r/CZhcqLje+d+Yx6vHSvKJ/x+qzg8rmJ9v7sFTsHZbCK++wH9JLL5yqszl6xc/B/ce99eMt67K3CRta9XayGVyufXfVz9krhqeouDb3bnt2QjBlT9AZbNMa3qVJvq5dkxOZ3fbxZxXn5nRqDJ9L+h1gXG6nUahNtSFljG59NaVK4KTblls+r81Vu0NNUajyTH9usdVu7bdkdvW7nldpROW91nSi86em4WnD5vNqhUkPXKzyTtUGl7MchbDhRcDQ69cy1brDa03mh8rmkQ3UUoRp9/mssbduY2DNU836uujOR1Asun/3Abfwg+uh1Tqq4y9lOm5E/7B/ZZFYnklyVpeZ37j5zKz8GlbLWd9PpVMzec5TCZtsnkmynhcaXwzWOI9SX5deur8zZ+5Y77YeE4TKR5G9+RhWlLr/s7j2OMIx+rXp2VTY6MV71Mcsr0aa1N+uy4PKZ+cij6KP38c3a4ELXGNbdPbtXergZvhJcPtN9Pgqbss7pj76ys8nTrNrLsp9uvKlwJG/91Vwfx2C7S/PKFhdhXowzrYk9XXb4TjqFtS9Eonw+jFDHrH91l7NuNNndmb23ny4Mo5aKq+QgbNX+ajCfylPmb9ld3zbr++mCEqpX9EWOQqV8fXc0jCfDiSf7c1XmLHM8SOiy9nVRuHhqeKLZ3zJ7NXJvxO5C1eZ6nmwmvQ+xzF6ZRLsWe6tHXZHe/XAaFJ5n8KevpPfBek6DwiN0+hvpfbDlLHMdq7pCVdU8RpBeQVQ0c35LzJpUgPQKUukJv8QCpFeSOn7BVcvFRnqBT430AlKRXkAq0gtIRXoBqUgvIBXpBaQivYBUpBeQivQCUpFeQCrSC0hFegGpSC8gFekFpCK9gFSkF5CK9AJSkV5AKtILfG/vDnYThIIAitKIIG1oDGmtoPz/b1akizZqu7KZwXN27FjMDY+3mazUC1mpF7JSL2QVuN52ZvUtf3jY0YtYb/tUl+Vh6L8Mh7Ks7WznP1yO3nYXd+lSvHqbchhPjt9Mz0MZ5QVZqt310es3TdBvR7R6u7eX8XjVOK7hjlY3R68KujUtWr3Pt+utDiXcz/6XemN+fKPVWxT1pp9OL5fHlygvyFI10+hdzl6/r4P++sartyi63fZ8c7A+m+4OQl8dsBzXRi/wqvCI9c7ak67LcG/PwqQZvbj1AuqFZVIvZKVeyEq9kJV6ISv1QlbqhazUC1mpF7JSL2SlXshKvRBS26gXclIvpNWpFxZLvZCVeiEr9UJW6oWs1AtZqReyUi9kpV7ISr2QlXohK/VCVuqFrOZ6O/VCOnO9zXtVfURfmAb88Lo61fsJbItev2zylMkAAAAASUVORK5CYII=) no-repeat top,
						url(data:image/gif;base64,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) no-repeat bottom;
			background-size: 100% auto;
			padding: 40px 0;
			box-sizing: border-box;
			margin: 14px auto 0;
			
			.answer-box{
				padding: 0 46px;
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAEdCAMAAADpf70bAAAAUVBMVEUAAAAtpJ85jIEayr8tpJsuopkrqJ8nsao2k4g3kYcqraQxm5Ezl401mY4znZMymI8voJYvo5kuopgxnZQ1lYotqJ8tpZwspp0ynJM3lIk4joMhAPUxAAAAGXRSTlMALUcNWYpKHfGgPrqW8uzVzH1l/eS8n3Nx2Wp9rAAAAIZJREFUSMft1ksOwyAMBNCk/FLS/Pqfuf9Bi4EKsegJam94ErJnO0M/5vu6hy1ywBIFYSIxi64gOYWkiwg+6Zxlm9pv2+iuDAe4xJqGdw0ecVKpVCqVSqVS/aXszRf4FXsQmI2EE3mQvJskJ0L83UCrjqwxKYq2XHRnEK8Su69PU6vvOHTzAaOrJoCxm45GAAAAAElFTkSuQmCC) no-repeat top left,
							url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAEdCAMAAADpf70bAAAAUVBMVEUAAAAtpJ85jIEayr8tpJsuopkrqJ8nsao2k4g3kYcqraQxm5Ezl401mY4znZMymI8voJYvo5kuopgxnZQ1lYotqJ8tpZwspp0ynJM3lIk4joMhAPUxAAAAGXRSTlMALUcNWYpKHfGgPrqW8uzVzH1l/eS8n3Nx2Wp9rAAAAIZJREFUSMft1ksOwyAMBNCk/FLS/Pqfuf9Bi4EKsegJam94ErJnO0M/5vu6hy1ywBIFYSIxi64gOYWkiwg+6Zxlm9pv2+iuDAe4xJqGdw0ecVKpVCqVSqVS/aXszRf4FXsQmI2EE3mQvJskJ0L83UCrjqwxKYq2XHRnEK8Su69PU6vvOHTzAaOrJoCxm45GAAAAAElFTkSuQmCC) no-repeat top right;
				background-size: auto 90%; 
			}
			
			li{
				padding-left: 47px;
				
				.ico-answer{
					position: absolute;
					width: 18px;
					height: 18px;
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
		
		.btn-empty-big{
			width: 80%;
			margin: 20px auto;
		}
	}
	
</style>
