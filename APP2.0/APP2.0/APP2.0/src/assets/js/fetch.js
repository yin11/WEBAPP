import axios from 'axios'; 
import store from '../../store/index.js'

console.log(store.state)

// 创建axios实例
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  headers: {
		'Access-Control-Allow-Origin': '*',
		 'content-type' : 'application/x-www-form-urlencoded',
  	 "Authorization": "jwt " + store.state.token
  },
  timeout: 30000, // 请求超时时间
});


// request拦截器
service.interceptors.request.use(config => {
	//config.headers['Content-Type'] = 'application/x-www-form-urlencoded' ;
	if(config.method == "get"){
		console.log("get")
	}if(config.method == "post"){
		console.log("post")
		config.headers['method'] = "post" ;
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded' ;
		console.log(config);
	}
  //console.log("这里是请求拦截器")
//   if (window.localStorage.getItem("token")) {
    // config.headers['Authorization'] = window.localStorage.getItem("token"); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
//   }
  //console.log(config);
  return config;
}, error => {
  Promise.reject(error);
	console.log(error)
})

// 添加一个响应拦截器
service.interceptors.response.use(function (response) {
    // Do something with response data
		console.log(response);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


export default service; 


