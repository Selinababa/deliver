import common from '../common/common.js'
import Taro from '@tarojs/taro'

function getList(){
    return Taro.request({
        url: common.BaseUrl.value + '/task_list', 
        data: {
            'skip': 0,
            'limit': 10
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
    })
}

export default {
    getList,
}