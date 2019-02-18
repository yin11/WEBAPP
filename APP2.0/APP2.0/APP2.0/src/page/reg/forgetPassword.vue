<template>
	<div>
		<!-- 忘记密码 -->
		<!-- 导航栏 -->
		<v-header></v-header>
		<!--  -->
		<div class="main-box  bg-f">
			<!-- 错误提示 -->
			<div class="tip-box fz11 fc-f">号码错误</div>
			<img src="@/assets/image/logo.png" width="62%" class="logo"/>
			<input type="number" pattern="[0-9]" maxlength="11" placeholder="请输入手机号" class="input-box"/>
			<div class="relative code-box">
				<input type="number" pattern="[0-9]" maxlength="6" placeholder="请输入验证码" class="input-box"/>
				<button class="btn-code fc-f">获取验证码</button>
			</div>
			<input type="password" maxlength="16" placeholder="请输入6-20为字符组成新密码" class="input-box" />
			<input type="password" maxlength="16" placeholder="确认密码" class="input-box" />
			<button type="button" class="fc-f btn-solid-big fz14">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'forgetPassword',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/reg.scss';
</style>