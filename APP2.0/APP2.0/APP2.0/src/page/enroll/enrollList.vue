<template>
	<div>
		<!-- 轮播图 -->
		<swiper :options="swiperOption" ref="mySwiper">
			 <!-- slides -->
				<swiper-slide v-for="item in enrollBannerList">
					<router-link :to="{path:'/activeCoupons',query:{id:item.active.id,code:item.active.code}}" tag="div" >
						<img :src="item.image" width="100%"/>
					</router-link>
				</swiper-slide>
			 <!-- Optional controls -->
			 <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<!--  -->
		<div class="border-buttom clearfix fz18 select-box bg-f">
			<span class="fl-l">学生套餐</span>
			<div class="fl-r btn-sel dwon" @click="showSelect">C1</div>
			<!-- 选择内容 -->
			<div class="mask" v-show="showSel"></div>
			<ul class="select-con bg-f" v-show="showSel">
				<li class="border-buttom" @click="selectType('C1')">C1</li>
				<li class="border-buttom" @click="selectType('C2')">C2</li>
			</ul>
		</div>
		<!-- list -->
		<ul class="table-list bg-f">
			<router-link :to="{path:'/enrollDetails',query:{id:item.id}}" tag="li" class="item border-buttom" v-for="item in enrollLists">
				<div class="img-box"><img  v-lazy="item.app_image"  width="100%"/></div>
				<p class="fz16 p-hide fw-6">{{item.name}}</p>
				<p class="fz12 txt-hide">{{item.detail1}}</p>
				<p class="txt-r fz11"><del>原价：￥{{item.cost_old}}</del></p>
				<p class="fc-green fz18 txt-r fw-6">￥{{item.cost_new}}</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper' ;
	
	export default {
		name: 'enrollList',
		data() {
			return {
				showSel : false,
				enrollBannerList : [],
				enrollLists : [],
				page : 1 ,
				type : 'C1' ,
				swiperOption: {
				   notNextTick: true,
				   autoplay: 3000,
				   //effect:"coverflow",
				   //grabCursor : true,
				   //setWrapperSize :true,
				   pagination : '.swiper-pagination',
				   paginationClickable :true,
				   //prevButton:'.swiper-button-prev',
				   //nextButton:'.swiper-button-next',
				   mousewheelControl : true,
				   observeParents:true,
				},
			}
		},
		components : {
			swiper,
			swiperSlide
		},
		mounted(){
			
		},
		created: function(){
			this.getAppBanner();
			this.getList();
		},
		methods: {
				//获取报名活动的轮播图
				getAppBanner(){
						let self = this ;
						let sendData = "";
						self.$getData.getAppBanner(sendData).then((res)=>{
							if(res.data.code == 1){//请求成功
									self.enrollBannerList = res.data.results;
							}else{
								self.$comm.toast(decodeURIComponent(res.data.msg));
							}
						}).catch(function (error) {
							self.$comm.alertMsg(error);
						});
				},
				//获取我要报名的活动列表信息
				getList(){
					let self = this ;
					let sendData = {course_type: self.type , page:self.page};
					self.$getData.getAppCourse(sendData).then((res)=>{
						if(res.data.code == 1){//请求成功
								if (self.page == 1) {
										self.enrollLists = [];
								}
								self.enrollLists = self.enrollLists.concat(res.data.results);
						}else{
							self.$comm.toast(decodeURIComponent(res.data.msg));
						}
					}).catch(function (error) {
						self.$comm.alertMsg(error);
					});
				},
				//显示选择类型
				showSelect(){
					this.showSel = true ;
				},
				selectType(type){
					this.page = 1 ;
					this.type = type ;
					this.showSel = false ;
					this.getList();
				}
				
		}
	}
</script>


<style lang="scss" scoped>
	.select-box{
		padding: 0 25px 0 15px;
		line-height: 52px;
		position: relative;
		
		.select-con{
			z-index: 8;
			position: absolute;
			line-height: 30px;
			right: 10px;
			top: 45px;
			padding: 0 10px;
			width: 50px;
			border-radius: 5px;
			text-align: center;
			
			&:before{
				content: "";
				display: block;
				border: 4px solid transparent;
				border-bottom-color: #fff;
				position: absolute;
				top: -8px;
				right: 20px;
			}
		}
	}
	.btn-sel{
		position: relative;
		
		&:after{
			content: "";
			display: block;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-left-color: #666;
			position: absolute;
			right: -15px;
			top: 50%;
			margin-top: -5px;
		}
	}
	.btn-sel:hover:after{
		transform:rotate(90deg);
		transition:transform 1s ease-in ;
		transform-origin:left center;
	}
	.table-list{
		.p-hide{
			color: #333333;
		}
		.txt-hide{
			height: 36px;
		}
		.txt-hide , .fz11{
			color: $gray-9;
		}
	}
</style>
