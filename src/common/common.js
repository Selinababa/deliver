// 公共状态文件：替代VUEX
import { reactive, ref } from 'vue';
import Taro, { useState, useEffect } from "@tarojs/taro";
/**
 * @name: 全局状态显示
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-23 
 */
export const common = reactive({ 
    // 测试全局状态
    global: 0,
    // 自定义loading组件
    loading:true,
    // 回到顶部是否显示
    topShow:false,
    // 聊天抽屉是否显示
    drawerShow:false,
    // 搜索字符串
    search:'',
    // 菜单显示标识（is_menu,is_search,is_login）
    menuSign:'is_menu',
    // 当前网页url
    currentUrl:'',
});

//获取后端数据url
const BaseUrl = ref('https://dev.mozigu.net/school_helper/api')
let hhh = ref('hhhhhhaaaaaa')

//从首页获取的用户授权信息
let userInfoPublic = ref()
export {userInfoPublic}

export default{
    BaseUrl,
    hhh
}