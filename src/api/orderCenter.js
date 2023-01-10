import common from '../common/common.js'
import Taro from '@tarojs/taro'

function getOrderLists(userId, skip, limit, helperId){
    return Taro.request({
        url: common.BaseUrl.value + '/order_center', 
        data: {
            'user_id': userId,
            'skip': skip,
            'limit': limit,
            'helper_id': helperId
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
    })
}

export default {
    getOrderLists,
}