import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8081/Manager';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  // _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
  if(!res.data.status == 200){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});

export default {
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(
        url,
        {
          params : params
        })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        });
    });
  },
  getMethod: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(
        url,
        {
          params: params
        })
        .then( response => {
          resolve(response.data)
        })
        .catch( error =>{
          reject(error)
        });
    });
  }
}
