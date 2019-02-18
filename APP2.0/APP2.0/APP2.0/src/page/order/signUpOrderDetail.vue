<template>
	<div>
		<!-- 我要报名订单详情 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
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
				<span class="fl-r fc-9 fz13">真实姓名</span>
			</li>
			<li class="clearfix">
				<span class="fl-l fc-9 fz13">手机号码</span>
				<span class="fl-r">122222</span>
			</li>
		</ul>
		<!--  -->
		<ul class="table-view bg-f mb-10">
			<li class="border-buttom">订单信息</li>
			<li class="border-buttom clearfix ">
				<span class="fl-l fc-9 fz13">支付方式</span>
				<span class="fl-r"><i class="icon ico-zfb"></i>支付宝</span>
			</li>
			<li class="border-buttom clearfix ">
				<span class="fl-l fc-9 fz13">报名费金额</span>
				<span class="fl-r">￥8788</span>
			</li>
			<li class="border-buttom clearfix ">
				<span class="fl-l fc-9 fz13">优惠券</span>
				<span class="fl-r">-￥8788</span>
			</li>
			<li class="border-buttom clearfix ">
				<span class="fl-l fc-9 fz13">应付总额</span>
				<span class="fl-r fc-green">￥667</span>
			</li>
		</ul>
		<!--  -->
		<div class="bottom-box flex-box ">
			<button class="item fc-green">取消支付</button>
			<button class="item btn-solid fc-f"><router-link to='/orderState' tag="i">1111</router-link>立即支付</button>
		</div>
		<div style="height: 40px;"></div>
	</div>
</template>

<script>
	export default {
		name:"signUpOrderDetail",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
