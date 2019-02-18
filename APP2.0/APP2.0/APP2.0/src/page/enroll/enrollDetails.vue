<template>
	<div class="bg-f">
		<!-- 报名活动详情 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 分享按钮 -->
		<div class="head-btn-box">
			<button class="ico-share"></button>
		</div>
		
		<!-- 轮播图 -->
		<van-swipe :autoplay="4000">
			<van-swipe-item v-for="(enrollBannerItem,index) in detailInfo.images" :key="index">
				<img v-lazy="enrollBannerItem.image" width="100%"/>
			</van-swipe-item>
		</van-swipe>
		<!-- <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(enrollBannerItem,index) in detailInfo.images">
				<img v-lazy="enrollBannerItem.image" width="100%"/>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper> -->
		<!-- 内容 -->
		<div class="main-box">
			<!--  -->
			<div class="title-box bg-f">
				<hgroup class="fw-6 fz18">{{detailInfo.name}}</hgroup>
				<div class="fz12 con-box">
					<span class="item ico-star" v-for="txt in detailInfo.advantage">{{txt.detail}}</span>
					<span class="fc-green fz18">￥{{detailInfo.cost_new}}</span>
				</div>
			</div>
			<!--  -->
			<div class="fz18 fw-6 title">练车场地</div>
			<div class="table-list">
				<router-link class="item border-top" tag="div" to="/carMap">
					<div class="img-box"><img v-lazy="addresInfo.image" width="100%"/></div>
					<p class="fz16 fw-6 ico-room">{{addresInfo.title}}</p>
					<p class="fz12 txt-hide">{{addresInfo.place_detail}}</p>
					<p class="fz11 fc-9 ico-address">距离我{{distance || 0}}km</p>
					<i class="icon right-arrow"></i>
				</router-link>
			</div>
			<!--  -->
			<div class="fz18 fw-6 title">费用明细</div>
			<div class="fz12 detail-table border-left border-right">
				<ul class="border-buttom border-top">
					<li class="border-buttom" v-for="item in detailInfo.cost" v-if="item.name != '合计'">
						<div class="name border-right">{{item.name}}</div>
						<div class="price">￥{{item.money}}</div>
					</li>
					<li>
						<div class="name border-right">合计</div>
						<div class="price">￥{{totalPrice}}</div>
					</li>
				</ul>
				<div class="fc-green border-top border-left">免费赠送智能真<br/>车模拟培训</div>
			</div>
		</div>
		<!-- 底部按钮部分 -->
		<div style="height: 40px;"></div>
		<div class="flex-box bottom-box bg-f"> 
			<div class="ico-service"></div>
			<div class="ico-phone"></div>
			<router-link to="/confirmOrder" class=" fc-f btn-solid" tag="div">立即报名</router-link>
		</div>
		<!-- v-dialog -->
		<v-dialog></v-dialog>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:"enrollDetails",
		data() {
			return {
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
				enrollBnnerList: [], //banner
                detailInfo: "", //报名详情信息
                totalPrice: 0, //合计
                addresInfo: {},
                lat: "", //纬度
                long: "",//精度
                distance: "",
                field: "",//场地id
				id : "" ,//当前活动id
                showPhone: false, //打电话提示框
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
			this.getCourseDetail() ;
		},
		methods: {
			//获取我要报名的活动列表信息
			getCourseDetail(){
				let self = this ;
				self.$getData.getActiveDetail(self.id).then((res)=>{
					if(res.data.code == 1){//请求成功
						self.detailInfo = res.data;
						if (self.field) {
							self.addresInfo = res.data.prctice[self.field];
						} else {
							self.addresInfo = res.data.prctice[0]; self.field = 0;
						}
						res.data.cost.forEach((i) => {
							if (i.name != "合计"){
								self.totalPrice = self.totalPrice + Number(i.money);
							}
						})
					}else{
						self.$comm.toast(decodeURIComponent(res.data.msg));
					}
				}).catch(function (error) {
					self.$comm.alertMsg(error);
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.main-box{
		padding: 0 15px 30px;
		z-index: 2;
		position: relative;
		top: -20px;
		.title{
			margin: 20px 0 10px;
		}
	}
	.table-list .item{
		padding-right: 20px;
		position: relative;
		
		.right-arrow{
			position: absolute;
			right: 0;
			top: 50%;
			margin-top: -8px;
		}
		
		.ico-room{
			padding: 17px 0 12px 22px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAAslosslowqlYwslIsslossloshjYUolIoplIkslowrlIorlYsslYsslowslowrlYsrlYstlozjBqwgAAAAEnRSTlMAtmZVPdnEDRou9oiazeZ9R6Kxf8BtAAAAz0lEQVQ4y72S0Q6DIAxFS4GVqqD0/z92nTozZEpc4s7LhXAglAJKsBUOdthOagwVTugkmj1J+vIg8VBhJe7mj1py4v8u0cyHhFoSArBGXiXqZkzYpF5EBl3U8JskM55OJAgvOIk9kVaM4FtiRHS6WcMeSBUHJ2nrefkQ0yJRznmgQqrvFHTY3SVhjHEEYA2z3mlU6EJ1V6QxpdTrosajklptaVXnvY8/PEFg5gBArBxIJRckmpRbHrMtuTw2pe+Qc7DCLsBkmkyA0gSBsQk/AbKKGAlx6fJVAAAAAElFTkSuQmCC) no-repeat left center;
			background-size: auto 20px;
		}
		.ico-address{
			padding-left: 16px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAM1BMVEUAAAAslowslowslowslostlo0tl4wtlowsmIwvmYwtl40tlowrlYkkkpIsl40ulYwtlozwabhwAAAAEHRSTlMAyfGyYOi8ekslnN9BDoRqyFVerQAAAGdJREFUCNdFzlsWwyAIRdEDwbzTMv/RFpCu7A90yVUkmKiKkZ7Vy/oAi7cF9lxVs+7V2OBbreEuzPQgTk7CJzZcb+finHesEreHMbLeIN6EHjTHhP93SIeXg7J5vdikZ82gaoaaGekHgT8G6ivKjjUAAAAASUVORK5CYII=) no-repeat left center;
			background-size: 6px 9px;
		}
	}
	.title-box{
		padding: 12px;
		border-radius: 10px;
		box-shadow: 0 0 10px #C8F1ED;
		z-index: 3;
		.ico-star{
			padding-left: 16px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAQlBMVEUAAADsYzTxZDbvZDfvZDfwZTfwZTfvZTjvZDf////xelT+9/b+8u35zr/0l3jzjWvwcEb85+D739b61sr3vKj2rJQhD8/yAAAACHRSTlMAG2zy5LaaTh34DEMAAACtSURBVCjPfVJHEsQgDKPHhlDS/v/VDc0wm0l0YSyBJQysgQutAJQWnM3gBghmkhYJE+TSeQF/EG0/PFDOcOoTAnXLPsN330eC+wAVETFSwSfnA/GY/DUUpHjhjSumWmum8uIdEpzPjGJFt+sQVlsoJocy87K0IoV4UN0cfBV8KzXF3aqw9bh0wZwnZ6MLtpFYdGdKp8PqYWiIwdui+0BDfBn710M9n/bzM7x+nx/Y3g9DKRrGEwAAAABJRU5ErkJggg==) no-repeat left top 4px;
			background-size: 10px;
			margin-right: 16px;
			display: inline-block;
		}
		
		.con-box{
			padding-right: 50px;
			position: relative;
			
			.fc-green{
				position: absolute;
				right: 0;
				top: 50%;
				margin-top: -14px;
			}
		}
	}
	.detail-table{
		display: flex;
		ul{
			width: 210px;
			li{
				width: 100%;
				display: flex;
				line-height: 30px;
				.name{
					width: 127px;
					padding-left: 10px;
				}
				.price{
					width: 72px;
					justify-content: space-between;
					text-align: center;
				}
			}
		}
		&>div{
			width: 126px;
			display: flex;
			border-bottom: 1px solid #EEEEEE;
			justify-content: center;
			align-items: center;
		}
	}
	.bottom-box{
		div{
			width: 98px;
		}
		.btn-solid{
			width: 190px;
		}
	}
	.ico-service{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAMAAAAEcluKAAAAM1BMVEUAAAAsl40tmIwslo4tl4stlowsl4wtlowtlostlYwtlowrlowtlowslowslowsl4wtloxZ2XAPAAAAEHRSTlMAalZDJeh9p4w5zhjYuy+Y/r4FaAAAAPZJREFUOMvVk9u2hCAIhhVFC0+9/9NucNVeJebM7fwXlfEBAmpGJQfgklmqNjy6sNVXyMfjpujnFPQwMVgbYg8KMyqwIf9bIPMyaMrK79HNjpSTJHoTbsCyuOoEWf2JRimOvlyZ15jnyu/r/Qqmw+3PquClleHpNR1jumXxLff2a6rIMGhL5766dA3uNKBYMr8JcY4hElsKn53+NNsck7aRbBz4e40F7opg8PvYF5XKENoaK33g3OXNuTjHogW2EC/gw0yvG2Hx6JodXhG6y82y6vROomVopb0IVd8BXysEknyU3ql2XAqrbPmEmjcruUJUtudN+wNoqBN1JlCkRwAAAABJRU5ErkJggg==) no-repeat center;
		background-size: 16px;
	}
	.ico-phone{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAkCAMAAADbwBjtAAAANlBMVEUAAAAsl4wslowtl40sl4wtlowslo0slowtl40ql4wtlowtl40tl40tlowslowtmI0sl4wtlowZ0KsWAAAAEXRSTlMAjeFIb/GuwJwWLyE8z3thVvPSQ+oAAAEZSURBVDjLhVPblsMgCAwoMZrb+v8/uxQV00Wz8yKnnTIMQ5cC571b3uAxM/CFtOaK9MZAAO4UZirMuPjd+d3HFP41tG4wZBysUl1pZXW23m9o6urtQUvTBb40LdzDK409sVfqQjlNTB9SBGacQ0sbD9OWvMYBQdcRmeGXCUgmiP/ECOVB1bFKFNkaqX2Ls2TgPvPO22QnWRSuRR8DGmcjCvAVaWwXtxUtyAJaH6xDvqqc4LICf3reRUIbhOgApQLl6BheJCTwBJRbgDqGiGImp0Y0FR1D1vvIAZSiWpjMOnRgHeOWcnqHjv7cjLfXvJ8fO6oeydxQ2wuWzxOO/xLHWXYHEHLdisWNuYHUjiGFGkNa5ojOX3e1+wuA2RJuWG1TlQAAAABJRU5ErkJggg==) no-repeat center;
		background-size: 16px;
	}
	.ico-share{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAMAAACBKikvAAAAPFBMVEUAAAAzMzM0NDQyMjI0NDQyMjIwMDAyMjIyMjIyMjIzMzMzMzMzMzMyMjIyMjIyMjIzMzMyMjIzMzMzMzOxOSPrAAAAE3RSTlMAqlTFOfYU6iVJneHUgTCyjnNgln6dtQAAAOtJREFUOMvt0lluxCAQRdFiLIxnv/3vNV0OkRFdTVC+c/8sHTATdYtXpKEceBuCC8CeSqdpmh64MRCK9GgL1MjvkfYNLlSVZpEFOls3RdKkQNM5H2/X8JK2B+NlGD9NH6E3AVXrB5gM7tiZ7GSDUYfXPZs7k4xhYI76GrOwnEiKM8BJ3/Uu//JlR8t9Nyo0Mt3zLOQUVbjKHutBF6lwAnBQ6Xx9nKTCyMBer+IgHWY5i+o4V9Lhdt9WkwZ3+XEXPhOmd+Ozb+ChvxAGN9AiJAUCaNeYIvXh0z/8M3T+lwocSp7+SEFejBvI0nBfPaMbPGfSuRYAAAAASUVORK5CYII=) no-repeat center;
		background-size: 100% auto;
		margin-right: 12px;
		width: 18px;
		height: 100%;
	}
	/* 覆盖vant-swiper样式 */
	.van-swipe__indicators{
		bottom: 30px;
	}
	
	
</style>
