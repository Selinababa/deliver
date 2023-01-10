<template>
    <view class="root" >
        <!-- 第一行：悬赏金额 -->
        <view class="payment">
            <view class="title-img"><image src="../../../image/money_bag.png" /></view>
            <view class="title-text">悬赏金额：￥{{order.pay}}</view>
        </view>
        <!-- 第二行：订单内容 -->
        <view class="order-content">
            <view class="title">悬赏内容：</view>
            <view class="media-content" v-for="item in order.media" :key="item.media_id">
                <view class="content-detail" v-if="item.media_type == 'text'">{{item.media_content}}</view>
                <view class="pic" v-else>
                    <image :src="item.media_content"  />
                </view>
            </view>
        </view>
        <!-- 第三行：预期完成时间 -->
        <view class="deadline">
            <view class="title">期望完成时间：{{order.target_time}}前</view>
        </view>
        <!-- 第四行：联系方式 -->
        <view class="contract">
            <view class="title">联系方式：{{order.tel}}</view>
        </view>
        <!-- 第五行：接单按钮 -->
        <view class="accept-btn" @click="acceptOder()">接单</view>
    </view>
</template>
<script>
import './acceptOrder.less'
import {ref, reactive, onMounted} from 'vue'
import _common_ from '../../../common/common.js'
import orderDetail from '../../../api/orderDetail.js'
import Taro, {Current} from '@tarojs/taro'

export default {
    setup() {
        //变量id用于获取从上一个页面传递过来的订单id值
        const id = ref()
        id.value = Current.router.params.task_id
        
        let order = ref()
        console.log(order) //proxy对象
        console.log(order.value) //undefined
        //定义本地的订单对象，
         order = ref({
            pay: 12,
            "orderContent": "",
        })
        //接单按钮响应函数
        function acceptOder(){
            console.log('接下了')
            //tabBar页面之能用switchTab
            Taro.switchTab({
                url: '../../index/index'
            })
        }
        //获取订单详情：
        function getOrder(id){
            orderDetail.getOrderDetail(id).then(res =>{
                order.value = res.data.data
                console.log(order.value)
            })
        }
        onMounted(()=>{
            getOrder(id.value)
        })
        return{
            id,
            order,
            acceptOder,
            getOrder,
        }
    }
}
</script>