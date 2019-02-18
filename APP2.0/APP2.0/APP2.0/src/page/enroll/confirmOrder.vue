<template>
	<div>
		<!-- 确认订单 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
			<div class="table-list bg-f mb-10">
				<div class="item">
					<div class="img-box"><img src="../../assets/image/ico-bg.png" width="100%"/></div>
					<p class="fz14 p-hide">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
					<p class="fz12 fc-9 txt-hide">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					<p class="txt-r fz11">&nbsp;</p>
					<p class="fc-green fz14 txt-r fw-6">6777元</p>
				</div>
			</div>
			<!--  -->
			<ul class="table-view bg-f mb-10">
				<li class="border-buttom">报名信息</li>
				<li class="border-buttom clearfix">
					<span class="fl-l fc-9 fz13">真实姓名</span>
					<input type="text" class="fl-r txt-r" placeholder="请输入姓名" />
				</li>
				<li class="clearfix">
					<span class="fl-l fc-9 fz13">手机号码</span>
					<span class="fl-r">122222</span>
				</li>
			</ul>
			<!--  -->
			<ul class="table-view bg-f mb-10">
				<li class="border-buttom">支付</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">支付方式</span>
					<span class="fl-r"><i class="icon ico-zfb"></i>支付宝<i class="icon right-arrow"></i></span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">使用优惠券</span>
					<span class="fl-r"><i class="fc-9 fz12">已使用2张</i><i class="fc-green">-￥778</i><i class="icon right-arrow"></i></span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">报名费金额</span>
					<span class="fl-r">122222</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">优惠券</span>
					<span class="fl-r">￥8788</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">应付总额</span>
					<span class="fl-r fc-green">￥667</span>
				</li>
			</ul>
			<!--  -->
			<div class="bottom-box flex-box ">
				<div class="item">合计金额：<span class="fc-green">￥4444</span></div>
				<button class="item btn-solid fc-f"><router-link to='/orderState' tag="i">1111</router-link>立即支付</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"confirmOrder",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
