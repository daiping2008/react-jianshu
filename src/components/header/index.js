import React, {Component} from 'react'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper
} from './styled'

class Header extends Component {
  render(){
    return <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavSearchWrapper>
          <NavSearch></NavSearch>
          <i className="iconfont">&#xe64d;</i>
        </NavSearchWrapper>
      </Nav>
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="writting">
          <i className="iconfont">&#xe6a5;</i>
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  }
}

export default Header