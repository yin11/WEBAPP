<template>
	<div>
		<!-- 智能预约 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 地图按钮 -->
		<div class="head-btn-box">
			<router-link tag="button" class="ico-map" to="/carMap"></router-link>
		</div>
		<div class="header ">
			<ul class="flex-box bg-f border-buttom fz14 move-tab bg-f">
				<li class="item" :class="tabNum == 1 ? 'active fc-green' : '' " @click="selectTab(1)">全部</li>
				<li class="item" :class="tabNum == 2 ? 'active fc-green' : '' " @click="selectTab(2)">距离最近</li>
				<li class="item" :class="tabNum == 3 ? 'active fc-green' : '' " @click="selectTab(3)">常去地点</li>
				<li class="move-line"> </li>
			</ul>
			<div style="height: 36px;"></div>
		</div>
		<!-- list -->
		<div >
			<ul  class="table-list bg-f">
				<li class="item border-buttom"  v-for="i in 10">
					<div class="img-box"><img  src="../../assets/image/ico-bg.png"  width="100%"/></div>
					<p class="fz16 p-hide fw-6">Tuobab智能学车—滨江立业园店滨江立业园店</p>
					<p class="fz12 p-hide fc-orange">智能真车2台</p>
					<div class="con-box fz10 fc-9">
						<p class="p-hide">杭州市滨江区立业园杭州市滨江区立业园…</p>
						<p class="ico-address">1.6公里</p>
						<router-link to="/bespokeTime" tag="button" class="btn-solid-big item fc-f fz12">立即预约</router-link>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name:"bespoke",
		data() {
			return {
				title:["全部","距离我近","常去地点"] ,
				tabNum : 1 ,
			};
		},
		components : {
			
		},
		mounted(){
			
		},
		created: function(){
			
		},
		methods: {
			//选中tab
			selectTab(n){
				this.tabNum = n ;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ico-map{
		display: block;
		width: 16px;
		height: 44px;
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAMAAAAAh4u3AAAALVBMVEVHcEwyMjIdHR0hISEyMjIyMjInJyczMzMgICATExMAAAAAAAAAAAAAAAAzMzMIVsoXAAAADXRSTlMAgggX8dQ/dlaw8tt3LkNNvwAAATRJREFUOMuNk1mWxSAIRBXFOOS5/+U2k4lmOs2Xw7XAEp27RthbrWV3X5HrT6KFD+Y3osEbA433q6jtX0ItOdgZfZRK4ArtJR4zxYPgEafqcozFlforekeCskulU2yHCtIMWemASDL2CdITmKSmYOkqAEHRoOD5RPRUKBBUgrpFkiEHLxBsimh5RSwSI7IsCBSQFUsCOM2sk5kCbVrMEW04bl4K5Hsss1m7MVXTg0Hd3x+GhMAt6TZ3l6rD5kclkxpCL0r6yIN5rkm9ykcHDOiiBKGe931VcpNtR03+q+df0j1DX0rwH+iqFLy//TXpo7Mm6by4YiDd2JMpaXOO/hzKsoZZcvoxRcE2WBCekU8Y7Rvon2FsUrHq+9ScWbEFMQjPBwXF1p5O8wm7Nq4IJ0h3my9rfztWFFYSDF/MAAAAAElFTkSuQmCC) no-repeat center;
		background-size: 100% auto;
		margin-right: 15px;
	}
	.move-tab{
		
		
		.move-line{
			width: 33.33333%;
		}
		
		.item.active:nth-of-type(1)~ .move-line{
			left: 0px;
		}
		.item.active:nth-of-type(2)~ .move-line{
			left: 33.3333%;
		}
		.item.active:nth-of-type(3)~ .move-line{
			left: 66.6666%;
		}
	}
	.table-list{
		li.item{
			padding-top: 20px;
		}
		.con-box{
			padding-right: 110px;
			position: relative;
			
			.btn-solid-big{
				position: absolute;
				right: 0;
				bottom: 0;
				height: 30px;
				line-height: 30px;
				border-radius: 30px;
				width: 100px;
			}
			.ico-address{
				padding-left: 16px;
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAM1BMVEUAAAAslowslowslowslostlo0tl4wtlowsmIwvmYwtl40tlowrlYkkkpIsl40ulYwtlozwabhwAAAAEHRSTlMAyfGyYOi8ekslnN9BDoRqyFVerQAAAGdJREFUCNdFzlsWwyAIRdEDwbzTMv/RFpCu7A90yVUkmKiKkZ7Vy/oAi7cF9lxVs+7V2OBbreEuzPQgTk7CJzZcb+finHesEreHMbLeIN6EHjTHhP93SIeXg7J5vdikZ82gaoaaGekHgT8G6ivKjjUAAAAASUVORK5CYII=) no-repeat left center;
				background-size: 6px 9px;
			}
		}
	}
	
</style>
