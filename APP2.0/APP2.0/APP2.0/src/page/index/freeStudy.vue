<template>
	<div>
		<!-- 免费试学 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<img width="100%"  src="@/assets/image/banner2.png"/>
		<div class="main-box">
			<div class="freeStudy-title fz14"><p>免费试学 | 先培后付</p></div>
			<input type="text" placeholder="请输入您的姓名"  v-model.trim="userName" class="input-box" @blur="testUserName" />
			<input type="number" pattern="[0-9]" maxlength="11" placeholder="请输入手机号" v-model.trim="userPhone" class="input-box" @blur="testUserPhone" />
			<div class="relative code-box">
				<input type="number" pattern="[0-9]" maxlength="6" placeholder="请输入验证码"  v-model.trim="userCode" class="input-box" @blur="testCode" />
				<button type="button"  class="btn-code fc-f" @click="sendMess" v-show="!computedTime">获取验证码</button>
				<button type="button"  class="btn-code fc-f tbn-disabled" v-show="computedTime">倒计时（{{computedTime}}）</button>
			</div>
			<button type="button" class="fc-f btn-solid-big fz14 " :class=" next != '111'?'tbn-disabled':'' " >立即申请</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"freeStudy",
		data() {
			return {
				userName : "" ,
				userPhone : "" ,
				userCode : "" ,
				next : "000",
				computedTime : 0 ,
			};
		},
		mounted(){
			
		},
		created: function(){
			console.log(this.$comm)
		},
		methods: {
			//验证姓名
			testUserName(){
				let self  = this ;
				if(self.$comm.rule.empty(self.userName,'姓名不能为空') &&self.$comm.rule.name(self.userName) ){
					self.next = self.$comm.replaceNext(self.next , '1' , 0);
				}else{
					self.next = self.$comm.replaceNext(self.next , '0' , 0);
				} 
			},
			//验证手机号
			testUserPhone(){
				let self  = this ;
				if(self.$comm.rule.empty(self.userPhone,'手机号不能为空') &&self.$comm.rule.phone(self.userPhone) ){
					self.next = self.$comm.replaceNext(self.next , '1' , 1);
				}else{
					self.next = self.$comm.replaceNext(self.next , '0' , 1);
				} 
			},
			//验证验证码
			testCode(){
				let self  = this ;
				if(self.$comm.rule.empty(self.userCode,'验证码不能为空') ){
					self.next = self.$comm.replaceNext(self.next , '1' , 2);
				}else{
					self.next = self.$comm.replaceNext(self.next , '0' , 2);
				} 
			},
			/*获取验证码*/
			sendMess(){
				let self = this ;
				if(self.$comm.rule.empty(self.userPhone,'手机号不能为空') &&self.$comm.rule.phone(self.userPhone)){
					self.computedTime = 60;
					self.timer = setInterval(() => {
						self.computedTime --;
						if (self.computedTime == 0) {
							clearInterval(self.timer)
						}
					}, 1000);
					//请求获取验证码
					let sendData = { "telphone": self.userPhone };
					self.$getData.postFreeMess(sendData).then((res)=>{
 						console.log(res)
 					}).catch(function (error) {
					    comm.alertMsg(error);
					});
				}
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
	@import '../../assets/scss/reg.scss';
	.main-box{
		padding: 0 32px;
		
		.btn-solid-big{
			width: 100%;
		}
	}
	.freeStudy-title{
		transform: skewX(-20deg); 
		background: rgba(56, 142, 131, 0.5);
		margin: 20px auto;
		border-bottom: 1px solid $main-color;
		width: 146px;
		text-align: center;
		
		p{
			transform: skewX(20deg); 
		}
	}
</style>
