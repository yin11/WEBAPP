<template>
	<div>
		<!-- head -->
		<header class=" head-box bg-f">
			<h1 class="fz18 border-buttom"><span @click="">杭州<i class="ico-top-triangle"></i></span></h1>
			<div class="head-btn-box"> <span class="icon ico-sweep"></span></div>
			<!-- 当前城市的区域 -->
			<van-popup v-model="showAddress">
				<div class="bg-f fz14 place-box">
					<ul class="clearfix placeList">
						<li class="fl-l">滨江</li>
						<li class="fl-l">吓死</li>
						<li class="fl-l">吓死吓死</li>
						<li class="fl-l">滨江</li>
					</ul>
					<p class="clearfix fz10 fc-9"><span class="fl-r">更多敬请期待</span></p>
				</div>
			</van-popup>
		</header>
		<div style="height: 44px;"></div>
		
		<!-- 当前学车的进度 -->
		<div class="state-box clearfix fc-f fz12" v-show="showTimeState">
			<span class="fl-l">正在学车</span>
			<span class="fl-r">00：30：33</span>
		</div>
		<!-- banber -->
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item><img src="@/assets/image/index-banner1.png" width="100%" /></van-swipe-item>
			<van-swipe-item><img src="@/assets/image/index-banner1.png" width="100%" /></van-swipe-item>
		</van-swipe>
		
		<!-- main -->
		<div class="main-box">
			<!-- 免费试学 -->
			<div class="relative fc-f box">
				<img src="@/assets/image/index-img1.png" width="100%" />
				<p class="fz18">免费试学</p>
				<p class="fz12">先培后付</p>
				<router-link to="/freeStudy" tag="button" class="btn-solid fc-f">立即申请</router-link>
			</div>
			<div class="fz18 fw-6 title">智能学车课程</div>
			<div class="flex-box fc-green fz14">
				<router-link tag="div" to="/mustLearn" class="item border-box">
					<i class="icon ico-must"></i>
					<p>必学入门课</p>
				</router-link>
				<div class="item border-box">
					<i class="icon ico-mock"></i>
					<p>必考全真模拟</p>
				</div>
			</div>
			<!-- 第二课堂 -->
			<div class="relative fc-f box">
				<img src="@/assets/image/index-img2.png" width="100%" />
				<p class="fz18">第二课堂</p>
				<p class="fz12">仅对大学生开发</p>
				<router-link to="/secondClass" tag="button" class="btn-solid fc-f">立即预约</router-link>
			</div>
			<div class="fz18 fw-6 title">学车须读</div>
			<div class="flex-box fz12 notice-box">
				<router-link to="/notes" tag="div" class="item">
					<p>学车须知</p>
					<i class="icon ico-instructions"></i>
				</router-link>
				<router-link to="/procedure" tag="div" class="item">
					<p>学车流程</p>
					<i class="icon ico-process"></i>
				</router-link>
				<div class="item">
					<p>常见问题</p>
					<i class="icon ico-issue"></i>
				</div>
				<router-link to="/subscribe" tag="div" class="item">
					<p>考试必约</p>
					<i class="icon ico-about"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				showTimeState : false ,//练车的状态.
				showAddress : false ,//选择地址显示下拉区
			};
		},
		components : {
			
		},
		mounted(){
			
		},
		created: function(){
			
		},
		methods: {
			
			//百度地图获取当前的地址信息
			getLocation(){
				baidumap_location.getCurrentPosition(function (result) {
					this.$comm.alertMsg(JSON.stringify(result, null, 4));
				}, function (error) {

				});
			},
			//显示下拉
			showAddressPoup(){
				this.showAddress = true ;
			},
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.ico-top-triangle{
		display: inline-block;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border-top-color: #666;
		margin-left: 4px;
	}
	.state-box{
		padding: 0 15px;
		background: $main-color;
		line-height: 30px;
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		z-index: 1;
	}
	.ico-sweep{
		width: 20px;
		height: 100%;
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAJFBMVEVHcEwxMTEzMzM0NDQzMzMzMzMzMzMyMjI0NDQ1NTUzMzMzMzPEtYWVAAAAC3RSTlMAFeCQxCBlKa8rSsRiMNQAAAD6SURBVFjD7ZfRDoMgDEVtaaHC///vyJJloBTKYhazcR58uc1JRbGybYvFXYEQ9pLA9rSEJR3AaE0rfDpB1rTCNUqhlyJbRWXzIOcYdBFGfbG5XGwaidj4hGUkCleJruhIbteRWx29ixVRxJTE+smJWeTU0Hkwf7ymihd/NNW8m8Q3twE0xsQIab2SjPOi1GoJaN5DzXvbhSYRZWbDNOsN/anddlG1F7fbPbma9WmEdk9SZ9fzb9N8d51J67Xt/JHofh3xWqPviXwmvi71huFYZjQQ1ZS/ZAGth5qGCPuHMEUU+yL7wQ8cYQ3FbqyNtbycBw6dh368WNyIB21BH5mSEW6XAAAAAElFTkSuQmCC) no-repeat center;
		background-size: 100% auto;
		margin-right: 15px;
	}
	.place-box{
		position: absolute;
		top: 100%;
		width: 100%;
		padding: 0 15px 10px;
		box-sizing: border-box;
		z-index: 1;
		
		.placeList{
			li{
				border: 1px solid $gray-c;
				min-width: 100px;
				padding: 0 10px;
				box-sizing: border-box;
				line-height: 30px;
				text-align: center;
				margin: 10px 0 0 10px;
				border-radius: 5px;
			}
		}
	}
	.main-box{
		padding: 15px;
		.box{
			height: 86px;
			box-sizing: border-box;
			padding: 20px 20px 18px 20px;
			img{
				position: absolute;
				z-index: -1;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
			}
		}
		
		.btn-solid{
			position: absolute;
			right: 20px;
			bottom: 16px;
			line-height: 24px;
			border-radius: 24px;
			padding: 0 12px;
		}
		
		.notice-box{
			justify-content: space-between;
			.item{
				flex: inherit;
				border: 1px solid $gray-c;
				border-radius: 5px;
				margin-bottom: 10px;
				width: 76px;
				padding: 16px 0 22px;
				
				.icon{
					width: 24px;
					height: 24px;
					margin: 27px auto 0;
				}
				
				.ico-instructions{
					background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAMAAAArU9sbAAAAKlBMVEUvl5ItmI4tlowtl4wtlo0ul43////4/PyBwLq/39xttq+j0cxOp57e7+0V1fIwAAAABXRSTlMBO8zrh47CAyEAAAKHSURBVFjDvZjrtuwQDIC3W4Py/q97qJZUg3Rm1smvvYd+K1cSf39jEVpLqZRRSkothPh7LSIBjFEGSUa9YuieUEQZqflqEIBGYikksh5TYRgmpDIrUXKB0YYneqqI4cpYHaEMX5T4AWSEEealUJjXkCTiS3MG2pzR8T7wAMH7HCkyT3yM0dk1wsYI0fd5cznFbkkAnA0TJfZYdtnONTXbLGzbCdoJ24K3Ds4tW6Gg7Kt5f1EyB6LzDzPywo3SbGqJ3yhlO7iiUTEDLTZKVaaVoL1vLLb54OLj90pRlzJqQtkgnk4fUIx6nAYUxaUEmFFOz8gpZVtSZJ/7H1GOnMHH22cUfTeoUfYdBpS6UilKdqfkRXEpx2iKNcH1usjuXGkUYxxFQQuNkhxDUiDlfohPSkyZ7IGgaIpStj8oGI4p+uZcFKOsevFjo8CODMUUOaJs9YtKgYO8kRQ1oFTtKwU75U5RY8r1UaVgp/QUY0a5expwUQ4TgaSYoS7lu0bJXtnpCphYdMTEYb/sDoYUOkbDOkrHOnAjnesIgK4jogIknbvu/veqjvSgjuyRusCuI5pybLHArCNBny/FAeXfdR3lK4mmNG3WdSQn527xDaeO9OQOgDOqyzoqvZCc5G4K07KO5OpuxN4d1tF5UfPuIxjUkWL0DOtbTU/7FyalNVP6Awr0vVRTBkdyQYn7Y6oQqHnjUK5OrWu/UbRTCwczSmob7WhOkrduEoP6sw73wnI+BwRfk+N2vtzbacUYJ2wElLvJkD0wRpvnVJJb7ULJvThzzCKGmxBsolgbwrcjXwhv5sY3M+x8pP7FPM1VR4r/8s7wozeP8/1FDZyqP3gLMl+9BRWQENx3qX/aClTwEoSVXgAAAABJRU5ErkJggg==) no-repeat center;
					background-size: cover;
				}
				.ico-process{
					background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAMAAAArU9sbAAAALVBMVEVHcEwtlowtlowul4wtmY4umI4tlo0vl43////w+PdIpJtqta6329iYzMfT6efXcog4AAAAB3RSTlMA84PhHEfD9o59LAAAAwNJREFUWMOlWFmWhCAMbPad+x93ArSagAj25M2bjxbLSmUh8PlMTSrFtRbMMCE051J+XhsACHMaK38Apd5ASK6BATOdwW+ay22M4X0MtYUjuUAg3ocQPMURaxyl8QvJWbCcOjpCLYjg1T5bW2Fs7uiYJzpS9yCH9TBMT+koQVZGiyyaTa8UDU1wGMX2PjGmNpiYREBsGmJ+x0b1SRIpSrxJHbViEsKI4pNfsNGESjhjfJiL3uT6n0SKBpzmSayvDbqkIQMZJ/4MyRa9J2Rc+FLsZEY+SdFFOIf7fPGlJIhX4vIJF3EB+cYD5y75xq1PmAr44VIfbCxq8TfekeEEBDnuQ3RgMXTxcxiGj1RyAcF+ezBD06TQRbhsoALiRW9WBto435PRmIoLZm2JSFNTDxVQuiu6Gys+deXEJw8ffSJkOHEIqIQ9lOI6qqYSIYYeebNNJuGUuWQB6eMmCDjvMhZG4TDvOlTSGvFWSNy4F+ZDQ7SYI3Gzy34bJaByM/pCgTLL5gWKxSgCZUvcRyGrxYf9ioIKm30wevqRi/mZS7aYy9Vc/qOLQJHe9ggyIqEOKK7trHTCvNGjTIiQWRFPWPrI3XNYWXoVv/tUDmgfUGfXtv3TiarjZHRUI94H83NjQfulP1HqDhCHzXRWhO5mGoH+UgZCPME9S0M/585eV+Tthq95x/PdwnD2XWh2/0OpewCMp8Fuohi6sPXGNgrxnsu8WXUCNi5tb5TsR3VbTjB5bNRp5DndovvplV/zS9yjYsaF1zDFkU/QwkJ6KOajjGzr9Wg+BDIwsR2nGECc9Qifkk/tg64Nv2iuq8XkQ0qp1nssHwqT/A9oIZ0xu3m3rh5x6q9dLvGHkxE0ovpGhE/6OpWllF11wzzN3nTkPXAK0tfsiEFFmZxJQMb2cj0R5BulmJLL89FX8AiG1Fycjz5SMfPGmNo6Nz7b9DQsu0g9EdFq9zz9YIvjvdqgszrbt3uGlSKb9xX/v/NoZaXZRFT+5kZI0rugtqdrrt7fKknJd++l/gCVLm4ygPSK0gAAAABJRU5ErkJggg==) no-repeat center;
					background-size: cover;
				}
				.ico-issue{
					background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAKlBMVEVHcEwtlowtl40tlowvl40vmI4ul40tloz///85nJPm8/Ou19ODwbtcrqb7rSbMAAAAB3RSTlMAzY3vNxZX98tA6gAAAlJJREFUWMO9WNmS4yAMDAKDBfj/f3cBHzuxWyCSmlHy4HJVOq2TFq/XX9nyWop9C+LJGGPbx5D/DG5xZEIINpxWniy5WTBP/xHebI6YN1bAKays8UoYZ8LAjNPAkB3hFFbkvqejI0VBa5Z6KVe49QNJTp8JM2aNxMfYMGdmwX6FaYPe4fjwlpplZogEqhmjxPW0mBHUo8od4PMTRoKy7h5ogHPCxHg+JR4F3As48WDBeWeXnpT8iFC8ObOl9uKJtPQ7o/3sPfTtFfdqAER6qz/agLOp178CoUdo84PlezGBCFVC6/aoK/jWXolzzz/JEeY6wnAH1/csq18fvi3PULcEbYAojPZZAcCzCgQS3YAAo8M34BnXYIB+TzhGh28GtX0xwAgU115KUnsUKDQzMi7to3OdesDulc3S4aQHqgMg4nOgAnktUF6FUB+zRAnEWXRsCojzKuPso9tP4GzSWall1FpG5nMwsgqc2MdpjBTpz3ju39I/VkS1EGMaqqVlBMRxwOecI0ZTiMxdRhqVxkks6Jt6cwMgqeWfQ7ubNt76mW+MVAo0D0N9HWx938Yhuo6jfgEIRxBUNl3fchF+m1Jxuzld3FkC6BsgGgitz8S2/xjnXfp11Tp3++yu2eV4FxnayZp1GsF+KiV8TmPBLq0QYZfYaWZpI3GqiUD00q9HaZUPWBIXSOhbLAOb51ZIuIpyzpnVy9qVO7y0jQvx19b16p4CypDqSmM4C8ipb0dMb0t3E9c+jvDubg25Dy6i7NcoF5ineitWvobmb7PAfd1f2j9JtmcCKxnwbAAAAABJRU5ErkJggg==) no-repeat center;
					background-size: cover;
				}
				.ico-about{
					background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAMAAAArU9sbAAAAGFBMVEUrlIgslowslowqlYorlYsslYsslYstloxZH/qGAAAAB3RSTlMD7LUiToxql0M0JgAAAmNJREFUWMO1WNt2xCAIDIPg//9xvSTZVVHJ7tbT04c2jsNwETyO+WJWAeUFCczH88UhAUSK+af8qlCPMEKmEIeVkIKfBqIBcXJy4ijiekH3RHYYmRE2+ihRdCxamcXiwshL+BtrXurwD0CS100YpvhsWWyeMZnAfABiwEj8ZEmXOA5RUnLSMm72yqY85Fwq0H7ZOAp7jOu8Ls3gt4dk6oc3m/AApDf/9lNweSKXT+WB+k0GHiahOKjugaHMhgoa6YpTtLGpkgEtmXBbdzB4A9tYIZzFq1GzFabQW7oZ3IEUk9qDi1ayLbCNDKNFxYfYMWmPCYO6GXghS00SoffbSYzQSN8tZNFS0PMFdLmxxk6/JQkT1lQSk2yXvDt10CAsxM1b+NoqNxOjKspc3BIqegma9hJmpRXH/DK8UUpAaLXQrM8JxQTIzcsrMqjGa5h69JjESbbgdmohk5oXDbb9ZHEpwabV04UMacWbGU+GLjVicbn64rKK8fGfN0hNIzUzsEcRM+zPYIWWlNFN6ksfu0WCFvr80wIl9GcUKhhBVgYl2XisFW3i67bC55MxlA+MTLCr76283G6pN8emLZFB/FYWctwS9SOmqUUuJldszNidILsGCePdCG4y2dOVBOOerj4RXN3+tt+D0b70bey+aQzmp++NI4O8VIZMC69h69Fcga5uaxoTg8LReGLRY5aR09PRtyqGp0OAPSfJJzBd2+hy6T+NEz8ZbcxpjR/C0A9GPsL/zrCOZt4zT/vybz/bO1LQ9+7Baxz4H2Hy+0v87v3lnoaobfch+tGrUn5WQrzepRYQf3wxVfEhoCkKAAAAAElFTkSuQmCC) no-repeat center;
					background-size: cover;
				}
			}
		} 
		
		
		.title{
			margin: 20px 0 10px;
		}
		
		.ico-must{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAMAAACUXCGWAAAANlBMVEUAAAArlYgkkIUslowslowmk4grlYsrlYsrlYsslosrlIoslowpkokslosslYsslYsrlIotlozMbvoeAAAAEXRSTlMAOw3v3hqTfWysUM8sxbmhX3y6mnEAAAH1SURBVFjD3ZZZcsMgEESHHQFa+v6XjZ1IGVuAWaryk/dll8tPPT0SJfo7jHgiidL3B5pCHhGA2oX0KwBtJz1B40H0Uux4oF2aSuPwRDmZdjzZpuII/aPxUmw4c02EWfCNDhROoTPTFizm+qicHLZs+EEJ8urMdQxbNE48idOCVYy2iwtHSWNyph0XlsxvrphohITXLAonaqyZjS2BAjjYyEgevyhDlr9tcqRaZuF1PVj7LQZgBB2YsUhUo2CZkihJDmDczDgIlPCK6C+WsUQaYLTsXjGzES0YHej+n0hkcWupjVR3icNwlIA31vt80NRmxRtLlgRpNAjc1QnjR4MgXE0zOzU4cMPk3th3xDIxWxeg6DMW+fwCd8ZahTIs7kxiNJAtmCJu6K7TlRE8TWexDnfWUk3YegphAu8LjKUqSeVBymrfWSqfYhEZon2XMXs5CEz9lSJDmXIQ3T7NmKMSZGm8CWSLjMgJXU8MD+PRXYlF5XpGIWftd9haU/Ddjo1v4WzMXoc2PEx7N7KYWKXqMBAd9xgv0QNdtZqIanVC9QVJGiUcP4/to0SoukOuKJJuDl9z1EuFbayWHfUftWyulm9HhzKiuRZ2eJRxPZWq8NGx9FSqU+6ovQjLSmvRfOxDG2JSrGxP8hVaDkqizBlTVJD0f/kCYUJ94ae4168AAAAASUVORK5CYII=) no-repeat center;
			background-size: cover;
			width: 34px;
			height: 34px;
			margin: 11px auto 2px;
		}
		.ico-mock{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAMAAACUXCGWAAAAOVBMVEUAAAAslYsrlYwrlYoqlIsslYwqlIkpk4krlYsij4UslowrlYsrlIoslownkocrlYsslowslYwtlozQbRUbAAAAEnRSTlMAxm1bP+YuI5wL24pOtBd70KntNUKfAAAB0UlEQVRYw+2XW3LDIAxFEU/xttn/YhuToWE8YJS6/WrOVyYwx0KRrx32TzCS+x2cKg+Ug90LbdkbaI5QRgAKTavAu3KFinwlsr4QgEuN2QqNMHckV6jMa4mvBkqTknkgH4QQhODce8QdVKnAzBGeyyGxK+R2WQpUh2ULbN3nJ10tB3KhaBvd+GK8rjECWK82b2teGlrzcHjUcmCWhrZVjc4jxr/cvOgwW+AEQ2tfHExrOUjEnGibafKrkeLjrwVVwocN1OXAknNvOPo1R3ZGZjT6uqUEFX66RzQ6VfrxoZ+nKIf1TLJ8s+dgSIbgn9HTyrHuFMSAWciJK0mREVRptAOIWapDRO89r2TvMcIsPDODchvFyi/AeLyriPxIB3FHEWybtBu0W1nekehOsmmrvSt0IGsDx3E6iXx+QprBed36IJqkO1rK63JisK805C+J6qJcXGtQv7aqoaSS1FyxJcaGknAOKZxL/DkPePfE2TqLvGppV4mGXvJcBswiBJFh8c7muXjswnpT95Kf8ZEsJPwjWUlggSNIkC2QBAmnPcsbYjgn8k3JsD77niT0L44NILwK95j2NZyiawEOr6nj919XTGuJzRGcUmqDiIZ9+Du+AHwciXZyrGR8AAAAAElFTkSuQmCC) no-repeat center;
			background-size: cover;
			width: 34px;
			height: 34px;
			margin: 11px auto 2px;
		}
		
		.flex-box{
			justify-content: space-between;
			.border-box{
				width: 166px;
				padding-bottom: 6px;
				flex: inherit;
				border: 1px solid $gray-c;
				border-radius: 5px;
				margin-bottom: 10px;
			}
		}
		
	}
</style>
