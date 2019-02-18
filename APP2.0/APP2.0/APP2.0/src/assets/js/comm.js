//本地ip
//const webIp = "http://test.XXX.cn:5020"; //本地xxd
//const webIp = "http://test.XXX.cn:6020"; //本地mkf
//const webIp = "http://XXX";   //线上

const alertMsg = (e) => {
	alert(e)
	//console.log(e)
}

const isNVL = (str, dest) => {
	return str || dest;
}

/**
 * 表单校验
 */
const rule = {
	empty: function(str, mess) { //不能为空
		if(str == '') {
			mess == '' ? '' : toast(mess);
			return false
		} else {
			return true
		}
	},
	phone: function(str) { //手机号校验
		let myReg = /^(1)[0-9]{10}$/;
		if(!myReg.test(str)) {
			toast('手机号码有误')
			return false
		} else {
			return true
		}
	},
	testLength: function(str, len) { //验证是否达到指定的最小长度
		if(str.length < len) {
			toast('输入的内容长度小于' + len)
			return false
		} else {
			return true
		}
	},
	name: function(str) { //中文姓名
		var myReg = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/;
		if(!myReg.test(str)) {
			toast('请输入正确的姓名')
			return false
		} else {
			return true
		}
	},
	testSum:function(str){ // 验证带小数且不超过两位小数的数值
		let myReg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
		if(!myReg.test(str)) {
			toast('只能输入数值，且小数不超过两位')
			return false
		} else {
			return true
		}
	}
}

/**
 * toast提示语
 */
const toast = (msg = '', time = 2000) => {
    var toast = document.createElement('div')
    toast.className = 'common-toast common-toast-show'
    toast.innerHTML = msg
    document.body.appendChild(toast)
    toast.style.display = 'block'
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
    var timer = setTimeout(() => {
      toast.className = 'common-toast common-toast-hide'
      clearTimeout(timer)
      var timer2 = setTimeout(() => {
        document.body.removeChild(toast)
        clearTimeout(timer2)
      }, 200)
    }, time)
}


/**
 * 存储localStorage
 */
const setStore = (name, content) => {
	if(!name) return;
	if(typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
const getStore = name => {
	if(!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
const removeStore = name => {
	if(!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 获取地址栏参数
 */
const getUrlKey = (name) => {
	return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}


//更换状态,str   ，name替换的内容 ,seat 
const replaceNext = (str, name, seat) => {
	try {
		str = str.split('');
		str.splice(seat, 1, name);
		str = str.join('');
		return str;
	} catch(e) {
		alertMsg(e);
	}
}


export {
	webIp , alertMsg , isNVL , toast ,  rule , setStore , getStore , removeStore , replaceNext , getUrlKey
} 