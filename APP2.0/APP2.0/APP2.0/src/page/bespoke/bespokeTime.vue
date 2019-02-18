<template>
	<div>
		<!-- 预约时间 -->
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
			<div class="bg-f main-box">
				<!-- 车辆选择tab -->
				<ul class="fz12 tab-box ">
					<li class="tab-item relative">
						<input type="radio" name="type" id="Answer1" checked/>
						<label for="Answer1" >模拟车1</label>
					</li><li class="tab-item relative ">
						<input type="radio" name="type" id="Answer2" />
						<label for="Answer2">模拟车1</label>
					</li><li class="tab-item relative ">
						<input type="radio" name="type" id="Answer3" />
						<label for="Answer3">模拟车1</label>
					</li>
				</ul>
				<!-- 时间选择tab -->
				<ul class="fz12 tab-box ">
					<li class="tab-item relative">
						<input type="radio" name="type" id="time1" checked/>
						<label for="time1" >06.23<br/>今天</label>
					</li><li class="tab-item relative ">
						<input type="radio" name="type" id="time2" />
						<label for="time1" >06.23<br/>今天</label>
					</li><li class="tab-item relative ">
						<input type="radio" name="type" id="time3" />
						<label for="time1" >06.23<br/>今天</label>
					</li>
				</ul>
				<!--  -->
				<p class="fc-9 fz12">请选择预约时间段</p>
				<ul class="time-list fz12">
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="active-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="active-box">9:30<br /> | <br />10:30</li>
					<li class="border-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="expire-box">9:30<br /> | <br />10:30</li>
					<li class="active-box">9:30<br /> | <br />10:30</li>
					<li class="border-box">9:30<br /> | <br />10:30</li>
				</ul>
				<div>
					<p class="clearfix fz12 fc-9">
						<span class="fl-l"><i class="fc-green fz16">$100</i>/小时</span>
						<span class="fl-r">
							<i class="icon border-box"></i>可预约
							<i class="icon active-box"></i>我的预约
							<i class="icon expire-box"></i>不可预约
						</span>
					</p>
					<p class="fz10 fc-9">小K提醒：你每天最多体验一小时，可分多次</p>
				</div>
			</div>
			<div class="bottom-placeholder"></div>
			<router-link class="bottom-box btn-solid fc-f fz14" tag="div" to="/bespokeOrder">预约</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'bespokeTime' ,
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
	
	.main-box{
		padding: 10px 15px;
		
		.icon{
			display: inline-block;
			width: 15px;
			height: 15px;
			margin: 0 2px 0 8px;
		}
		.border-box{
			border: 1px solid #eee;
		}
		.active-box{
			background: $main-color;
			color: #fff;
		}
		.expire-box{
			background: #eee;
		}
		
		.tab-box{
			max-width: 260px;
			overflow-x: scroll;
			overflow-y: hidden;
			white-space: nowrap;
			margin: 0 auto 10px ;
			
			.tab-item{
				display:inline-block;
				width: 130px;
				margin-left: -2px;
				
				label{
					display: block;
					height: 40px;
					text-align: center;
					border: 1px solid #eee;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
				&:first-of-type{
					margin-left: 0;
					label{
						border-top-left-radius: 5px;
						border-bottom-left-radius: 5px;
					}
				}
				&:last-of-type{
					label{
						border-top-right-radius: 5px;
						border-bottom-right-radius: 5px;
					}
				}
				
				
				input[type="radio"]:checked+label{
					background: $main-color;
					border-color: $main-color;
					color: #fff;
				}
			}
		}
		
	}
	.time-list{
		display: flex;
		flex-wrap: wrap;
			
		li{
			display: flex;
			width: 60px;
			height: 60px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			margin: 0 10px 14px 0;
			
			&:nth-of-type(5n){
				margin-right: 0;
			}
		}
		
		
		
		
		
	}
</style>
