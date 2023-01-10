import common from '../common/common.js'
import Taro from '@tarojs/taro'

function getOrderDetail(task_id){
    return Taro.request({
        url: common.BaseUrl.value + '/task_info', 
        data: {
            'task_id': task_id
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
    })
}

export default{
    getOrderDetail,
}