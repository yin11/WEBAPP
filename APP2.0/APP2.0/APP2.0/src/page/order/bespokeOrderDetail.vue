<template>
	<div>
		<!-- 预约订单列表 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div  class="table-list bg-f mb-10">
			<div class="item" >
				<div class="img-box"><img  src="../../assets/image/ico-bg.png"  width="100%"/></div>
				<p class="fz16 p-hide fw-6 name">Tuobab智能学车—滨江立业园店滨江立业园店</p>
				<p class="fz12 p-hide fc-orange">智能真车2台</p>
				<p class="clearfix fz10 fc-9">
					<span class="fl-l p-hide">地址地址地址地址地址地址地址地址地址地址</span>
					<span class="fl-r ico-address">1.2公里</span>
				</p>
			</div>
		</div>
		<!--  -->
		<ul class="table-view bg-f mb-10">
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">智能真车编号</span>
				<span class="fl-r fc-9 fz13">Kitcar001</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">预约日期</span>
				<span class="fl-r">2018年7月13日</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">预约时间</span>
				<span class="fl-r">12：00-13：00</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">合计时间</span>
				<span class="fl-r">1小时</span>
			</li>
		</ul>
		<!--  -->
		<ul class="table-view bg-f mb-10">
			<li class="border-buttom ">订单详情</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">订单号</span>
				<span class="fl-r">2018年7月13日</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">下单时间</span>
				<span class="fl-r">12：00-13：00</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">积分抵扣</span>
				<span class="fl-r">100积分/1小时</span>
			</li>
			<li class="border-buttom clearfix">
				<span class="fl-l fc-9 fz13">实付款</span>
				<span class="fl-r fc-green">$333</span>
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
		name:"bespokeOrderDetail",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.table-list{
		.fl-l{
			width: 75%;
		}
		
		.name{
			margin: 10px 0;
		}
		
		.ico-address{
			padding-left: 16px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAM1BMVEUAAAAslowslowslowslostlo0tl4wtlowsmIwvmYwtl40tlowrlYkkkpIsl40ulYwtlozwabhwAAAAEHRSTlMAyfGyYOi8ekslnN9BDoRqyFVerQAAAGdJREFUCNdFzlsWwyAIRdEDwbzTMv/RFpCu7A90yVUkmKiKkZ7Vy/oAi7cF9lxVs+7V2OBbreEuzPQgTk7CJzZcb+finHesEreHMbLeIN6EHjTHhP93SIeXg7J5vdikZ82gaoaaGekHgT8G6ivKjjUAAAAASUVORK5CYII=) no-repeat left center;
			background-size: 6px 9px;
		}
	}
</style>
