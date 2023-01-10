<template>
  <view class="carousel">
    <view class="pic-window" v-for="pic in picList" :key="pic.id">
		<image :src="pic.url" />
    </view>
    <view class="dots">
		<view class="dot" v-for="i in 3" :key="i"></view>
    </view>
  </view>
</template>

<script>
import './carousel.less'
import {ref, reactive} from 'vue'
import Taro from '@tarojs/taro'

export default {
	setup() {
		let picList = ref([
			{
				id: 1,
				url: 'http://browser9.qhimg.com/bdm/0_0_100/t010824ab8b5cdfa138.jpg'
			},{
				id: 2,
				url: 'http://browser9.qhimg.com/bdm/0_0_100/t010824ab8b5cdfa138.jpg'
			},{
				id: 3,
				url: 'http://browser9.qhimg.com/bdm/0_0_100/t01753453b660de14e9.jpg'
			}
		])

		return{
			picList,
		}
	},
}
</script>