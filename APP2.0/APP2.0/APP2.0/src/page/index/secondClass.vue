<template>
	<div>
		<!-- 第二课堂 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!-- main -->
		<img width="100%"  src="@/assets/image/banner5.png"/>
		<div class="main-box bg-f">
			<!-- 软文推送 -->
			<div class="border-buttom">
				<i class="secondClass-titleIcon">荐</i>
				<div class="secondClass-titleText">小K推荐
					<div class="secondClass-titleTextp">|
						<ul class="" >
								<li><a >222</a></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 视频 -->
			<div class="">
				<video ></video>
			</div>
			<!--  -->
			<div class="hilite-box">
				<img src="@/assets/image/hilitecolor.png">
				<span class="fz16">课程规划</span>
				<img src="@/assets/image/hilitecolor.png">
			</div>
			<div class="border-box fz14">
				<p>安全素质教育第二课堂分为素养课与技能课两种类型，学生学完所有课程并表现优异者将获得学校颁发的安全素质“先进青年”证书。安全素质“先进青年”证书鼓励和赞誉在安全素养学习中先进、模范的学生，他们有深刻、正确的安全理念与科学的思考方法，通过系统课程的学习有完备的知识体系和处理问题的能力，更是在学习和生活中全面发展，争当先进。安全素质“先进青年”荣誉证书既是对学生的鼓励，也是个人荣誉证明，未来也将是学生走向社会走向企业时对于个人素质考量的不可缺少的一部分。</p>
				<p>安全素质教育课程共安排8节课。素养课5节，分为交通安全案例分析、驾考市场解读、安全知识竞答、驾驶压力的疏导和驾驶技能的提升；技能课3节，交通事故体验、基础驾驶技能培训、安全主题表达。希望通过素养课与技能课相结合的方式，让学生学以致用，学用相长，全面推动学生安全素质的提升。</p>
			</div>
			<div class="hilite-box">
				<img src="@/assets/image/hilitecolor.png">
				<span class="fz16">课程预览</span>
				<img src="@/assets/image/hilitecolor.png">
			</div>
			<ul class="secondClass-list">
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/1@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第一课</p>
						<p class="fc-9 fz12 ">谁来守护大学生的交通安全？</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/2@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第二课</p>
						<p class="fc-9 fz12 ">安全校园，安心校园</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/3@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第三课</p>
						<p class="fc-9 fz12 ">大学生安全意识的培养</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/4@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第四课</p>
						<p class="fc-9 fz12 ">安全技能提升—安全驾驶</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/5@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第五课</p>
						<p class="fc-9 fz12 ">感受一场“真实”的交通事故——真车模拟VR体验交通事故</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/6@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第六课</p>
						<p class="fc-9 fz12 ">“预见”危险——解析最权威的防御性驾驶技术</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/7@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第七课</p>
						<p class="fc-9 fz12 ">驾驶员更害怕还是行人更害怕？——带你走进驾驶员的内心世界</p>
					</div>
				</li>
				<li class="secondClass-lists">
					<div class=""> <img src="@/assets/image/8@3x.png" width="100%"> </div> 
					<div class=" fz14">
						<p class="">第八课</p>
						<p class="fc-9 fz12 ">关于安全素质我想说什么？</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"secondClass",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped" lang="scss">
	@import '../../assets/scss/index.scss';
	.main-box{
		.secondClass-list {
			display: flex;
			justify-content: space-between;
			flex-flow: wrap;
			
			.secondClass-lists {
				width:160px;
				margin-bottom: 20px;
			}
		}
	}
</style>
