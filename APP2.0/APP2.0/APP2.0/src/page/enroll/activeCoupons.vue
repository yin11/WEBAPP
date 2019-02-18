<template>
	<div>
		<!-- 活动详情领券 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div class="main-box bg-f">
			<!-- 轮播图 -->
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="item in enrollBannerList"><img :src="item.image" width="100%"/></swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
			<div class="border-buttom rule">
				<img :src="detail_imge" width="100%" />
			</div>
			<ul class="list-box ">
				<li class="coupon-box fz12" v-for="item in couponsList" :class=" item.status == 'outdate' ? 'used' : '' ">
					<div class="coupon-l">
						<div class="num">
							<p class="fc-green fz14">￥<i class="fz26">{{item.coupon_mount}}</i></p>
							<p>限时优惠</p>
						</div>
						<div class="tip">
							<p class="clearfix"><span class="fl-l">{{item.course.name}}</span><span class="fl-r fz9 fc-9">{{item.isover == 'true' ? '可叠加' : ''}}</span></p>
							<p>{{item.belong_course}}</p>
							<p class="fc-9 fz9 ">{{item.start_time}}-{{item.end_time}}</p>
						</div>
					</div>
					<div class="coupon-r fz16">立即使用</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:"activeCoupons",
		data() {
			return {
				id: "",//活动id
                enrollBannerList: [],//轮播图列表
                detail_imge: "",//当前活动信息
                couponsList: [],//优惠券列表信息
                code: "",
                pageNum: 1,//分页
                showLoad: false, //是否显示滚动加载状态
                scrollState: true,
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					pagination : '.swiper-pagination',
					paginationClickable :true,
					mousewheelControl : true,
					observeParents:true,
				},
			};
		},
		components : {
			swiper,
			swiperSlide
		},
		mounted(){
			
		},
		created: function(){
			this.id = this.$comm.getUrlKey('id');
			this.code = this.$comm.getUrlKey('code');
			console.log(this.$comm.getUrlKey('id'))
			this.getAppBanner();
			this.getAppActive();
			this.getCouponsList();
		},
		methods: {
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
			getAppActive(){
				let self = this ;
				self.$getData.getAppActive(self.id).then((res)=>{
					if(res.data.code == 1){//请求成功
						self.detail_imge = res.data.detail_imge;
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			},
			getCouponsList(){
				let self = this ;
				let sendData = {
					page : self.pageNum ,
					code : self.code ,
				};
				self.$getData.getActiveCouponsList1(sendData).then((res)=>{ //游客身份进入
					if(res.data.code == 1){//请求成功
						if (self.pageNum == 1) {
							self.couponsList = [];
						}
						self.couponsList = self.couponsList.concat(res.data.results)
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rule{
		padding: 5px 10px;
	}
</style>
