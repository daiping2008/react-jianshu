import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import { actionCreators }  from './store'

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
  }
  render(){
    let {focused, handleInputBlur, handleInputFocus} = this.props
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
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              onBlur={handleInputBlur}
              onFocus={handleInputFocus} 
              className={focused?'focused':''}></NavSearch>
          </CSSTransition>
          <i className={focused?'focused iconfont':'iconfont'}>&#xe64d;</i>
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

const mapStateToProps = state => {
  return {
    focused:state.header.focused
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleInputFocus(){
      dispatch(actionCreators.searchFocus())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)