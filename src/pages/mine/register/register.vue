<template>
    <view class="root">
        <!-- 第一行：真实姓名 -->
        <view class="real-name">
            <view class="title">真实姓名：</view>
            <view class="name-input">
                <input type="text" name="realName" id="realName" v-model="realName">
            </view>
        </view>
        <!-- 第二行：上传证件照片 -->
        <view class="upload-pic">
            <view class="title">请上传学生证：</view>
            <view class="upload-btn" @click="choosePic">
                <image src="../../../image/add.png" />
            </view>
        </view>
        <!-- 第三行：联系方式 -->
        <view class="contract">
            <view class="title">联系电话：</view>
            <view class="contract-input">
                <input type="number" name="contract" id="contract" v-model="contract">
            </view>
        </view>
        <!-- 第四行：上传按钮 -->
        <view class="submit">
            <view class="submit-btn" @click="submit">提交审核</view>
        </view>
    </view>
</template>
<script>
import './register.less'
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import {ref, reactive} from 'vue'
export default {
    setup() {
        let realName = ref()
        let contract = ref()
        let tempFilePaths = ref()
        function choosePic(){
            Taro.chooseImage({
                count: 9,   //允许选择的照片数量,默认为9
                sizeType: ['original', 'compressed'],  //可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera','user','environment'],   
                //可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
                success:function(res) {
                    //  返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    tempFilePaths.value = res.tempFilePaths;
                    //  参数:
                    res.tempFilePaths  //图片的本地临时文件路径列表
                    res.tempFiles  //图片的本地临时文件列表
                    res.errMsg //调用结果
                    console.log(res.tempFilePaths)
                }
            }) 
        }
        //提交审核按钮响应函数
        function submit(){
            Taro.switchTab({
                url: '../mine'
            })
        }
        return{
            realName,
            contract,
            tempFilePaths,
            choosePic,
            submit,
        }
    },
}
</script>