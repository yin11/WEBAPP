import Vue from 'vue'
import Router from 'vue-router'



const error = r => require.ensure([], () => r(require('@/components/error')), 'error')
const orderState = r => require.ensure([], () => r(require('@/components/orderState')), 'orderState')
const notOpen = r => require.ensure([], () => r(require('@/components/notOpen')), 'notOpen')



const login = r => require.ensure([], () => r(require('@/page/reg/login')), 'login')
const reg = r => require.ensure([], () => r(require('@/page/reg/reg')), 'reg')
const forgetPassword = r => require.ensure([], () => r(require('@/page/reg/forgetPassword')), 'forgetPassword')

const index = r => require.ensure([], () => r(require('@/page/index/index')), 'index')
const mustLearn = r => require.ensure([], () => r(require('@/page/index/mustLearn')), 'mustLearn')
const freeStudy = r => require.ensure([], () => r(require('@/page/index/freeStudy')), 'freeStudy')
const secondClass = r => require.ensure([], () => r(require('@/page/index/secondClass')), 'secondClass')
const procedure = r => require.ensure([], () => r(require('@/page/index/procedure')), 'procedure')
const notes = r => require.ensure([], () => r(require('@/page/index/notes')), 'notes')
const subscribe = r => require.ensure([], () => r(require('@/page/index/subscribe')), 'subscribe')


const enrollList = r => require.ensure([], () => r(require('@/page/enroll/enrollList')), 'enrollList')
const enrollDetails = r => require.ensure([], () => r(require('@/page/enroll/enrollDetails')), 'enrollDetails')
const confirmOrder = r => require.ensure([], () => r(require('@/page/enroll/confirmOrder')), 'confirmOrder')
const carMap = r => require.ensure([], () => r(require('@/page/enroll/map')), 'carMap')
const activeCoupons = r => require.ensure([], () => r(require('@/page/enroll/activeCoupons')), 'activeCoupons')



const person = r => require.ensure([], () => r(require('@/page/person/person')), 'person')
const personal = r => require.ensure([], () => r(require('@/page/person/personal')), 'personal')
const signIn = r => require.ensure([], () => r(require('@/page/person/signIn')), 'signIn')
const coupons = r => require.ensure([], () => r(require('@/page/person/coupons')), 'coupons')
const community = r => require.ensure([], () => r(require('@/page/person/community/community')), 'community')
const communityDetail = r => require.ensure([], () => r(require('@/page/person/community/communityDetail')), 'communityDetail')

const newsCenter = r => require.ensure([], () => r(require('@/page/person/newsCenter/newsCenter')), 'newsCenter')
const newsComments = r => require.ensure([], () => r(require('@/page/person/newsCenter/newsComments')), 'newsComments')


const today = r => require.ensure([], () => r(require('@/page/today/today')), 'today')
const testExplain = r => require.ensure([], () => r(require('@/page/today/testExplain')), 'testExplain')
const practice = r => require.ensure([], () => r(require('@/page/today/practice')), 'practice')
const mock = r => require.ensure([], () => r(require('@/page/today/mock')), 'mock')
const mockExplain = r => require.ensure([], () => r(require('@/page/today/mockExplain')), 'mockExplain')
const achievement = r => require.ensure([], () => r(require('@/page/today/achievement')), 'achievement')
const wrongNum = r => require.ensure([], () => r(require('@/page/today/wrongNum')), 'wrongNum')
const muststudy = r => require.ensure([], () => r(require('@/page/today/muststudy')), 'muststudy')
const progressDetail = r => require.ensure([], () => r(require('@/page/today/progressDetail')), 'progressDetail')


const bespoke = r => require.ensure([], () => r(require('@/page/bespoke/bespoke')), 'bespoke')
const bespokeTime = r => require.ensure([], () => r(require('@/page/bespoke/bespokeTime')), 'bespokeTime')
const bespokeOrder = r => require.ensure([], () => r(require('@/page/bespoke/bespokeOrder')), 'bespokeOrder')


const signUpOrderList = r => require.ensure([], () => r(require('@/page/order/signUpOrderList')), 'signUpOrderList')
const bespokeOrderList = r => require.ensure([], () => r(require('@/page/order/bespokeOrderList')), 'bespokeOrderList')
const signUpOrderDetail = r => require.ensure([], () => r(require('@/page/order/signUpOrderDetail')), 'signUpOrderDetail')
const bespokeOrderDetail = r => require.ensure([], () => r(require('@/page/order/bespokeOrderDetail')), 'bespokeOrderDetail')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
			meta :{
      	title : '首页' ,
				index: 1 ,
      }
    },
		{
			path: '/mustLearn',
			name: 'mustLearn',
			component: mustLearn,
			meta :{
				title : '必学课程',
				index: 2 ,
			}
		},
		{
			path: '/freeStudy',
			name: 'freeStudy',
			component: freeStudy,
			meta :{
				title : '免费试学' ,
				index: 2 ,
			}
		},
		{
			path: '/secondClass',
			name: 'secondClass',
			component: secondClass,
			meta :{
				title : '第二课堂' ,
				index: 2 ,
			}
		},
		{
			path: '/procedure',
			name: 'procedure',
			component: procedure,
			meta :{
				title : '学车流程' ,
				index: 2 ,
			}
		},
		{
			path: '/subscribe',
			name: 'subscribe',
			component: subscribe,
			meta :{
				title : '考试必约' ,
				index: 2 ,
			}
		},
		{
			path: '/notes',
			name: 'notes',
			component: notes,
			meta :{
				title : '学车须知' ,
				index: 2 ,
			}
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta :{
				title : '登录'
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: reg,
			meta :{
				title : '注册'
			}
		},
		{
			path: '/forgetPassword',
			name: 'forgetPassword',
			component: forgetPassword,
			meta :{
				title : '忘记密码'
			}
		},
		{
			path: '/enrollList',
			name: 'enrollList',
			component: enrollList,
			meta :{
				title : '我要报名' ,
				index: 1 ,
			}
		},
		{
			path: '/activeCoupons',
			name: 'activeCoupons',
			component: activeCoupons,
			meta :{
				title : '活动详情' ,
				index: 2 ,
			}
		},
		{
			path: '/enrollDetails',
			name: 'enrollDetails',
			component: enrollDetails,
			meta :{
				title : '报名活动详情' ,
				index: 3 ,
			}
		},
		{
			path: '/carMap',
			name: 'carMap',
			component: carMap,
			meta :{
				title : '练车地址' ,
				index: 4 ,
			}
		},
		{
			path: '/confirmOrder',
			name: 'confirmOrder',
			component: confirmOrder,
			meta :{
				title : '确认订单' ,
				index: 4 ,
			}
		},
		{
			path: '/orderState',
			name: 'orderState',
			component: orderState,
			meta :{
				title : '确认订单' ,
				index: 5 ,
			}
		},
		{
			path: '/person',
			name: 'person',
			component: person,
			meta :{
				title : '关于我们' ,
				index: 1 ,
			}
		},
		{
			path: '/personal',
			name: 'personal',
			component: personal,
			meta :{
				title : '个人资料' ,
				index: 2 ,
			}
		},
		{
			path: '/newsCenter',
			name: 'newsCenter',
			component: newsCenter,
			meta :{
				title : '消息通知' ,
				index: 3 ,
			}
		},
		{
			path: '/newsComments',
			name: 'newsComments',
			component: newsComments,
			meta :{
				title : '点赞' ,
				index: 3 ,
			}
		},
		{
			path: '/signIn',
			name: 'signIn',
			component: signIn,
			meta :{
				title : '签到' ,
				index: 3 ,
			}
		},
		{
			path: '/coupons',
			name: 'coupons',
			component: coupons,
			meta :{
				title : '优惠券' ,
				index: 3 ,
			}
		},
		{
			path: '/today',
			name: 'today',
			component: today,
			meta :{
				title : '今日学习' ,
				index: 1 ,
			}
		},
		{
			path: '/testExplain',
			name: 'testExplain',
			component: testExplain,
			meta :{
				title : '科目说明' ,
				index: 2 ,
			}
		},
		{
			path: '/practice',
			name: 'practice',
			component: practice,
			meta :{
				title : '练习' ,
				index: 3 ,
			}
		},
		{
			path: '/wrongNum',
			name: 'wrongNum',
			component: wrongNum,
			meta :{
				title : '错题练习'
			}
		},
		{
			path: '/mockExplain',
			name: 'mockExplain',
			component: mockExplain,
			meta :{
				title : '模拟考试说明'
			}
		},
		{
			path: '/mock',
			name: 'mock',
			component: mock,
			meta :{
				title : '模拟考试'
			}
		},
		{
			path: '/achievement',
			name: 'achievement',
			component: achievement,
			meta :{
				title : '考试成绩'
			}
		},
		{
			path: '/muststudy',
			name: 'muststudy',
			component: muststudy,
			meta :{
				title : '入门必学课程'
			}
		},
		{
			path: '/progressDetail',
			name: 'progressDetail',
			component: progressDetail,
			meta :{
				title : '滑档'
			}
		},
		{
			path: '/bespoke',
			name: 'bespoke',
			component: bespoke,
			meta :{
				title : '智能预约' ,
				index:1 ,
			}
		},
		{
			path: '/bespokeTime',
			name: 'bespokeTime',
			component: bespokeTime,
			meta :{
				title : '预约时间' ,
				index:2 ,
			}
		},
		{
			path: '/bespokeOrder',
			name: 'bespokeOrder',
			component: bespokeOrder,
			meta :{
				title : '预约时间' ,
				index:3 ,
			}
		},
		{
			path: '/signUpOrderList',
			name: 'signUpOrderList',
			component: signUpOrderList,
			meta :{
				title : '报名订单' ,
				index:3 ,
			}
		},
		{
			path: '/bespokeOrderList',
			name: 'bespokeOrderList',
			component: bespokeOrderList,
			meta :{
				title : '预约报名订单' ,
				index:3 ,
			}
		},
		{
			path: '/signUpOrderDetail',
			name: 'signUpOrderDetail',
			component: signUpOrderDetail,
			meta :{
				title : '报名订单详情' ,
				index:3 ,
			}
		},
		{
			path: '/bespokeOrderDetail',
			name: 'bespokeOrderDetail',
			component: bespokeOrderDetail,
			meta :{
				title : '预约订单详情' ,
				index:3 ,
			}
		},
		{
			path: '/community',
			name: 'community',
			component: community,
			meta :{
				title : '社区' ,
				index:2 ,
			}
		},
		{
			path: '/communityDetail',
			name: 'communityDetail',
			component: community,
			meta :{
				title : '社区动态详情' ,
				index:3 ,
			}
		},
		{
			path: '*',
			name: 'error',
			component: Error,
			meta :{
				title : 'error' ,
				index: 1 ,
			}
		},
		{
			path: '/notOpen',
			name: 'notOpen',
			component: notOpen,
			meta :{
				//title : 'notOpen' ,
				index: 3,
			}
		},
  ]
})
