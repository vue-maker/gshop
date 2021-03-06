/* 
  包含n个接口请求函数的模块
  函数返回值为promise对象
*/
//使用拦截配置拦截ajax请求
import ajax from "./ajax";
//const BASE_URL = 'HTTP://localhost:4000'
const BASE_URL = '/api';
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE_URL + "/index_category")
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', { longitude, latitude })
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', { geohash, keyword })
//#region
//图形验证码不需要ajax请求
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
//export const reqAddress = () => ajax()
//#endregion
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsCode = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE_URL + '/logout')

//使用mockjs拦截ajax请求
//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
