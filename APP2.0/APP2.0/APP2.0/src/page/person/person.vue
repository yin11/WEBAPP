<template>
	<div>
		<!-- head -->
		<div class="clearfix head-box bg-f">
			<router-link tag="div" class="fl-l " to="/newsCenter"><span class="icon ico-notice relative"><i class="ico-new"></i></span></router-link>
			<div class="icon fl-r ico-install"></div>
			<div class="icon fl-r ico-sweepCode"></div>	
		</div>
		<!-- 个人信息 -->
		<div class="bg-f person fz13 mb-10">
			<div class="img-box">
				<router-link to="personal" tag="div"><img v-lazy="userInfo.image" width="100%"/></router-link>
				<i class="icon ico-edit"></i>
			</div>	
			<h4>{{userInfo.nick_name}}</h4>
			<i class="ico-line icon"></i>
			<div class="flex-box">
				<div class="item">
					<span>{{userInfo.enrol_type}}   <i class="ico-star">{{userInfo.isOver == 'no' ? '未领证' : '已领证'}}</i></span>
				</div>
				<div class="item">
					<span>K币   {{userInfo.k_coin}}</span>
					<router-link to="/signIn" tag="button" class="btn-empty">签到</router-link>
				</div>
			</div>
		</div>
		<!-- 功能列表 -->
		<div class="bg-f">
			<ul class="clearfix box-list fz13">
				<router-link to="/bespokeOrderList" tag="li"class="fl-l">
					<i class="icon relative ico-order "><i class="ico-new"></i></i>
					<span>预约订单</span>
				</router-link>
				<router-link to="/signUpOrderList" tag="li"class="fl-l">
					<i class="icon relative ico-order"></i>
					<span>报名订单</span>
				</router-link>
				<router-link :to="{path:'/notOpen',query:{name:'我的教练'}}" tag="li"class="fl-l">
					<i class="icon ico-coach"></i>
					<span>我的教练</span>
				</router-link>
				<router-link to="/coupons" tag="li"class="fl-l">
					<i class="icon ico-coupon"></i>
					<span>优惠券</span>
				</router-link>
				<router-link to="/community" tag="li"class="fl-l">
					<i class="icon ico-community"></i>
					<span>社区</span>
				</router-link>
				<router-link :to="{path:'/notOpen',query:{name:'商场'}}" tag="li"class="fl-l">
					<i class="icon ico-mall"></i>
					<span>商场</span>
				</router-link>
				<router-link :to="{path:'/notOpen',query:{name:'勋章'}}" tag="li"class="fl-l">
					<i class="icon ico-medal"></i>
					<span>勋章</span>
				</router-link>
				<router-link :to="{path:'/notOpen',query:{name:'邀请有奖'}}" tag="li"class="fl-l">
					<i class="icon ico-invite"></i>
					<span>邀请有奖</span>
				</router-link>
			</ul>
		</div>
		<!-- 分享 -->
		<div class="share-box">
			<p>分享给好友</p>	
			<div class="flex-box">
				<span class="item icon ico-qq">1</span>
				<span class="item icon ico-wx">2</span>
				<span class="item icon ico-wb">3</span>
				<span class="item icon ico-pyq">4</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'person',
		data() {
			return {
				userInfo :{} ,
			};
		},
		mounted(){
			
		},
		created: function(){
			let self = this ;
			if(self.$comm.getStore('userInfo')){ 
				self.userInfo = self.$comm.getStore('userInfo') ;
			}else{
				self.getUser();
			}
			
		},
		methods: {
			//获取个人信息
			getUser(){
				let self = this ;
				self.$getData.getUserInfo().then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						self.userInfo = res.data;
						self.$comm.setStore("userIno",res.data) ; //将个人信息存入缓存
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

<style lang="scss" scoped>
	.head-box{
		padding: 0 15px;
		
		.icon{
			height: 18px;
			width: 18px;
		}
		
		.fl-l,.fl-r{
			padding: 12px 0;
		}
	}
	.ico-notice{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAOVBMVEUAAAAzMzM0NDQyMjIzMzMzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzMzMzPsRIyLAAAAEnRSTlMAJoDrUBM35NhZtW0KRIbCm6nGwbt1AAAA6UlEQVRYw+3W62rEIBCG4W80Go3m0Ln/iy0y2WULSWrWFJplnp8z8EIOiFDq01EyJ3lscQOfFTZLxOeZG4UI1TSkIQ19YCiPnXtZRA/xWNWGfGC2ESvDzF+PrqwqQ3J4917GkYsJxXNVFyLLRZLxwEWP4rn6y1D7o7W/7PbPf+c/W0Ma+iehkVYZwtGe45BdhUVKcbZ7au+QscyMfecOafnVBOSJf5GwwS0/QzI4NBO2ON+JZEuIZi5Ct8s7HKO+nK7SGRzeJiGxEC4JmYwrQtZANIZsypeEwohWFKTTLvU8eFyByEGpO/sGfZo6eGrIBfcAAAAASUVORK5CYII=) no-repeat center;
		background-size: auto 18px;
	}
	.ico-sweepCode{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEUAAAAwMDAzMzMzMzM0NDQzMzM0NDQ0NDQ0NDQzMzM2NjY0NDQ0NDQzMzMzMzMzMzMzMzMzMzM0NDQzMzMzMzNAndvnAAAAFHRSTlMAFeAfKsOPXa1sCphO8M+3pIV2Pd0qaUAAAADsSURBVFjD7ZZLrsMgDAABp6+B8E18/7O+dhdSXGOpi6rybMeaiEgWGEX5WuxyARhLACVhj4uMHbPjCzkwdsgmDTnLhPij8SEXJ3924UJg5lg1pKGxa5JQfQ4Tu3YkxGomiY/hjZRtt2a61HwwinLF+j8hfrgGoaKYYgchcPJQgtHJijyUYbiz9SZkJe7sYIXo0v4UIXxm+l63ZT6z1wbEbeQQ83TII+JKK7RGckFaOgSzoVVDGqJD/n7i6LYJ4tllJtSR2kkvuZeSEKbuhTkbiul18v13bmZIaNn1lHjWm7vqwxAluGA5rSjfyj8XETScDVyXWAAAAABJRU5ErkJggg==) no-repeat center;
		background-size: auto 18px;
	}
	.ico-install{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAASFBMVEUAAAAzMzM0NDQ0NDQ0NDQzMzMzMzM0NDQzMzMzMzMzMzM0NDQzMzM0NDQzMzM0NDQzMzM0NDQzMzM0NDQzMzMzMzMzMzMzMzNERN8wAAAAF3RSTlMA8g4eL7TnR9qVznHEFqEmWWZSPauIfzOc1pwAAALSSURBVFjD7Vhrj50gEL28QQQE9fr//2mXiVteYl2apk2z58MmKgwznDOPva9v/H/AhBDnPv7g37FCtWKT5AhxOTHlh205eeRAdtTQdpTg62Bg/Kiwjxl6x73T7oMQwatoVZIhh2SM5ucF62hWDdghLO7U6VnCM/6yPzMERqpIkX0YHV4XQZ1bLYJtOvtk5gPAtNeKbeLejoL96GRJ4drJBL7cE5Vjx5VAWaFP2rez5Aulbx3eeb6APFAgZ9pdZo22s5TTzO/0iS0QRakQtJ/s2BBCjIDgOikDH/lDekGf8/VRUzxkeT2DgYtfumdY3NiPkV4EGlC8h4sPRkaHRPVyYeiIYIupN8xxfbigPu7Yync+k+BUF0jRyWLQNC1ljm4L5JySMQOZahawOg184MyyMrwdjm4MNYXrDdu59SF4JY8mkDXuQK4hB+jcsnVgh50L3XZUXJipZRkgeMnCXK1ToMBKLZL2Mn/Dn3YRXGXtsiirUzq3EYbLzYrC5UIfFBy+ybUlO1+W36f4yqTIuhUJFKAyz1WrNP6518bIkxxa4ljWM3STjKnZwlr8hw2BMuzD0FQitQFF4MWzy14Sqw0s5E5Of+jT71C3QgaQrukJ0pSCxJAz797McOjHKQIVkoteCzF10tLzGJaSNh/DWuIcqkcyfZYRvUAZaRoZkZdNh8LCprAVowAzAxXy16WW3tVs8YXiv3XaYLgShglbrx0JBPrsNdrwummQLcu6M9PAfT7D0jbaUoL64ajK2yutJChgbOlPNSSGSpsW0nY8Pk9SzrY3Z7FsGKNdf+WRwPf2PJ8WpPLeq0gJzNUT5JHjfcsFz5fO9CZlFL5lQ2xMaa/Zack0SYzs6hwVy4of0mtR5T6ZkpNfAdbVKA3PbOT/LFXoE/M0MzxAW7iUD2INfp/OSEeQ2E4KHMLKK0PbaxDAXIJ0o4awz38/0PTv/6LxjX8WPwDJ7VoUzKatBQAAAABJRU5ErkJggg==) no-repeat center;
		background-size: auto 18px;
		margin-left: 10px;
	}
	/* 新通知 */
	.ico-new{
		width: 6px;
		height: 6px;
		display: block;
		border-radius: 50%;
		background: #EF6437;
		position: absolute;
		right: 0;
	}
	/* 个人信息 */
	.person{
		text-align: center;
		padding-top: 8px;
		
		.img-box{
			width: 76px;
			height: 76px;
			position: relative;
			border-radius: 50%;
			margin: 8px auto 20px;
			
			div{
				overflow: hidden;
				border-radius: 50%;
				height: 100%;
			}
			.ico-edit{
				width: 16px;
				height: 16px;
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAV1BMVEUAAADwZDfwZDfvZDfwZTjyZTjxaDjvZznxZj7xZDjuZTjvZDfyZTjvZDf3q5Hyd07/+vjzgl796+X+8u31mnz84dj0jGn71sn5xLL4tJ76y7v1oob4vKgUTR6+AAAADXRSTlMA7uKxb0QvHxHWmoJgXcXXRgAAAbBJREFUSMeVllmWgyAURDVInPIUkKEx7n+d7SHqkynd1Ed+UherEIEqVNfSkfQ1QN2TkbZd9V3Phjzgpgdpnl/s7YBuZIY2Y++aGpKqmy6ZhkBWJJGLemmiXDT0v2r4qvoV+0sIiv48QW99j/yzr7DH1bw75mcTviwA6M3ykyDn7DbgJNkmPfHdLwQz16Oa4/0eBSY2QyC9mFkLNZ81WgcMkAbc+BxAiusZAzZOAVqwRbo/5L13AxmACyWV0MCV4LcWHckAe/bdbMRkljfcJqp9pAHu8sOsPrHOTG1FwQcwDwcH7OPfRKsxCWiltPMbNz5qrEgC+PREv52wRNWHAOaH+eirfi5TX9UxoJX45Fl3fwDUFUQAP/zg8gQAJIBzfMPeEANxJMmExDxRpLi0WRSbME9UmgSAXiysizQ7lAJI9OLs/qsZQ78PjNHSmJhdBTMS0gCNFt/KFrFqgDTwaKPlPUnNAXIA6ZIfUB5o8BP9E8Ctafg/MHjbjGTrlJRl9r7NYItNLGmZ2dvIcKJ4RuFWib3TwsaF233pgVJ+ZJUfiuXHbvnBXn51KL+cFF9/fgFDwmKbLILO2wAAAABJRU5ErkJggg==) no-repeat center;
				background-size: cover;
				position: absolute;
				right: 0;
				bottom: 0;
			}
		}
		
		.ico-line{
			height: 8px;
			width: 14px;
			margin: 0 auto;
			border-bottom: 2px solid #333;
		}
		
		.ico-star{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAVFBMVEUAAADyYjnwZTjvZDf1ZjfvZDfwZDfvZDfwZjfwZTjvZTjyZTjxZTbvZDf////wcUf70cX2poz73dPxeVL+8+/96+X4uKPyhWH++ff5xLL0mnzzkXCDzYaTAAAADXRSTlMAD8mnI/Po3ZmIYE5HYKUIBwAAASZJREFUOMuVVO2OhCAMZBEVP6iggKu+/3ue57HAqBez88PEZjLTlrYsw0t0kldKVVx24sXu8GqLWkXURXtD63mpACXvzzKNukEDYqJQtyhExuHqH3ARvVAHtT6OmM88Y16hLgXQGv/7w4yjkLUoxX8NW+yPJ/LYr/aS9eSI3HTOXdQQMbTDQKgWrIPA4GiHGyDYMZkIs/EjHRi9mRNRslDbph2d4PQW6mNVSFjTBToUULFopi+caMhKYN1yymCXHNEr2PGs/jFxxqwLnEnoZAD2U0Izl0Ra8mbCs+R2+bPAA79px/vvi8OZRmU6JIw5BKc0KjB0K5E1w16lsURrGjoYX2+XUPiwWB/HFxdh3VTE9lFqvlmp5+V8XvPng/F8er49Ys/n8AfmlTWftMX1+wAAAABJRU5ErkJggg==) no-repeat 0 center;
			background-size: 12px;
			padding-left: 15px;
		}
		
		.flex-box{
			padding: 21px 0;
		}
		.btn-empty{
			width: 44px;
			height: 20px;
			border-radius: 20px;
			
		}
	}
	/* 功能列表 */
	.box-list{
		padding: 0 12px;
		
		li{
			width: 33.333333%;
			text-align: center;
			margin-top: 20px;
			padding: 20px 0;
			
			.icon{
				width: 20px;
				height: 20px;
				margin: 0 auto 10px;
			}
		}
		
		/* 图标 */
		.ico-order{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAnFBMVEUAAAAtlowslow0n5gsl4wql44tl4wqlo0ulo0tmI4pl4sslowumI0slo0sl40slowslow0m5AsmI0vmI4tl44sl4wslo0tlowtlo3///8sloz///////////////+XzMe43Nn///////////9fr6f///////9ns6yy2NV5vbaHw73///91u7T///8tloz///9xuLLy+Pi/39yDwbtvQ8sqAAAALnRSTlMA4/QG0Bt5JKtMEdu1vZ7shv5tWTKPPMVED2M/6xr28/LOuaafZSvt072IfnRO7arC2QAAAlZJREFUWMPtmOlymzAURq2VRUJgFu/NnnS/dtv3f7ciAgZsQSq5M3ESn1/WDJy5XH0XM5pc6EI8HiGIaTEL/4eNI6iJgtN1HFrQ6lSbh6BDvDhRl+HSgmVSzEHjk9M6l2hJFhLCfCgRnruKZWqui1PVMsRVeYrnoVPXVAzP1Bsq9zu8sHnkcJHq2hQ01PtJoYGycsnSLCcvZ1bfVV6Ww555ddcMWni9RolHRmSZxKAJ+3mTAfNWAlrme32chIM2v+lWuX+qlzchcHeNyqsXAKPZCSU0BLq6ESKdSKhRZDBibW+CMR3vTh/OjMGIO80qa42GbdTr5gakqX1Jtzes7I0Ysgk9uaRtJs4NOgoteKXL5T41oFKmL097z35Mv9dV/SEz8Nx4Rvu5GddBOh74sOjl5kUdqICRIbxMgp1OR5cOITDY6sa56N6ubjrFDVP9u4etbvrn5ltQ8+Pm95cs6LGK7HS7X5v1pGa92d4tD99m1Er3sF7vDY9X23ty9D9gpVPt/Z9ut1ePR68Au+ritPEt77bb28NnZco6KO22TvEhr567i+5cdFHCOf96ff3ATRTIThd51UA8PS0nJsgMWekSk8R9ZgtSVfdzPfTxFlnpRK7H9X6z+W72pdhuK3Dk+3K3232W/jGSvq/cXXQn6GJkwFWHU8/EjLrp1MBwBbGTjg8eDZxDdThlJnLqurMYGTib3L1vHXbXCYNOuusigy511yUGHUOuNpybTyocKYhxvIWbzR8458mRS0j48BlbYlkgnic5GTsgy4qICvRPCMlnjEw+Ln8BH44T13EJjZMAAAAASUVORK5CYII=) no-repeat center;
			background-size: 100% auto;
		}
		.ico-coach{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAASFBMVEUAAAAslowqlownk4oslowtl4wslowslowsl40smI4slowrmI0sl4wqlo0sl4wtl40slowtl4wtl40slo0tlo0tlowtl40tloxGAcwAAAAAF3RSTlMA9BoJ52fL3KQwWyRQEr+E1HWOO0exll46vjQAAAHySURBVFjD7ZjZcsMgDEURuxe8O/r/P+1MWyZMbAuL8NTmvGU7NjCSriM+PAnrOAACgHbTPvZSvSNrZguYon1fLmwnwFfAhzKZGgHPGGTRrj3wAtuUrBTwip2/XmnxEmjZug0JHPt4PVKsXN1E6tirBVJnuCeBVXXdf9KpukchLKnrubqRsgG7aHuyyPgNhdJNomrNQlO3Kgbu0EGsuXlrRqfYd1fzLAKt84KJrltkC2UDydV1VHffq85ZXTK35wsf2K0s8WQqok5lPLgeusHPhToJ5Mjm69iNnR+ioBOFGMAjXpXqlD/aNBWe+NN2ecNmgBeM+WULxXu36tOTNeU2ftDmR3e98W0h7U+wGJe8tB3zSLdxgKds35SQ6dPe0DKEcrYakrWZ8Pt2cgV389ExNA/AFFji7zqHKXpsQmaR6zzA1c6rBxza/NJLItPtGvCICz+fnn0G09Kc3pg07nIOqmP3S++xfX2ml60nxj70mXTrfCsT2eIAMaMzSAHTqGLf0EijGzpTpb1GesyhZex9JLqNfyDcSXMWc7hOdNGWTXMesyz0DqeD+s433Z1r4hYzRg4QA+aRcYpnEfbONb8J9obOYZYhnbo0h0hNJLDxhg4wi6EyBl+3xv51Q4c0aWRqdA2dizrpuDr67z+b1334o3wBDmzjZ3s5DxEAAAAASUVORK5CYII=) no-repeat center;
			background-size: 100% auto;
		}
		.ico-coupon{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAgVBMVEUAAAAslo0slowrlo4sl40plYstlo0sl4wtlo0plIsslowtlowslowslowtl4wtl40sl40slo0umI4tloz///89npWKxL9UqaGczchDoZj3+/tMpZ3f7+5/v7lqtK1ksqo2m5Ds9fTn8/LP5+XH4+Gt1tLx+PfW6ui43NiQx8J3u7T2DE4pAAAAE3RSTlMA59koMxGjzmIc7vXGrLuDdVFApqkPJAAAAaNJREFUWMPtl9mOgjAUhtnEFZc5ZYeBERD1/R9wzkidBmyV1F5I0i8BChdf/tNTCDU0Gs30sF0T3sR07X/bHBRgOVTnghJcqjNBCSbVgSK0bkK6OI793gMfn0jryjbL6hIYaZ1lrS+dLiAkyfv35CJfrF8TUrE0cUZIK10sck0IYfEiDBu8asXqWbyKkJ97vBRLzXwQsKG6hQliCozX0MacMVwBAjzboDgeiMECT0VnPlEzj/2MyoQB2fSfy79wDdadApfVwuhxEPuCBOPRcBFwWe+NAfun8Sq8YlOOgnDuzBhigYgcG5rfzoGgVLQNWYCQmpAsbAmpgc/OeGTJXX5piOBaTio88hB5rHftcHSzOW/ejqQPr7nWkqfbyurmo3VlHtyI0NN0w9wfp9uAmBB130AZVezSlNCJW3EAHn5HgborHY9bKFuQbQWsbc4qltfBZuj74s9ceYluNOg5d8OLDy99jgWIRCvYF4q9t/bOBEkdY364F4rR3teBxT5NKnRAdTB13Wf+kGndpHWK92QuKMFTvZ+lOAp2255jaDQazSfzC+U6BmSbxCWYAAAAAElFTkSuQmCC) no-repeat center;
			background-size: 100% auto;
		}
		.ico-community{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAASFBMVEUAAAAtl4wslowtlY0umI0slowsl4wtmIsslo0nlo0tlowtmIwslowpmI0sl40slowtlowslowslowtlowtl4wtl4wslowtlowdtYXKAAAAF3RSTlMAx3q0MO9BTCMMu4LjFF/3o5Tb02xUiq0qU8IAAAGdSURBVFjD7dZbjoQgEEBRURBK5aV21/53OpGYoMFRLJmv8X5260nhg1i9ncdrWVITiHM5rkbEriw3caWhFLckhs4btf4EHB5ygRxdC6CMn4a2yo73XsKOS5PZ2iwQsVGFOCNwqdFFOINrDohcOluoUY+5j8CY0w85ibs8kLm40v18dE4OyVkOyFxrMa2HwDH1+TJhNxxhtiWvAxfeltmtxwjGr2Y71tD6b+BCoD6997VU+nqP/C0WuRhlpWv2LsdHPEvc4/iAp1lxh2tHvMgyyNbUhJeJOlsbMCNh8jQ+YVZizpqNIRI8+nWLnrxcaZytwPXTi0b06FpsaAl34cz7/Dpbh1jCixrJ44cr7ZDYKA9ma5DckHiwaORGvtdU0MREkMI5U7ubzYU9rO/vcw1nQd16bdC+VU3g1qe1gcjJdX8gcZX2FpHpyGm3vH1UroLa2np/L6CicktKVUlULvRyf865ftv4lNtv3t3LvdzLvVwep5VPOcO3seR/xhUcapxZpCTcodcgNXPEMTLXH3EzYsnPTzANo+Ta6u0f9AMthfDyRUk1tgAAAABJRU5ErkJggg==) no-repeat center;
			background-size: 100% auto;
		}
		.ico-mall{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAS1BMVEUAAAAtl4wtl4wslo0ulo8slowol4ksmI4rlo0tlowrl4wtlowtlowtlowtlowtlowtl4wsl40tlowtlowslowtlowtlowtl40tlow1wa3VAAAAGHRSTlMAYO2WSlUMPheGIWzapb+ueTHi0iq2yY5T0TTVAAABxElEQVRYw+2W6W7DIBCE8ZobH/je93/SVo2d4q1oY4OqRPH3Ey0DzI7WZhdvgRXFUbhmMTzgcQYVuxueYo7IcTxFH3muBjxDyyKIHo/TWBZDKn6Ujr0gXZmAYpQaE2gYQQ+YANCGKMAUHJFzmEQt94GrMYnK7q2rMI19bwUmUpKYJAIytA6TEeStiUzkrYnAmKuvNMkckJCUZI8ZGPTW1xYJSUm2gDkwJCaZ5BRSeqRUf5eI2OhsBBJahYRiigbP0HP0TG2m7aqsonfQkVE8azpNW8kEEKMkuZ4JhifNt252PqnPmnIXMkvDX43h9KTx7oCaLBuSMbnsGxEwVvQPRt1bB2ulbuhKcGHPdozlbfvs5GZoDV9ba3V/g7kdOvHNpGI9YRKMIEfhjVM6WOmcMWIMx6zlnzVdUKOVM9tKFK0kOUt1P1YsexA14+xtoC5axFaEF+c1gnlEUK6eVctabf1wM3HY9kvR3Ep+F7TOmwmCnPvCLcMuXKUrfPtdAq3jgkUo8BQ6r9yYV049tRzPKycuuUvu9eX4U8s990Tp8srZ//lW8LxyGs9QsRgLnqBgMeQCeJRSsiiyM00Pj9NPQrKLd+ADS8E1h+XWpp4AAAAASUVORK5CYII=) no-repeat center;
			background-size: 100% auto;
		}
		.ico-medal{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAATlBMVEUAAAAslowjlYUslowslowplIwql4wrl40slowslowtl40tlowslowslowtlo0sl40tl40tl4wtl40tl40slo0tl4wtl4sslo0tlowtloz+QiEBAAAAGXRSTlMA9wfv5g8YI9zHQJvRqmVSW7l5cC6MgzhKRVLo0QAABKlJREFUWMOtWOmaoyAQtAG5FPHAmLz/iy5yZAVbx51v689ohKKPommmeQTC36tSZhCk+TXazY5WO+f00slPAFvFb9msYpRSxqRk8MmAXv/OtA4+KGDm/84mzOcKoF72H2NIVigYmGT08E5lb8b2OdsAeSKbZs3jj27sjmGkA3kYtxWyW29eruMGw742d48MdFNk623m4mLbXHppXQeZz5Af/XTJNDaToN9tnmjyTr02TvY8TYmQjj+QaUOTI263ZOz6Ui+yG7n/fejj63Tv7siSG0sbhEw/J1Bl/woJtjs2naaz9630JuENNMHs7oaNp53Z610r4QWHHEhKP9hruleyTRd7DAPt2iR1KS7zoGI83ll5OL6aa6fgOb/SGwsDB8Q2nE+o/WHa7hJhvBs1G85Hmi0YIN+4SnYStoWHB4ClITMEPodWkf3T7BXSn+cyhuTX5aEKUXOrdo2QpjGIJQNmsWmaJT7NSDEHP230fxHHeu4XO8M2hEVDyan+yjCtweaBX30AbJVmjDqss0tM2jOWIpETYTkkBmkn0TeWVrAhISesjceMfDCEdBgd74MVPDzUkDykSiJfRAwC1SXdAmHDeC0jIVrimAHx9t1oFqNRQOV5r3I4UMamXNYNYxSgCgOXZzoSB3mTD772Zl1GLdqDNIUel9Ucx3hLznRt/OhnHhafW4IfdMvBfK96hC6wUC+Ho6cjTmeP/ooQHmqR2EmfiaJILggfGQth6iAgeJWD5hSId1l0B6Tu0GqfDciRJmiks7XsSW1bJaQx0lFXBs8kZ0+7lZTNS70F32m3DJW3MRXb6ZDZKicq6KRUU6WLBqHwk+5dQXfaMzyVR1UfFFHG7FRMzidxRnRI4XRxk03VeMWLENefp7xCh9BNoVoXMIUCSFd9ntNpBhaROuONq4LdRSeXRTRI0YMtVemeF2ypbNnaHZiDdBVAP4QnqEJBunRI1nSp7M7FBL8A0Sp3QsTHpLQ9hW4ip+KeAu9YQfe25ssAxuryq/bzoqsV9DeipnBW0mK+hCKvhEi8K+PpPCdBqs8Aotj/J2+j9AZ4yLbEpgLWRIFISrpQDp5g4s0S9XBzqdv7LPmEjel0lDOHt8YrpLuCZT9QxXFcRYfau6sY06fOAmfLQZkuu+MZkvEj+4Et9Iq5IOPIFUN5vre6Y1PWsyUP+vbmehe7081XyusGGYwI/XPuK27QpcgQrz8GKBkbfNq+bC9yR6dTbFaxl6UJTmRq8aZZld9+uCObPE3uA/nWsUJrnea7aTSP0s0t7MGOSYcgb7PpJWOyN/O2Z1/MtK6uOOo7AExzZPQkJA0YO1kMsXd0M9Rh77vRJSqu50nSc7d9CYGLF5hUvaRXZeUKZPr8O3pxRbfAL+hgxsnwm8Px2QPbvvzBP4qy5vuvfLtlGAaDEBpUyY5i9xOxyiRfgnpwVY2JQm8hHtyJonErcD568HH49sZvgPacB6MyAG3GMjR2cyyXxfUCA35CfUnWV4a4ofueAfiaua+gaN3EJ1S3QKzHW0nzEGuSEw5OY/f6GO1UGoc0b2xrnsPJT3e7GgRXH2Nh7c3XESRv/gVc3wbD6OZ/4tK2PyhnElpIHrO2AAAAAElFTkSuQmCC) no-repeat center;
			background-size: 100% auto;
		}
		.ico-mall{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAS1BMVEUAAAAtl4wtl4wslo0ulo8slowol4ksmI4rlo0tlowrl4wtlowtlowtlowtlowtlowtl4wsl40tlowtlowslowtlowtlowtl40tlow1wa3VAAAAGHRSTlMAYO2WSlUMPheGIWzapb+ueTHi0iq2yY5T0TTVAAABxElEQVRYw+2W6W7DIBCE8ZobH/je93/SVo2d4q1oY4OqRPH3Ey0DzI7WZhdvgRXFUbhmMTzgcQYVuxueYo7IcTxFH3muBjxDyyKIHo/TWBZDKn6Ujr0gXZmAYpQaE2gYQQ+YANCGKMAUHJFzmEQt94GrMYnK7q2rMI19bwUmUpKYJAIytA6TEeStiUzkrYnAmKuvNMkckJCUZI8ZGPTW1xYJSUm2gDkwJCaZ5BRSeqRUf5eI2OhsBBJahYRiigbP0HP0TG2m7aqsonfQkVE8azpNW8kEEKMkuZ4JhifNt252PqnPmnIXMkvDX43h9KTx7oCaLBuSMbnsGxEwVvQPRt1bB2ulbuhKcGHPdozlbfvs5GZoDV9ba3V/g7kdOvHNpGI9YRKMIEfhjVM6WOmcMWIMx6zlnzVdUKOVM9tKFK0kOUt1P1YsexA14+xtoC5axFaEF+c1gnlEUK6eVctabf1wM3HY9kvR3Ep+F7TOmwmCnPvCLcMuXKUrfPtdAq3jgkUo8BQ6r9yYV049tRzPKycuuUvu9eX4U8s990Tp8srZ//lW8LxyGs9QsRgLnqBgMeQCeJRSsiiyM00Pj9NPQrKLd+ADS8E1h+XWpp4AAAAASUVORK5CYII=) no-repeat center;
			background-size: 100% auto;
		}
		.ico-invite{
			background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAARVBMVEUAAAAtlowsmZEslowslYsplYopl5Aslowsl40slowplo0slowrlo0slo0slowslo0slowtl4wslowslowsl40tl40tloyrmouLAAAAFnRSTlMA3yK/0BYz9HmiC+tNxm1AuJCGmV+tKeZddgAAAUVJREFUWMPtk91yhCAMRgFFfmQBUfP+j1qos4JbShk7vWibc+NInDNfEiQIch9urLRO14vaxaLh3TIt6QwA88PUqm6YRSxSqTttCzxZ+Ifc4SyqvoASAEYVVhqfrwHdIx5SFVR6yh4bEwAr00SzlJJefIZCURSsL9xIDrY0wi2XtjRRSw7Gvng7gC17E+fMpYjdu8LtO3TR4HLne/Jl25D7m3IXLTyAKTY5PGdu02ZYsZX42jc7rwufOvJZcb0a2gOEns2m+0ZefJuZATwnmbzZjnunGD+ZKLxDp3zGVmiHu8YBQTMivleOdt6STCdmhw68mU54JVGDOdJ2X4Vf2KYIhRbqooMm9PipmqAOdaj7xTrWpueTn2X4HJXqa+ODiu47s0Md6lCHOtShDnWo+586cV8nKrpwX7dUdDqIezqxcoL8dd4A9fH9codFBq8AAAAASUVORK5CYII=) no-repeat center;
			background-size: 100% auto;
		}
	}
	/* 分享 */
	.share-box{
		padding: 20px 45px 28px;
		font-size: 14px;
		color: $gray-c;
		text-align: center;
		
		p{
			position: relative;
			margin-bottom: 10px;
			
			&:before,&:after{
				content: "";
				display: block;
				width: 35%;
				height: 1px;
				position: absolute;
				top: 50%;
				background: $gray-c;
			}
			&:before{
				left: 0;
			}
			&:after{
				right: 0;
			}
		}
		
		.icon{
			width: 28px;
			height: 28px;
			
			&.ico-qq{
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABoVBMVEUAAAADAAAAAAADAAAGAQDndxcFAAAEAADILiMDAAACAAADAAACAADxlxMCAAADAADrkxIEAADdVhvxmhUDAADiZhb4pxcEAAD2ohYDAADlhA7jgQ8VExPqkBH5pxj0nxYDAADyoBTihhDS0c/vlRTcNCjukBLtkhPrjhLlgw/dNCi1cBHfNSjeNSjnhxGQXxfeNSdnFxI6DgpmRAlCDwzGLyJvSyYDAAD////cNCf3pBcOCQcXFhbeQzjXjxTv7u64trXrnBibmZlvbm8gHh7unZdQTk7RMSYbDALPzs7JycnskIpfXV3MiBSwdRFdFhF3TwwnDwX54d/a2tqhoKCRj419e3w5NTKQOSGbRSDjkhqWIhrwnhfilxWfaQ4tHgY1IgX29vb42tfU1NXBwMCwsLCpqKiDgoJXVVXgVEsrKirRfxt+HRZwGRORYA1qRQr99PPj4+P1xMBCQEC7LCKvKR+xXR48DQpSNgn86unxsKvqgHikJh3GchyKIBimbxBdPQhDLAb1z8zlbWTBOTDBgRGAVQyroZKCblCFUExqXEYfhZkrAAAAN3RSTlMA3h30EQns0P6RN7Kh8UlbLi0V+IYl5cGabV1KQhr1y3ZQPfPizcG1nHdw6+OgiIRI5NvDlpRqNhCkWgAABFpJREFUWMPtl+dXGkEUxVlgCQhYwW5MTDW9zxYEpAoCYhAsINhQ6fau0fTkr87MsuyiYZnFfMkH7zl65uzoj/vuvtm3KG70r1L295h0Op2pp1n5L5hmA6FRASSVhjC0qK9HUffrEUSUqqv5Oqg2nQZclcrQ1DCnn1CBGiKaG+S0aEBtqVoaS5kAUtI0QmqT5KDq5Oek7gL11CX73t0RcmYtrLAUVkAnt5tvAV7Z1ciKp7wM2FdibIPF3alwXH7KtmkLoGWMWqQoB9uYJcHQGhXxeGJ2FwDTm741x6Jtm9+4pZTViqAiH+V0+dMxWJzTtp72RKlopZlktaVJiHdzcduyMrW+Dr1FPNSqh7JXtkxyQPoqRwHgsjg5Rz7Ktkw5Kjt6OU1EADEjnwVkUUbbNgppXWhKOTcfgsS7FplaDqAqpxDHbhHOibKx4zHtWEmXXVjW/L6prHh0lXIdiZ0trODy2iB2LHUQLhY/hZLF7+cLYyJJo5YRttCPqVIyOM8IGrWGvl+w8sN+9Zp3E7Yyf2n+0wJAMuA55HO6wH1s+G/M6FyCsY6hzXckFtT+gKbP0B9PhhgmMVqFmcvlRhnrAeJMaJ9gQeZnNE3v7iNSEXrInc6NJpCX3N7eHMOEUGVs3ks/M2MjopG8E6i88yCTOJ2dmZmFPzN70E4YQO3v0lBYS0/osk4QarIUmp87hZzZvZw1VEohn3ktt/8cl9J7mpd3dwJGxS6cJ4NWazBZSrHITRxhkB601+c0ac5oQd74xCT697ExFjXnfn6H38CDlF2ALWhpUdrd+Fm+UCjk4yeQIir+pg0/PybjNEZaGKBBzvyYyNTDeE8m0bmtN0p6+IE2/dE9IoUZOf7F8scEPz+c1GFG662FybiXNqL8wZVOqRnwclBLI7R2R+vNjFR7yRxvbaAHJfa9RFcBrVJbKNKdr5+Xto7c7nEo99HW0iHFyV8Zk/gnUZo64lL9ukTV0DLLjxI15tmIHLnLxXysBfLj5m0TIWY0Lg0SxiQhCdJwGcLfzrqgKA7EDSKVyQD7qG5pAUDoeZB02CqdugUANnJ4PCIF2swCvVLPZSTd2Lfg270S1halNj6Pf/ni3qgVEau6o0AkdNekUuK2UG02SkqLTu6NTWkgehQYNRFo1kvJ5+I7sQ0/JE0qsC1pKXA5ZNzjDcQkOA6gkf8tYuDlAmAdNTlpF/t2iJTJuTt4O7gALLViWsmCItPZ3SrLTjcDZT1gLY6rOS2uWlIhtNt5F88hu2+X53zygg34L596Z6oUZDh14j21dopvHhcu57KAicSmwxDDqxsfEDQk6Fv44HfUfu/ePfuPn+HkPCNqkJTpSHy7+vb0Zf+Hp1aOIuoRic+IuSzjMKkge41XrspI2/youriOh31lo4+M1fAXChlq7308eN/Y0dFhvP/wce9A5Wrfi4fwaiLRYRx83CezJckBc+tQX9+QuZ2svtpuHuodHu5tHSAVN7rR/64/Uqjqi2kfX6kAAAAASUVORK5CYII=) no-repeat center;
				background-size: auto 100%; 
			}
			&.ico-wx{
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAQlBMVEUAAABsxEdxzEpux0Zwyklux0hwyklux0hvyUltx0dwyklux0hwyklwyklvyEhvyEhux0hvyElwykluyEhuxkdvyEkrWI5yAAAAFXRSTlMACu8j3kSqF4Uu0WDnuZJ5bZzEUzdx2Z12AAACPUlEQVRYw+2X2bbiIBBFKeY5kMj//2qb3NsgGoboU/fyPGkS9zpVpA6IvvrqnxDs+pShtiBj5NHLwMjbNLU4itNfYeoW8o4ZxtOrOIOLmI3jdCZ8DQUep5awnycRl3pyapJzc6kvzeb86DQSvU1wxJrGomTcZ1mejnGtFixym/skhg0qzyoAEQuWAcCWVzOMQDwbODqqMlcefvNtPSiOZQdWHZ2nlQUoDpehoeqXLNfCoV4JCt2lpwVkDRFMpyyvBPGpiHUrw9Ui6+qr1fTn8hrlXV2QSUO5u9HxtC0Dio3qJzQFUTdF2kjZZpQMIcY7TfFd1MXA4DIIhwPjKa6uruYEFXocs2PkSVKtr64Mbrdn52y6EXbkedLaoAAIlubtVdUg0cwivnN6waLmuk1JrrshXZNI4+GllN323LNUDIHLbefOllfL5fE0taXTpI1QCqMMwU3/MjcEaj3P3+2sAvMQaRzKC+fgcUDlcN4wewgYJ0rAreQx5XUV5NXbUkxvKcsz5nPNjElcpXOXpEW1CBg/fy7trhXsEwgQT211cpzRZ5CbAclGdmdR8aaj3NqyNfkZkDnflbSUfD26hbdBmpdVqyXw3cVCAIEgt82EoJDCY5AWr0FJPRkeUsa9Bi9Vb4OZP+sI6G/C41Z/snlGmD7qNgh5fmcleD+z50VcP7HnJaRt5LW6/A9Fn3GsQJcFQeNXErvM+T2M0Hz24n736NE7OibQLFIGpgSAWGyesg+lOB3UNr8GCn311X+uP3NKlQLV9mw/AAAAAElFTkSuQmCC) no-repeat center;
				background-size: auto 100%; 
			}
			&.ico-wb{
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAxlBMVEUAAAD/MBf/AA3/AA7/AA3/pTn/AAv/AA4AAAD/AA7/AA3/AAz/pzn/AA0AAAD/AA3/AAz/AA0AAAAAAAD/AA3/AA3/AAz/pjr/AA7/AA7/pTj/pTn/AA7/ozj/ozj/AAz/pDj/ozr/pDkAAAAAAAD/pjn/AA7/AA0AAAAAAAD/AA3/pTj/pTn/AA0AAAD/ozkAAAAAAAAAAAD/pjkAAAD/pDkAAAD/pDj/pTsAAAD/pTgAAAD/pDn/pDkAAAD/AA4AAAD/pDmAzvdTAAAAP3RSTlMACt7tI/gZ9fDOdlzuRg6VMMMg14p/T+GnbWmUZVVGPi8YxEc5zLixqVU3HrueeiffzMKunYxiPBC1e21goJLMbOdLAAADgElEQVRYw+2W23qqMBCFCWcQBFRQPNeztmptrVptC77/S20IiQlC1G1v9v4+142HyD8zayaJ3EMP/ccCy1ZjKB2l3n77BH7D2VePSNKw0b4f1TWORJLx3r0X1JaOKVW/7kzqeRg9bVSNE0/6eLqztsZ3vbvstvc9CZEa4Jft274bCanOXZfoNf1CBzBQrSEkGe1rMQtjXlACRZgDlmMvkNTbXcLITS3AsuiFp3rju1Hv7uB7SDJal7JxAiLFppa+k3reYUFbOJ9sv4ElBLR0aq0HQTiPj/jtkDUCHVJVtrZ2r/fSq0rRMC6jT0spZjIGvMAHZ6rRyzsAQLcRbdw9TlDK75suBOdyUQM6haYnctjm9x2u7SvPHl0JMjKj72euI0DnaxBVlxJr6jGozsgnI93UR+R7LSa1jGP1OX5lgEg+tJQ0fU6BvmKPsoPUFIIbxMsRQEpAHzFoe84x+eAmUFRb24Bmg3i/QSItkXCugkC7Hs9RN56jl7OBlJ3gNo3IlmjlbBFQOQ+sjWpzy7JqYy2daoE8tJWyJ1JHSFEsT5QBkiyarkOWABX9w5Be0hYBqjCh5oHsDqzhSK4tU8fK8uynOolYsfPPBLOGAzm6yGExOza22ceLfypfmzF+01TQEFcQpljaTFbl1/LkUMqdWMHMj1VDHB1xBuvXEKm8KOa1lp9dqgxzNhCDpE4oEnWU51lgIn/QWl8NU1pQxdEDnlWSseAln0rlMK0y8ck+uaR0ckBJZQ5K6Cc814FsJI2a8KzQpGUS+hysk1cGiJGRRzmkvn2u1HDAbZLaCIgnpTE9MlHLIlC5XyyWFupisEoaVyQeXTTbozNaRA8O4FC+QUoqI5dcUoA5R+4JhCZnjUGTnMqajMkmXTuE4Q+XzmhKPMDS5PzrVSFzNFXDt1LMOeC5fMMWmQKrZ+ScJZNdWkX9nvana8x57WOn6f86DM1grMqp/6qqhpgzwBxy5I5ljqUCJLkAklYqtWVLyEePcBzcevatP7dhdZtJGY5leT1F/ogVssvmkMMkJTnxPkgOtkF/Oh2UijgMToccWmzNnKSxvghSEYBNY7QOd1WinrSFH7sF0xZlWRRts1kZUTeV48vcLZJ9Df8D4RMJCn3JemxM9taZ80KQI0GrzLi/k2z61kjjFcLgR5bfkbk7FN/Ts4LvWpbrR3bJAHAPPfTQv6A/0zc14eeRrvkAAAAASUVORK5CYII=) no-repeat center;
				background-size: auto 100%; 
			}
			&.ico-pyq{
				background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABNVBMVEUAAADq11znm1hgl9S22WPssVtZWahosM5XWKTMxVtZZ692vV5zy9uzyF1yydnoclhxxtRYWad4v1jp1lyy1GBXWaXt215yydh4wFrncFXo1ltfl89fldB4v1zF1V/nqlmkzl/mwFvrdFlzy9rrsFtxx9ddk9BWV6Tprlp6wVp5wFl5wFp4v1ns2l3rsFvprltfldBdlNDprlvicVmz1WHp0Vvox1rprVpyxtZdkMvncld0u1i11mLrdFi11mLpc1hfltLrdFq112Hncljp11yz1GG01WFxx9ldk85XWKXm1VvdcVxyyNR6wVq32GNgl9LprltXWKVeldHqsFpXWKZxx9jo1lt4v1hxxtez1GDldFfq2F1XWKVWWKV5wFnmcVjpclh4v1lXWKRxx9iy1WFek9DprlrEtPmgAAAAYHRSTlMA/g7w7vLoFk8VIhvyILKOR9qZh2s428+vdHNcTkg9PTEq5OHdhndzbN/WzMCpqZeRg4JrXlxVTjQzIRLZ1cK+q6qfn5eMfGhoYUlGJOrj1cvKwbu5nGhkXE84v52Fc1reF7yrAAADnklEQVRYw+3U51biQBTA8buhBgxVemcBURRQqqCC3VV07W1dl2QD7/8IO5A2qUS/7Tn+H+B37tzMBL766v+J6F00DnfH4/zA++e1R3weiuXHUrv7sdfPWJ1qBnpoGry898NM5m46LWTgNS+X9glwfYTJ1WxT1F0OGkrIdf/bPNUpTLmuSfAqITtzEzLplG1ToTsKBjh0SIQYhvE7TTlbyBGrkr0BDoGTQdl/mHRwCS7yOLTCzCWnuXPh1Qhs4V74zczzL9pTpjBVZNsivBj0xnDdGH874loEcGlfgu4ZvntDqDbVqvy6K0J+RuiH4cFsWpCtfJEXIDsiFh+OyGXa5Vr1WunZOn84KOZipFZgcWSuU96q3V0XCjbUTPJyUAiD7LojxY+CqHg8/vjYarXa7fN2q5XptBFZrWYGc8jJmBiJ+qYuSHBnJrlfSoy7jwvWHdd0xGYLj/H30fid/FIy4RbgxcbjxpvM0V5SLqx00iDvcNy4FyEnQH2oCZ0rnF8UKCIGjRthHie4hpOfDi3oUe4c5UBV78IvOtu3k4llWwsKypx4cxnUueyCk7RMUEkt6AhfTzt91QR1oTnkd8IZclBnoI7YwNZz3rxi06DOaZ87jjrnTErG0AbVtLLWrBY0O1fIdTvh2zSEjsgXK8teUaBuZfZvRGs2A4Xj5DJy2B1tyO9M/JyIlfSXHT4H5KD2SFD35g+V+PXoLhuC/G1G+9GFVkKbE7yk3oXcyHHzoA5SblC1PZQ5lm2dJxIk4YR32ONAVO3cyhydJ5ILx0GYB3USoN9BHrrN8oagWRrIE1ZsOUCvpgBPXDP29XU6lhxrM0DTqxRI1VWOJanjnLAY9BKlaXrd7XBwe3AMLULYivQGwqH0DKIDPo/noXj67PMlEslkMoE6OyuVSpub9Xo9ATplrRJ0lUUQ6ul06e/fJdT3SASRz76uAxZ3IEE71Do9L1VEEh4iPbMZRwZQWhppj+ShtVRRQnDP4zA10h7wEB11FzWhUzCI3BGgAxGiA44HDQgNZFRakI77FVrofeRROZERGLcsXGwMukw5lNL3LogZX6aX/hotVqEU0tIzLIx//1k3BtHRfjeCz3NqwuH/ABSCsAIwikiOD8z1ssNaSfcqjfcE4kyRLpgte7AHCmg1Bb7v83GKIzAfkQUKQXhrbvAtoevThQ/mjl7KpXUkPfjg4/VT71F84ZUUfLq+O/sUqFzSl5XAU9YNX3313/QPGggGIrUMSCUAAAAASUVORK5CYII=) no-repeat center;
				background-size: auto 100%; 
			}
		}
	}
</style>
