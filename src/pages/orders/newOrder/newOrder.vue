<template>
    <view class="root">
        <view class="content">
            <!-- 第一行：标题title -->
            <view class="title">
                <view class="title-img"><image src="../../../image/money_bag.png" /></view>
                <view class="title-text">任务信息</view>
            </view>
            <!-- 第二行：任务名称 -->
            <view class="order order-name">
                <view class="left">标题：</view>
                <view class="right"><input type="text" name="" id="orderName" v-model="orderName"></view>
            </view>
            <!-- 第三行：任务内容，可填写文字也可以上传图片 -->
            <view class=" order-content">
                <view class="order">
                    <view class="left">详细信息：</view>
                    <view class="right"><input type="text" name="" id="detailInfo" v-model="detailInfo"></view>
                </view>
                <view class="detail-btn"><image src="../../../image/add.png" /></view>
            </view>
            <!-- 第四行：任务截止时间 -->
            <view class="order deadline">
                <view class="left">期望完成时间：</view>
                <view class="right">
                    <nut-datepicker 
                        v-model="currentDate" 
                        type="time" 
                        :min-date="minDate" 
                        :max-date="maxDate" 
                        :is-use12-hours="true" 
                        @confirm="confirm" 
                        v-model:visible="show">
                    </nut-datepicker>
                </view>
            </view>
            <!-- 第五行：联系方式 -->
            <view class="order contract">
                <view class="left">联系方式：</view>
                <view class="right"><input type="number" name="" id="contract" v-model="contract" @blur="inputWatch"></view>
            </view>
            <view class=" order alert" v-show="isAlert"><image src="../../../image/warning-filling.png"/>请正确输入手机号码</view>
            <!-- 第六行：任务悬赏金额 -->
            <view class="order payment">
                <view class="left">悬赏金额：￥</view>
                <view class="right"><input type="number" name="" id="payment" v-on="inputWatch" v-model="payment"></view>
            </view>
        </view>
        <!-- 底部栏：显示发布订单需支付金额，以及提交按钮 -->
        <view class="bottom">
            <view class="total-amount">合计：￥ {{payment}}</view>
            <view class="submit-btn">
                <button type="submit" @click="submitOrder()">提交订单</button>
            </view>
        </view>
    </view>
</template>

<script>
import './newOrder.less'
import { ref, reactive, defineComponent, createApp  } from 'vue'
import { DatePicker } from '@nutui/nutui-taro'

export default ({
    components(){
        DatePicker
    },
    setup() {
        // const app = createApp();
        // app.use(DatePicker);
        let orderName = ref()
        let detailInfo = ref()
        let finishTime = ref()
        let contract = ref()
        let payment = ref()
        //从时间选择器获取的值
        let timePicked = ref()
        //提示手机号码输入错误的标志
        let isAlert = ref(false)
        // console.log(timePicked.value)
        //日期选择器
        let minDate = new Date(2020, 0, 1)
        let maxDate = new Date(2025, 10, 1)
        let currentDate = ref()
        const desc = ref('2020年-1月-1日-0时-0分');
        const show = ref(false)
        function submitOrder() {
            console.log('submit')
        }
        let reg = ref(/^[0-9]+.?[0-9]*$/)
        let len = ref()
        //对手机号码输入框监控
        function inputWatch(){
            len.value = contract.value.toString().length
            if(len.value != 11){
                console.log(len.value)
                isAlert.value = true
                console.log('请输入11位号码')
            }else{
                if(!reg.value.test(contract.value)){
                    isAlert.value = true
                    console.log('请输入正确的号码')
                }else{
                    isAlert.value = false
                }
            }
        }
        
        return{
            orderName,
            detailInfo,
            finishTime,
            contract,
            payment,
            timePicked,
            submitOrder,
            isAlert,
            reg,
            inputWatch,
            minDate,
            maxDate,
            currentDate,
            show,
            desc,
            open: (index) => {
                show.value = true;
            },
            confirm: (res) => {
                desc.value = val.join('-');
            }
        }
    },
    
})
</script>