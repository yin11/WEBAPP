<template>
	<div>
		<!-- 个人资料 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 保存按钮 -->
		<div class="head-btn-box">
			<button class="fc-green fz13" @click="postUser">保存</button>
		</div>
		<!-- main -->
		<div class="main-box ">
			<div class="mb-10"></div>
			<!-- list -->
			<ul class="table-view bg-f">
				<li class="border-buttom clearfix header_cover"> 
					<span class="fl-l">头像</span>
					<div class="fl-r">
						<div class="header-img" @click="showImgPoup"><img v-lazy="userInfo.image" width="100%"/></div><i class="right-arrow"></i>
					</div>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">昵称</span>
					<span class="fl-r"><input type="text" placeholder="未填写" v-model="nick"></span>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">真实姓名</span>
					<span class="fl-r"><input type="text" placeholder="未填写" v-model="trueName"></span>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">性别</span>
					<span class="fl-r" @click="showSexPoup">{{userInfo.sex == "male" ? "男":"女"}}<i class="right-arrow"></i></span>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">生日</span>
					<span class="fl-r" @click="showTimePoup">{{userInfo.birthtime}}<i class="right-arrow"></i></span>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">手机号</span>
					<span class="fl-r">{{userInfo.telphone}}</span>
				</li>
				<li class="border-buttom clearfix"> 
					<span class="fl-l">修改密码</span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</li>
			</ul>
		</div>
		<!-- 性别poup -->
		<van-popup v-model="showSex" position="bottom" :overlay="true">
			<van-picker show-toolbar title="请选择"  :columns="columns" @cancel="showSexPoup" @confirm="sexOK" />
		</van-popup>
		<!-- 时间选择poup -->
		<van-popup v-model="showTime" position="bottom" :overlay="true">
			<van-datetime-picker v-model="currentDate" :min-date="minDate" type="date" @confirm="formatter" @cancel="showTimePoup"/>
		</van-popup>
		<!-- 替换图片poup -->
		<van-popup v-model="showImg" position="bottom" :overlay="true">
			<ul class="bg-f fz14 img-select">
				<li class="border-buttom">拍照</li>
				<li class="border-buttom">从手机相册选择</li>
				<li class="border-buttom fc-9" @click="showImgPoup">取消</li>
			</ul>
		</van-popup>
</div>
</template>

<script>
	import axios from 'axios'; 
	export default {
		name:"personal",
		data() {
			return {
				userInfo:{} ,
				nick : '' ,//昵称
				trueName : '' , //真实姓名
				showSex: false , //性别poup
				columns: ['男', '女'] ,
				showTime: false , //时间poup
				currentDate: new Date() ,
				minDate : new Date(1900,1, 1) ,
				showImg: false , //替换头像poup
			};
		},
		mounted(){
			
		},
		created: function(){
			let self = this ;
			if(self.$comm.getStore('userInfo')){ 
				self.userInfo = self.$comm.getStore('userInfo') ;
			}else{
				self.getUser();
			}
		},
		methods: {
			//获取个人信息
			getUser(){
				let self = this ;
				self.$getData.getUserInfo().then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						self.userInfo = res.data;
						self.nick = res.data.nick_name;
                        self.trueName = res.data.true_name;
						self.$comm.setStore("userIno",res.data) ; //将个人信息存入缓存
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			},
			//修改个人信息
			postUser(){
				let self = this ;
				let _data = {
					"nick_name": self.nick,
					"true_name": self.trueName,
					"sex": self.sex,
					"birthtime": self.userInfo.birthtime,
				};
				axios.post('/webIp/app_users/123/',_data).then(function (res) {
					console.log(res);
				}).catch(function (error) {
					console.log(error);
				});
				self.$getData.postUserInfo(_data).then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			},
			showSexPoup(){
				this.showSex = !this.showSex ;
			},
			sexOK(value, index) {
				let self = this ;
				index == 0 ? self.userInfo.sex ="male" : self.userInfo.sex ="female" ;
				self.showSex = false ;
				console.log(`当前值：${value}, 当前索引：${index}`);
			},
			showTimePoup(){
				this.showTime = !this.showTime ;
			},
			formatter( value) {
				console.log(value.toLocaleDateString())
				this.userInfo.birthtime = value.toLocaleDateString().replace(/\//g,'-');
				this.showTime = !this.showTime ;
        　　},
			showImgPoup(){
				this.showImg = !this.showImg ;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head-btn-box{
		button{
			height: 44px;
			line-height: 44px;
			margin-right: 15px;
		}
	}
	.main-box{
		.fl-r{
			font-size: 13px;
			color: #999;
			
			input{
				text-align: right;
				height: 20px;
				padding: 10px 0;
			}
		}
		.header_cover{
			height: 70px;
			line-height: 70px;
			
			.header-img{
				width: 54px;
				height: 54px;
				border-radius: 50%;
				overflow: hidden;
				display: inline-block;
				vertical-align: middle;
				margin-right: 10px;
			}
		}
	}
	.img-select{
		padding: 0 15px;
		line-height: 50px;
		text-align: center;
		
		.fc-9{
			line-height: 40px;
		}
	}
</style>
