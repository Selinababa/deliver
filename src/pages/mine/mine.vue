<template>
    <view class="root">
        <!-- 第一栏：头像、用户名 -->
        <view class="userInfo">
            <view class="user-pic">
                <image :src="userInfo.avatarUrl" alt="" />
            </view>
            <view class="user-name">{{userInfo.nickName}}</view>
        </view>
        <!-- 第二栏：信用分 -->
        <view class="credit">
            <view class="left-icon">
                <image src="../../image/score.png" alt="" />
            </view>
            <view class="right">信用分：{{score}}分</view>
        </view>
        <!-- 第三栏：用户余额 -->
        <view class="balance">
            <view class="left-icon">
                <image src="../../image/wallet.png" alt="" />
            </view>
            <view class="right">现有金额：{{balance}}元</view>
        </view>
        <!-- 第四栏：注册快跑手入口 -->
        <view class="register">
            <view class="left-icon">
                <image src="../../image/vip.png" alt="" />
            </view>
            <view class="right" @click="register()">注册成为校园快跑手</view>
        </view>
        <!-- 第五栏：联系客服 -->
        <view class="contractUs">
            <view class="left-icon">
                <image src="../../image/contact.png" alt="" />
            </view>
            <view class="right" @click="naviToOfficial()">联系客服</view>
        </view>
    </view>
</template>
<script>
import Taro from '@tarojs/taro'
import { ref, createApp, inject } from 'vue'
import {getCurrentInstance} from "vue";
import {userInfoPublic} from '../../common/common.js'

export default {
    setup() {
        //获取index页面的数据
        const userInfo = userInfoPublic.value
        console.log(userInfo)
        let userimg = require('../../image/userdefault.jpg') 
        const username = '韭菜饺子'
        const score = 100
        const balance = 155
        function register(){
            Taro.navigateTo({
                url: './register/register'
            })
        }
        function naviToOfficial(){
            
        }
        return{
           userInfo,
            userimg,
            username,
            score,
            balance,
            register,
            naviToOfficial,
        }
    },
}
</script>
<style lang="less"  >
@import './mine.less';
</style>
