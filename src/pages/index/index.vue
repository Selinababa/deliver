<template>
  <view class="index">
		<view class="cover">
			<!-- 第一栏：轮播图 -->
			<!-- <slider ></slider> -->
			<view class="carousel-out" >
			
			</view>
			<!-- 第二栏：公告 -->
			<view class="advertizement">
				<view class="ad-icon">
					<image src="../../image/notification.png"/>
				</view>
				<view class="ad-content">亲~明天国庆放假，暂停营业，假期愉快哦~</view>
			</view>
			<!-- 第三栏：最新订单 -->
			<view class="orders" v-for="order in orderList" :key="order.task_id">
				<view class="order-content">{{order.title}}</view>
				<view class="receive" :orderList="orderList" @click="acceptOrder(order.task_id)">接单</view>
			</view>
			<view class="add-new-order" @click="addNewOrder()">
				<image src="../../image/add.png" />
			</view>
	  </view>
		<!-- 获取用户信息的弹窗 -->
		<view class="getUserInfo" v-show="getInfoFlag == true">
			<view class="fillup"></view>
			<view class="gettingBox">
				<text>授权获取用户头像昵称</text>
				<view class="btns">
					<view @click="refuse">拒绝</view>
					<view @click="aggree">同意</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
import { ref, reactive, toRefs, onMounted, createApp  } from 'vue'
import './index.less'
//导入公共文件中保存用户信息的变量
import _common_ from '../../common/common.js'
import {userInfoPublic} from '../../common/common.js'
import Taro, { useState, useEffect, getUserInfo } from "@tarojs/taro";
// import carousel from '../../components/carousel/carousel'
import indexList from '../../api/indexList.js'

export default {
	name: 'Index',
	
	setup (props, context) {
		
		//获取后端数据的url
		// const BaseUrl = _common_.BaseUrl._value
		// console.log(BaseUrl)
		// const hhh = _common_.hhh.value
		// console.log(hhh)
		//从公共文件获取的订单数据
		let orderList = ref()
		//获取用户信息的提示界面
		let getInfoFlag = ref(true)
		//用户信息存储在变量userInfo中
		let userInfo = ref()
		//获取订单列表
		function getOrderList(){
			indexList.getList().then(res=>{
				console.log(res.data.data)
				orderList.value = res.data.data
			})
		}
		//添加新的订单
		function addNewOrder(){
			Taro.navigateTo({
				url: '../orders/newOrder/newOrder'
			})
		}
		//接单按钮响应
		function acceptOrder(id){
			console.log('接单' + id + '号')
			Taro.navigateTo({
				url: '../orders/acceptOrder/acceptOrder?task_id=' + id
			})
		}
		//获取用户信息
		function userAuthorized(){
			wx.getSetting({
				success: (result)=>{
					// console.log(result)
					if(result.authSetting['scope.userInfo']){
						// console.log('已授权')
						wx.getUserInfo({
							withCredentials: 'false',
							lang: 'zh_CN',
							timeout:10000,
							success:(data)=>{
								console.log('获取用户信息成功',data.userInfo)
								userInfo.value = data.userInfo
								userInfoPublic.value = data.userInfo
								console.log(userInfoPublic.value)
								// console.log(userInfo.value)
							},fail: ()=>{},
							complete: ()=>{}
						})
					}
				},
				fail: (res)=>{
					console.log('获取用户信息失败', res)
				},
				complete: ()=>{}
			});
		}
		// 打开权限设置页提示框
		function showSettingToast(e) {
			wx.showModal({
			title: '提示！',
			confirmText: '去设置',
			showCancel: false,
			content: e,
			success: function(res) {
				if (res.confirm) {
					wx.switchTab({
						url: '../mine/mine',
					})
				}
			}
			})
		}
		//拒绝获取用户信息
		function refuse(){
			showSettingToast('请设置')
		}
		//同意获取用户信息
		function aggree(){
			getInfoFlag.value = false
			userAuthorized()
		}
		onMounted(() => {
			getOrderList()//调用函数需要加（）
		})

		return {
			acceptOrder,
			addNewOrder,
			orderList,
			userInfo,
			getOrderList,
			getInfoFlag,
			userAuthorized,
			showSettingToast,
			refuse,
			aggree,
			userInfoPublic,
			// hhh,
			// BaseUrl
		}
	}
}
</script>
