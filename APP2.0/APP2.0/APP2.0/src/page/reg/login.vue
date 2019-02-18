<template>
	<div>
		<!-- 登录 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div class="main-box  bg-f">
			<!-- 错误提示 -->
			<div class="tip-box fz11 fc-f">号码错误</div>
			<img src="@/assets/image/logo.png" width="62%" class="logo"/>
			<input type="number" pattern="[0-9]" maxlength="11" placeholder="请输入手机号" class="input-box"/>
			<input type="password" maxlength="16" placeholder="请输入密码" class="input-box" />
			<button type="button" class="fc-f btn-solid-big fz14">登录</button>
			<p class="clearfix fz11 fc-orange">
				<router-link to="/forgetPassword" tag="span" class="fl-l">忘记密码？</router-link>
				<router-link to="/reg" tag="span" class="fl-r">注册</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/reg.scss';
</style>
