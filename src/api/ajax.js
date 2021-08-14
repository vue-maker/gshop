

/* 
  ajax请求函数模块:返回值为promise对象（异步返回的数据是：response.data）
  ajax请求的三个条件：1. url 2.请求参数（为对象） 3. 请求方式（默认GET）
  

*/

import axios from "axios"
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      //准备url query参数
      let dataStr = ''//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key + '&']
      })
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then((response) => {
      resolve(response.data)
    }).catch(error =>{
      reject(error)
    })
  })
}