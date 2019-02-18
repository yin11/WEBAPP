<template>
	<div>
		<!-- 预约时间下单 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div>
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
			<ul class="table-view bg-f mb-10 fz14">
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">地址</span>
					<span class="fl-r">杭州市滨江区立业园-西一门</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">智能真车</span>
					<span class="fl-r">Kitcar001-西一门</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">预约日期</span>
					<span class="fl-r">2018年07月13日</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">预约时间</span>
					<span class="fl-r">12：00-13：00</span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">合计时间</span>
					<span class="fl-r">1小时</span>
				</li>
				<li class="border-buttom clearfix ">
					<input type="checkbox" checked id="clear"/>
					<label class="clearfix" for="clear">
						<span class="fl-l fc-9 fz13">可用100K币兑换1小时</span>
						<i class="icon ico-go fl-r"></i>
					</label>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">支付方式</span>
					<span class="fl-r"><i class="icon ico-zfb"></i>支付宝<i class="icon right-arrow"></i></span>
				</li>
				<li class="border-buttom clearfix ">
					<span class="fl-l fc-9 fz13">应付 </span>
					<span class="fl-r">￥8788</span>
				</li>
			</ul>
			<!--  -->
			<div class="bottom-box flex-box ">
				<div class="item">待支付：<span class="fc-green">￥4444</span></div>
				<button class="item btn-solid fc-f"><router-link to='/orderState' tag="i">1111</router-link>立即支付</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"bespokeOrder",
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
	input[type="checkbox"]+label{
		.ico-go{
			width: 20px;
			height: 20px!important;
			margin-top: 10px;
			border: 1px solid $gray-c;
			border-radius: 2px;
			background: #fff;
		}
		.ico-clear{
			padding-left: 30px;
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAAA4joM4joM3j4Q4joM4j4Q4joM4j4U4j4M4joM3joM3joQ3joM4jYI3joQ3j4Q4joP/eKIeAAAAEXRSTlMA/pQV7je2WafR32yFKXlGxR6DfxEAAAGLSURBVDjLnVXbssMgCCyKd2Py/197wEgxiWcyU18y1nWXBaSf63ItJgTAFJv7/LtszTCtXO0aZvgUvSkhFOORd2YBDcgHk57jixjuOCP37xrm+psHSNtTZksA/oaLa4PxgjQPhfVZWPI5rMI5HFmEtKDyopkArZBvC0IANxwNcTu+mj+nhMLElLV/dHFGNqbp+EHF4eYrYYGDoNHDMTvPEoummCMPGcSqxtsA56plKD1j+VJRhEZp8hOOVLGcIcxQD5FiNzMukrfkTihC/AaZiLUIbke+tHHh7RmvAAvFpwUyMO7spNq6B6NFZqAI5S4pm52OiwKHdEXAdutZH2FX6dOMIwe2R/115g4gGjUz0lN73Vye69HoRNMjCd+IIF7bo0KYEq4lLCi4vZ5tipcSalNYZrTd4knY5qaQNpMEYiDcLt2hbXZrXL7FOFoHhFvj6lMQUyxZ2bI+hdXjKrR1AbII6+PS56qmAN00AsLjkaup/XG2Hin2OVLeh9QvY+99kL6P5p+H/fvfxx/wGgr7+rIGOAAAAABJRU5ErkJggg==) no-repeat 0 center;
			background-size: 20px;
		}
	}
	input[type="checkbox"]:checked+label{
		.ico-go{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAMAAADgvdz9AAAAM1BMVEUAAAAsmI4tl40rmokslowslowslo0slowsl4wsl4wtlY4tl4wtlowtl4wul4wtl4wtloxBe3KWAAAAEHRSTlMAFjcM9NqJ6sZxJrCgZVVLITI11AAAAIdJREFUKM990VEOhCAMBNBaEawIzv1Pu5gUuy5b5ovwEugAuVmEaaIbwjrTCa87gGuq1dXctJCXs6n0IZZ/GnXNwwjxS0mAwL96vgqmw1SaZrIcCdie+8utr+fgAOy6U9HXlvqcd906NBGdlUO/Z+xSTIfk5pK0g/MHnmp9ex+L1Vf1PHrq5wPmFgbbvQoJjgAAAABJRU5ErkJggg==) no-repeat center;
			background-size: 10px auto;
		}
	}
</style>
