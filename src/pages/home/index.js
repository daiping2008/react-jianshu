import React, {Component} from 'react'

import List from './components/list'
import Recommend from './components/recommend'
import Topic from './components/topic'
import Writer from './components/writer'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './styled.js'

class Home extends Component {
  render(){
    return <HomeWrapper>
      <HomeLeft>
        <img 
          className='banner-img' 
          alt='' 
          src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
    </HomeWrapper>
  }
}

export default Home