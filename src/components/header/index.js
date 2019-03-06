import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'

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
  constructor(props) {
    super(props)
    this.state = {
      focused:false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
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
          <CSSTransition
            in={this.state.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              onBlur={this.handleInputBlur}
              onFocus={this.handleInputFocus} 
              className={this.state.focused?'focused':''}></NavSearch>
          </CSSTransition>
          <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe64d;</i>
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

  handleInputFocus() {
    this.setState({
      focused:true
    })
  }
  handleInputBlur(){
    this.setState({
      focused:false
    })
  }
}

export default Header