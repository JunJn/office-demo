import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import jj from '../../components/JJ'
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
      <View>
      <Text className='hello'>Hello world!</Text>

      <view class="className">
      <Text className='hello'>简陋的微信小程序</Text>  
  </view>

  <View>
    <Button className="tubiao">on.1</Button>
    <Button className="tubiao">on.2</Button>
    <Button className="tubiao">on.3</Button>
    <Button className="tubiao">on.4</Button>
    <Button className="tubiao">on.5</Button>
    <Button className="tubiao">on.6</Button>
    <Button className="tubiao">on.7</Button>
    <Button className="tubiao">on.8</Button>
  </View>
    <Button onClick={this.goUser} style=" margin-top:30px;">Click me</Button>
 
    <jj />
    
    </View>
    )
    
     
  }
}

