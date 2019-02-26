import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }



  goUser = () => {
    Taro.navigateTo({
      url: '/pages/user/index'
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='bot'>
        <Text className='ale'>请在24小时内接诊，超时患者可取消订单</Text>
        <View className='but'>
        
          <Button className='but_1'>退诊</Button>
          <Button className='but_2'>接诊</Button>
        </View>
      </View>
      </View>
      
    )
  }
}

