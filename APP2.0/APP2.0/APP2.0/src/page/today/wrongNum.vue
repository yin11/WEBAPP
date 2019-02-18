<template>
	<div>
		<!-- 错题的总数 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<div class="main-box ">
			<div class="bg-f mb-10 wrong-box">
				<p>错题数</p>
				<p>33</p>
			</div>
			<div class="bg-f relative table-view fz14">
				<input type="checkbox" checked id="clear"/>
				<label class="clearfix" for="clear">
					<span class="fl-l ico-clear">答对自动清除错题数</span>
					<i class="icon ico-go fl-r"></i>
				</label>
			</div>
			<router-link to="/practice" class="btn-solid-big fc-f" tag="button">开始重练</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:"wrongNum",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.wrong-box{
		padding: 40px 0 60px;
		text-align: center;
		background:#fff url(../../assets/image/wrong-bg.png) no-repeat center;
		background-size: 144px auto;
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
	.btn-solid-big{
		position: fixed;
		bottom: 45px;
		width: 80%;
		left: 10%;
	}
</style>
