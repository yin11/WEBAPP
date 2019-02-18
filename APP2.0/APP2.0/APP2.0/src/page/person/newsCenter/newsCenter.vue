<template>
	<div>
		<!-- 消息通知中心 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<ul class="table-view bg-f fz14">
			<li class="clearfix border-buttom">
				<span class="fl-l"><i class="icon ico-notice"></i>通知</span>
				<span class="fl-r"><span class="ico-add fz10 fc-f" v-show="comment != 0">{{comment}}</span><i class="right-arrow"></i></span>
			</li>
			<router-link to="/newsComments" class="clearfix border-buttom" tag="li">
				<span class="fl-l"><i class="icon ico-news"></i>点赞与评论</span>
				<span class="fl-r"><span class="ico-add fz10 fc-f"  v-show="msgNum != 0">{{msgNum}}</span><i class="right-arrow"></i></span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"newsCenter",
		data() {
			return {
				comment : 0 , //通知
				msgNum : 0 ,//评论与点赞
			};
		},
		mounted(){
			
		},
		created: function(){
			let self = this ;
			self.getMsgCount();
			
		},
		methods: {
			//获取点赞与评论的消息通知总数
			getMsgCount(){
				let self = this ;
				self.$getData.getMsgCount().then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						self.comment = res.data.comment_msg_count ;
						self.comment = res.data.sys_msg_count + res.data.nooice_msg_count ;
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

<style lang="scss" scoped="scoped">
	.icon{
		height: 20px;
		width: 20px;
		display: inline-block;
		margin-right: 10px;
		vertical-align: middle;
	}
	.ico-notice{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAM1BMVEUAAAAtlYwtmIsumY0tlowtl4wtlYwsl40slowslowtlowslowqlYktl40sl40smYwtloym0rEqAAAAEHRSTlMAxzhCvVukj2vvedYVmLIoyfs0/AAAAIFJREFUOMvtztEOgyAQRNHBBRcW1Pn/r62VkBgr8takSc/zzWTQFMeOZGgiu9IpUtwjvx2Jd4ecsvswlxolPtEakVOXcW4RusI/CnSqOowSd260ZGaxjD/tfjnybwKIv8otWnmIUN4IqCYRWamZNLnacLKQzBO6WqQYWZJgaCt48gLpoBA95cE3qgAAAABJRU5ErkJggg==) no-repeat center;
		background-size: 100% auto;
	}
	.ico-news{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAAM1BMVEUAAAAulo0tl4wtlostlowrl44tmI0rl4wslowslowtl40slowtlo0tl4wtlo0tlowtloxy3CUIAAAAEHRSTlMAhni36zpLFcPXn8xsKVuPOnHEPwAAANlJREFUOMvtlN2ywyAIhFFQ4l+67/+0J6cxHSaVzvS+39VGGFYiSt+RGBI+xfEPk0tD1STIXlyBVoqgOuGAi5ZX/gJwTyPlh2BRZAd40KQLmr7t37Y3yr0XOeIWFUT7HbHdLDPEmggS3WBEm96mctaC2YGpqqbcTm8UY8uXtrA5k+2X8KSsE/olOwoduAeuzqDzNVXVuSoq2Oc4DlqynyaMEh3OO1Tg8zQf4YSxhQkwRbSD21GnUggtGK/l7rTV8PD/y+y3Hp5Z3CckAxABNiWHUQUonT6h9C1/JU0MIpFAxnwAAAAASUVORK5CYII=) no-repeat center;
		background-size: 100% auto;
	}
	.ico-add{
		background: $warm-color;
		min-width: 6px;
		height: 16px;
		line-height: 16px;
		border-radius: 16px;
		display: inline-block;
		padding: 0 5px;
	}
</style>
