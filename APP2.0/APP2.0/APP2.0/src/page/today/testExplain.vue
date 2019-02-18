<template>
	<div>
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- 内容 -->
		<div>
			<div class="fc-f top-box mb-10">
				<img src="../../assets/image/test-bg1.png" width="100%"/>
				<p class="fz30">{{grade}}分</p>
				<p class="fz16">考试成绩</p>
			</div>
			<!-- 列表 -->
			<ul class="table-view mb-10 fz14 bg-f">
				<router-link :to="{path:'/mockExplain',query:{type:type}}" tag="li" class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-simulate"></i>模拟考试 </span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</router-link>
				<router-link class="border-buttom clearfix" :to="{path:'/wrongNum',query:{type:type}}"  tag="li">
					<span class="fl-l"><i class="icon ico-wrong"></i>错题重练 </span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</router-link>
				<router-link :to="{path:'/practice',query:{type:type}}" tag="li" class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-order"></i>顺序练习 </span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</router-link>
				<li class="border-buttom clearfix">
					<span class="fl-l"><i class="icon ico-appointment"></i>考试预约 </span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</li>
				<li class="clearfix" @click="showRule">
					<span class="fl-l"><i class="icon ico-rule"></i>考试规则 </span>
					<span class="fl-r"><i class="right-arrow"></i></span>
				</li>
				<!-- 考试规则 -->
				<div class="rule-box animate" v-show="ruleState ">
					<p class="fz16 title-bg">科目{{type == 1 ? '一' : '四'}}考试说明</p>
					<p class="fz13" v-if="type == 1">参加科目一考试携带身份证原件、考试费发票，预约成功的手机短信，按规定时间去指定地点进行考试，不得迟到；考试合格90分，（当天2次考试机会，如2次考试都未合格，需十天以后重新预约并交补考费80元）；合格学员请到窗口进行签字，一定要签字确认，否则无效。<br/> 考试地点：九堡客运中心内二楼售票大厅右转 <br/> 考试场次：上午第一场8：30-9：30 第二场9：30-10：30 <br/> 下午第一场13：30-14：30 第二场14：30-15：30</p>
					<P class="fz13" v-else >科目四需要网上预约。如当天两次都未过需要十天后重新预约并交纳补考费80元。考试通过以后，当天即可在该考场领取驾驶证。 考试内容：安全文明驾驶（笔试） 考试时间：通过科目一、二、三后 考试地点：河坊街33号、富阳场口考场</p>
				</div>
			</ul>
			<div class="table-view clearfix mb-10 fz14 bg-f" v-show="type == 1">
				<span class="fl-l"><i class="icon ico-phone"></i>咨询考场电话 </span>
				<span class="fl-r"><i class="right-arrow"></i></span>
			</div> 
			<div class="table-view clearfix mb-10 fz14 bg-f"  v-show="type == 1">
				<span class="fl-l"><i class="icon ico-phone"></i>拓叭叭客服热线 </span>
				<span class="fl-r"><i class="right-arrow"></i></span>
			</div>
			<div class="fz11 tip-box"  v-show="type == 1">
				<p>通过科目一考试合格的学员及时拨打Tuobaba客服热线，<br/>学车保姆统一安排学员去驾校办理后续学车手续。</p>
			</div>
			<!-- dialog -->
			<v-dialog></v-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'testExplain',
		data() {
			return {
				type: this.$route.query.type , //科目1科目4区别
				ruleState:false ,
				grade : 0 ,
			};
		},
		mounted(){
			
		},
		created: function(){
			let self = this ;
			self.getGrade();
		},
		methods: {
			//显示规则
			showRule(){
				this.ruleState = !this.ruleState ;
			},
			//获取科目一或者科目四的分数
			getGrade(){
				let self = this ;
				let _type = 'km' + self.type ;
				self.$getData.getGrade(_type).then((res)=>{
					console.log(res)
					if(res.data.code == 1){//请求成功
						self.grade = res.data.grade ;
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

<style lang="scss" scoped>
	.top-box{
		text-align: center;
		height: 70px;
		padding: 17px 0 14px 0;
		position: relative;
		
		p:first-of-type{
			margin-bottom: 10px;
		}
		
		img{
			position: absolute;
			z-index: -1;
			left: 0;
			top: 0;
		}
	}
	.table-view{
		.icon{ 
			width: 20px;
			height: 20px;
			display: inline-block;
			vertical-align: text-top;
			margin-right: 10px;
		}
		.rule-box{
			.title-bg{
				width: 118px;
				margin: 20px 0 10px 0;
			}
			
			p:last-of-type{
				line-height: 1.5;
				padding-bottom: 20px;
			}
		}
		
		
	}
	.tip-box{
		padding: 0 15px 20px;
	}
	
	/* 图标 */
	.ico-simulate{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAATlBMVEUAAAAvmo8tl40tlowsmY8tl44tlo0smI0wmZAtl4wtlo0tlowtmI4smI0sl40tlo0ul44smI0vnZIumZAtmY8ul44sl4wunZIslowtlox6Msb/AAAAGXRSTlMACmrBnSgdNBaq3OjNSHfyV4b36reOPOdgZIenHQAAAqhJREFUSMell+16qyAMgBO+QUBprdb7v9ETrD1WGzf3mB9bW3hJAiEJwAoaK5QMzTQ1QSphDcJJQZt9mDYSfLan+CSbiZFGpl+1Dv1ralA5aYfodMoqvJbrhx+1W9VW0guLW0eEr3yr7DHbza4+NKMA9WN2vjtAXR1uvYEDMb6tSzt+jIZk94Nb2Emawq1uIg2odYBXrmhSNBzbFvz1NEr7TTuyuRFwQkRDlm/9fpBegWdgFKT7sTkjcqX8Hz6SZbzQ5G5lLZ2vWsZ0VkeSlsUVnbcFWL9Jszjfe3Eg5T3HyFUXDO3Uvu3QdQYvTuq3lwQMy+ee9g/PwG9b0dMtWe4gbUAlzsNgCEnzMrJu/Q5GvRG3g+vRymqsbaZG72As4/1TFO5gTVD9lqvHe81PGT8lr/DqdX79EwCnfV5EzCpNIAP+DpOzwYClcMEvOCn/KU/cw0hBaat+BXsY1W0jvdvDoMjb+id/waDFRix8wbkqlfW4/+5zDS0JZLv+FcZvszXtFVBicMew0fOPpU972FHqAYpSZGCNc9YIkegh3O4edzASyMNO3EUN0tsYMrGjMEEzMG+2kDeyM9+V7Xr0YwIdNGM2v2G6lwi2VQ6yH6oRKiKzYfxRdTWz+NGC60WJDtKYuaNigwSjdGCCRyxR9x61jI4LEjY8u1umT2MBcc+o+i5Gy4YnezHUONDcKMuoyPU4egvsxeCuJMrgqle9qjUTtXXIX0k2GaTyml2biqd4Jm2QTQZ8GiJBM4iSK6gNaWbTEJ8A3dCJnEXSa4ViEiCfeofSPYuwHyCbevmkjyiEOZP0+XKDZ8vN+UJnN4WOK7HqZInlirt9qAN5DJvizrYVeKqtuNLQXGqlrjRxV9rHK43rlZb5QrN+5Zlw9YFy/Wl0/VF26Tn4D6E8QOvkHa41AAAAAElFTkSuQmCC) no-repeat center;
		background-size: cover;
	}
	.ico-wrong{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAASFBMVEUAAAA4joM4joQ5j4M4kIQ6koc4kIQ4kIQ6kYc4joM4j4Q4j4M4j4Q5kIQ6j4Q5j4U4j4Q5j4Q5j4Q8kIU4j4Q4j4Q4joM4joNEr5NNAAAAF3RSTlMA9N+CdxdoQgzqpse+WTgxlydMH47PscHwHkQAAALcSURBVEjHnZdZgoMgEETZN0HB9f43nQYdOxGXJPUTIzwaCoSGnMvIpBWPzkWudJKGfCyjhZvosotOTugPedXYfxJ526hnUiq21mbMx1GIMXrG1raYkvcdDp5m0vOQzP4yBb69DuYmrCt1xk5WJd1Yitxl8Db32MbhvHSINve9vTDK5qY1uZR2ufFT4wQFVplbS1SuI07Y3KeePKjPI6vo3GbTkke1Te7f4Z0FNsFDF31zKj+mUjMBbd+iSLb5qCi156KL7fc5YRJZ46AvfSmwQp+rHxe/Ij2M0KGxAf6qdeSRXKqhafMHQoW90/6/KY5O1nJLix31Ep22mnwOE23RcXAgkm9gEsEzHMLwHTz8m2Rg4kZyhOWbEMbQjdkG0B1hxd7EzQHuNpsE3a1DWLzDcYdxgqhYfefkCJvuTebYbcLL7MoJZ/zesLh05HVdTZIkurD0ESx7g386ttBENEyZqeBHGVgcOs+yJ9/DxMNMl5HX8BBCew8XnyMuEYThIftxpxHWdGmhhpMS/RWGc1XBF4emOYNL+HtYhjj7OQZZd1tUhh3UNXQ7aHVl2NNUactYgeH3lW5gqp4WSct8aj2wk5aRdYdFkiweXjVsYh5U8qWOoP6wPGVz92EMDEozDTE1W8Pgh1E+SXEJt/kEA9pAdbYdNPhJlkNCXcIB4BK7sFsY3AyICeHa7T4T05AHAK6tAG5Dq2oYK9EZWA20W/uAG+ATDHY2Mu+HHJ7nfdtIZet9gmF6RLE2/yjKcXkxUh/xzhxCz5PiJRHiwc+mPm5QiVGnVrU7Tbe1Td2wrZx5PejqnGPLHHFXNIJRCigThhyO2Cq24qteSodeCdWvYfFw/0ka04qvhAnNj3Exlar0QxKHybb+Pn3Eo4zO/U2XZ0xcz2AodMOFUw5T5ptk3bUnyXrEZP35mtDiNaGrrgnPF5RmjpyPrrqg3Cr4365GeClr7E+XMrwOivHhOvgH8+M71aG5m0sAAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	.ico-order{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAA4joM8koc5kIU4j4Q4j4M4joM4j4Q4j4M6kIY5j4Q4kIQ6kIQ4joQ4j4Q5j4Q5j4QQetGLAAAAEXRSTlMA/hE3w+3blKgdaUYntoFadXV2FaIAAAJSSURBVEjHpVdZssMgDEvwAoQl3P+0z0BfBwaydPBPOyEKQjbCbNNQFg6NTPtOjPoAq7a3Acnw3gWbBK+gDmmfBKF7QioI+c3K1oH34Cr/HAFu2YOmMkl0tn1sXcQyoG/In2WpBtSMkimLP68o6zyMcEkL87ieUrf503yoG0EOzsTsBItZEr/dhg+Zm51ijXrMhino8SFFwT6iIw2TZK0q9hmdVety1HN+Zt5kDFi0el37SlRjaBPMfnsdnpt0g2hwbD/EIer+Ty00UP0CVijL/OxBEQC2nwIEUncoitL3E3kA31MzQvazYrqd2AVG5PCt+haUHlZ8EDtrrUOEftWp5jzepEWGQwKVX2zRsVSV5Z3ctT0g6hgDBZfRTTE42tlm4dhe2gOZ/L7VO53yJfpWQ55zh5xwvNy9lLaC5YNJXqWmpDEXlpZSu/KN4KoXG9iAQuLGggqufGG+eT77OxZrsijMG2xlLNxnegGzq9TLr3KEvs++aLXRrDaVUPRVbW3zJzRHNVQobVKlfmJoDIU6F6qAPHi5F+AM7IiTYUYktEU5MgKdgUfaKuQn1p26jIBpzbynPQrmCf//nLm026rsBZuk6qj2VutRk1ZXboKTIsHdfDIKxHhxshXcWJ62nKWqWrS58sXCeNwYac+ho0HmNGC6jTFuSaxNRNDpHJXqt+RgBlDaH//Q/1QzGGzovfmmzgDfRwX11vs+gtBdMv2V42bpoFs6YlcO95W2YqWhWWqlVpq49fZxvXFdb5mfm/VQm/WVa8LqBWX9arR+KVu6Dv4Bc1oUW6MHsC8AAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	.ico-appointment{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAAA4j4Q4joM4joM6kIU6kIU9koM4joM5kIQ4joQ4j4Q4j4M4j4Q4joM5joM4kIY5j4U5j4U4joPvVHTJAAAAEnRSTlMAWczzHDcP50vbqpa/t40vfW5qXWgqAAAB0klEQVRIx5yTW7KEMAhEiULeT/e/2Bu4M1VaxtHYn4aTNA3CUBqphejMthkXQyPU8FTUvNsOcr7RI9RGsw1kor0jNSUpXc3iq7JEVlW/mFU+JvrpvgQpW7Iqh88qL3JlKNescoJahJPQCu7UleUsqLq8WvA8tI6eY6kIl8LKUfqRr4WfpZshShEO2YRwI0wDWnvOUsOtdGDnx0LOitmHdD4EyZ71acFxSLPz3UiKG8Sgs+OxjaN1Ze/EnHK2pteMMze7HqnvZD3vBG8qDFV7ut/HEpuegMV4+viTAGZgCdgCK/aHYQ6G/nT8tm9nYfuJuHHHk7B03f4XM8MsDFmWFN22qllYTh0CdfdlHi49KZKWYR4GaTp082/gHlXgKdc3cOVJO1mveVjxbyMrMg/LmkCvoDcw9dMbeKflr/RyRwEQhoIgKhoLQfD+h7XcyBSD7PSBkLy3nxuH5dozF6+dB6OSfFnxYPkqCt3YZsaCr8qQgONcZnYOScZT4XhmMRQuRlZS4UpGDBSKQWTIoAxFABUKYKTXoPRC9IGJfuyGqN3E6IgbHS2W0GJh7sDMnbGCMFY0gQZR6vkRpZoQ18THJrg2kbkI601NaAtKX436UlbVwRdDCi0Z5c5k/wAAAABJRU5ErkJggg==) no-repeat center;
		background-size: cover;
	}
	.ico-rule{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAA4j4Q5kIU5koY4joM4j4Q4joo6j4U4joM4joQ5kIQ4j4Q5joM5j4Q5koU4kYY6j4U4joMcOUU7AAAAEXRSTlMAxjUa5bENR/KbdovaW1InarRTI7EAAAJkSURBVEjHjJRZkgQhCEQRUXGphftfdkKdbtqQmun3ZwXJkmKBSfR4Z9dIhJrLN/oI34IlNFlooeBX0uRIDMil/5QRg3SYXC5nQkxnyY5YOgH/7B7zCHP1vOCD66xupMz4rD1oSJOHDZ+GnA6w8XVK4YEpr97Uhp65+LXekaKeCvXJrb5cL4uLe6UxU/gYH0eQ37V70iKDEJf2NvX4yDWuM7IM+AIlVt6KdK+mVgnyS1pmGaHLHWl3yntFcd2jnvTQM5Jlg5NJ87s9hO9cWU/LKJOin7RWjq8D94iNOPrmV9h6DYzqjLP25qrB5QPsnQgwSMNQk+j3sqvEiTj4nkWDpIUtvDdLT4uLTmyQQmuHPXWZd17BJs5XyMbgdWyVb8Ln839lgLBxcl8eFKHL1N6ky71xUc95P3jts7xB2+8bski2Wg6iGH5OnTNXMzVRGAxK77iJ7H4hdQ3LJFjiU6RBXxHTDncEfVb2moDpRwySPZD6tYMi8lN6GewwCMMwtOrarqWKRP7/Z0FC4IPjU3qdMgpxnp24uNh5Px4wUMVa2aeDnuLa9MEIgLuoD4ZWxSBxn1ZUqyCSsF0OugUikfIs9rQZv7I8MRgCnrgXD4YcydFppGgkJQx+r7rRKIKBxFB1vPIYAkMKgAeEXbsJACr09k/Y1khkqImhP98ub4e5EPRju6lf+HNEBrIbYXTmOPhrNjpYLEsEY8UWq819gWB7CHOnWEHF7T8C6RkHGm7zXLgQBxqOUhC+t4XHBlFKh7i6+lFRyiFOx0c+HB91cOWD4JqJzImwnlkTsgtKfjXKL2WpdfACXVw4jwH3uR8AAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	.ico-phone{
		background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUAAAA6koQ7kIQ4joM4joM4joM5kYU5kIU4joM4joM4j4U5kIQ4joM5j4Q5j4U5j4Q4j4M4joM5kYY4joOePEsyAAAAE3RSTlMACxfJ8tw4ZueXLUenuVRzgowjVHfAMAAAApJJREFUSMelV4uy7RAMbShKq2X7/3+9icMcxL6nMzKzH1UriZUHtqmA0MZKdaR0KGmNFrC9FNDPpVIn6nr0K/zpjwJBq2i9Pvjzb6ueZu7qMhrqkLnUTqP+/9adpVkynKIfF2eQpNO679hbEfQuyAF/E1zdX6Ai0tvnq2vwkO44V30xv6arusQEKxFr4A8+DaKlmGGP80UgD0Jzn6XeXoiWzPOIdjl2jkbbsYsRrvfcXsqJ674bFhVytb0WZE25+gA2JQuvcHy+rpqqQKXR8GqsnlaGsBae5tXniQaqhSTjhMgHq6QQgDMa9UYhewEKGOUI3HGM15n/+JY8CDS/eCWMlTvVomAlhIOQ49amjCvF76uy+0K4//CEPPSP/6FVWcT9FhOhR9pC5gmuLj9MBZscB/s4oLimCCxTLtiESkpwMPFB79IR3Ya2974LFJjGPG81FqyFwiWGwoHlpGElaTJl2vjvmewHSv1KipWjYhjCnXEWh4e6bn0RYSfblsY60ejdhpNhyFscbgaIheDwq/cbUOem0jGWTEIuenWSHBooO5LKn1Y+itZshvo9A5rvwWSVrI9NpecWFAINraUT9IWDRebb9NPsFExu88yj8HQhtXHmNiOsRKsrFundlLASKk54Ct2wTwfwUFGSjKZ9dryz5B7Nk6SkJ8v6VDYQOM9qkadnLYxB7U+G34L2B1m444XRl2TbAAgt84/SHJthpRkwdEyNyNyFeDMobYiL3Rs0TeBtiDXApo026AtmDbBrvXwjrxJh1nqbps/Fyf13zbzpd9sNF2E8wlUQs+2GbXQc7m7jYLrRLW2xK5v7yrFi5UCzdJRaOcStHB9XDq4rR+aFw/rKNWH1grJ+NVq/lC1dB/8BXxs3dj8VGWYAAAAASUVORK5CYII=) no-repeat center;
		background-size: cover;
	}
	
	/*  animation: top ease 500ms; */
	.animate{
		 animation: height 1s ease-out, opacity 1s ease-out;
	}
	@keyframes height {
		0% {
			height: 0;
		}
		100% {
			height: auto;
		}
	}
</style>
