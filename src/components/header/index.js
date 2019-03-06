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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  NavSearchWrapper
} from './styled'

class Header extends Component {

  getListArea() {
    let {focused, mouseIn, handleMouseEnter, handleMouseLeave} = this.props
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoItem>打球</SearchInfoItem>
            <SearchInfoItem>打球</SearchInfoItem>
            <SearchInfoItem>打球</SearchInfoItem>
            <SearchInfoItem>打球</SearchInfoItem>
            <SearchInfoItem>打球</SearchInfoItem>
            <SearchInfoItem>打球</SearchInfoItem>
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
    
  }

  constructor(props) {
    super(props)
    this.state = {
      focused:false
    }
  }
  render(){
    let {focused, mouseIn, handleInputBlur, handleInputFocus} = this.props
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
              className={(focused||mouseIn)?'focused':''}></NavSearch>
          </CSSTransition>
          <i className={(focused||mouseIn)?'focused iconfont':'iconfont'}>&#xe64d;</i>
          {
            this.getListArea()
          }
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
    focused:state.get('header').get('focused'),
    mouseIn:state.get('header').get('mouseIn')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleInputFocus(){
      dispatch(actionCreators.searchFocus())
    },
    handleMouseEnter() {
      dispatch(actionCreators.handleMouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.handleMouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)