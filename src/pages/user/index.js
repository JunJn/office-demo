import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button,Image } from '@tarojs/components'
import './index.less'
import jj from'../../components/JJ'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGoback = () => {
      Taro.navigateBack();
  }

  render () {
    return (
      <View className='index'>
      
     
        <Text>Second page!</Text>
        <Button onClick={this.handleGoback}>go back</Button>
      <jj/>
      </View>
    )
    
  }
}

