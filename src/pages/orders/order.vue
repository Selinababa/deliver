<template>
  <view class="root">
    <!-- 第一行：发单列表 -->
    <view class="publish">
		<view class="title">
			<view class="title-text">发单列表</view>
			<view class="title-btn" @click="openPost()"><image :src="postFlag ? arrowUp : arrowDown" /></view>
		</view>
		<view :class="[postFlag ? 'stretch' : 'close', 'contents'] " >
			<view class="content" v-for="(item) in postList" :key="item.task_id" >
				<view class="content-name" >{{item.title}}</view>
				<view :class="item.status=='未接单' ? 'state1' : 'state2' " >{{item.status}}</view>
			</view>
		</view>
    </view>
	<!-- 接单列表 -->
	<view class="publish" >
		<view class="title">
			<view class="title-text">接单列表</view>
			<view class="title-btn" @click="openTake()"><image  :src="takeFlag ? arrowUp : arrowDown" /></view>
		</view>
		<view :class="[postFlag ? 'stretch' : 'close', 'contents'] ">
			<view class="content" v-for="item in takeList" :key="item.order_id">
				<view class="content-name">{{item.title}}</view>
				<view :class="item.status=='进行中' ? 'state2' : 'state3' ">{{item.status}}</view>
			</view>
		</view>
    </view>

  </view>
</template>

<script>
import { ref, reactive, onMounted  } from 'vue'
import './order.less'
import orderCenter from '../../api/orderCenter.js'

export default {
	components: {
	},
	setup () {
		//以下四个变量为向后端请求数据时需要发送的参数
		const userId = ref('1')
		const skip = ref('0')
		const limit = ref('10')
		const helperId = ref('1')//快跑手用户id
		//发单和接单列表
		let postList = ref([])
		let takeList = ref([])
		//下拉和收起的箭头
		const arrowDown = require('../../image/arrow-down.png')
		const arrowUp = require('../../image/arrow-up-bold.png')
		//发单列表展开的标签
		let postFlag = ref()
		postFlag.value = false
		//接单列表展开的标签
		let takeFlag = ref()
		takeFlag.value = false
		//获取后端数据函数
		function getOrderLists(userId, skip, limit, helperId){
			orderCenter.getOrderLists(userId, skip, limit, helperId).then(res => {
				postList.value = res.data.data.post_list
				takeList.value = res.data.data.take_list
			})
		}
		//展开、收起发单列表
		function openPost(){
			// console.log(postFlag.value)
			if(postFlag.value == true){
				postFlag.value = false
			}else{
				postFlag.value = true
			}
		}
		//展开、收起接单列表
		function openTake(){
			console.log(takeFlag.value)
			if(takeFlag.value == true){
				takeFlag.value = false
			}else{
				takeFlag.value = true
			}
		}
		onMounted(()=>{
			getOrderLists(userId.value, skip.value, limit.value, helperId.value)
		})
		return {
			userId,
			skip,
			limit,
			helperId,
			postList,
			takeList,
			postFlag,
			takeFlag,
			arrowDown,
			arrowUp,
			openPost,
			openTake,
		}
	}
}
</script>
