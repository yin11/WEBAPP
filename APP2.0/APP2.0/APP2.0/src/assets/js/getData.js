/*
 * 请求接口合集
 * */

import fetch from './fetch'
import webIp from '@/assets/js/comm'



/*免费试学获取验证码*/
export const postFreeMess = (data) => fetch({
	url: '/webIp/app_freestudycode/',
	method: 'post',
	data: data
});

/*免费试学申请提交*/
export const postFree = (data) => fetch({
	url: '/webIp/app_freeStudy/',
	method: 'post',
	params: data
});


/* 获取我要报名的轮播图 */
export const getAppBanner = (data) => fetch({
	url: '/webIp/app_banner/',
	method: 'get',
	params: data
});

/* 获取我要报名的列表信息 */
export const getAppCourse = (data) => fetch({
	url: '/webIp/app_course/',
	method: 'get',
	params: data
});

/* 获取我要报名的活动的活动详情  */
export const getAppActive = (data) => fetch({
	url: '/webIp/app_active/'+data + "/",
	method: 'get',
	//params: data
});

/* 获取对应活动下的优惠券列表 (游客身份进入) */
export const getActiveCouponsList1 = (data) => fetch({
	url: '/webIp/app_couponlsit/',
	method: 'get',
	params: data
});

/* 获取对应活动下的优惠券列表 (用户身份进入) */
export const getActiveCouponsList2 = (data) => fetch({
	url: '/webIp/operation/couponinuser/',
	method: 'get',
	params: data
});

/* 获取活动详情 */
export const getActiveDetail = (data) => fetch({
	url: '/webIp/app_course/'+data + "/",
	method: 'get',
	//params: data
});

/* 获取个人信息 */
export const getUserInfo = () => fetch({
	url: '/webIp/app_users/123/?id=',
	method: 'get',
	//data: data
});

/* 修改个人信息 */
export const postUserInfo = (data) => fetch({
	url: '/webIp/app_users/123/',
	method: 'post',
	data: data
});


/* 修改个人头像 */
export const postUserImg = (data) => fetch({
	url: '/webIp/users/app_upImage/',
	method: 'post',
	params: data
});

/* 获取消息通知总数 */
export const getMsgCount = (data) => fetch({
	url: '/webIp/user/msgcount/',
	method: 'get',
	params: data
});


/* 获取科目一或者科目四的分数  , type : km1  /km4   */
export const getGrade = (type) => fetch({
	url: '/webIp/exam/get_grade/' + type,
	method: 'get',
	//params: data
});


/* 获取科目一模拟考试习题 */
export const getExamTest1 = (data) => fetch({
	url: '/webIp/exam/exam_test/km1',
	method: 'get',
	params: data
});
