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
    let {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = page*10; i < (page+1)*10; i++) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={icon=> this.spinIcon=icon} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>  
          <div>{ pageList }</div>
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
    let { focused, mouseIn, list, handleInputBlur, handleInputFocus } = this.props
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
              onFocus={() => handleInputFocus(list)} 
              className={(focused||mouseIn)?'focused':''}></NavSearch>
          </CSSTransition>
          <i className={(focused||mouseIn)?'focused iconfont zoom':'iconfont zoom'}>&#xe64d;</i>
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
    focused: state.get('header').get('focused'),
    mouseIn: state.get('header').get('mouseIn'),
    list: state.get('header').get('list'),
    totalPage: state.get('header').get('totalPage'),
    page: state.get('header').get('page')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleInputFocus(list){
      dispatch(actionCreators.searchFocus())
      list.size===0&&dispatch(actionCreators.getList())
    },
    handleMouseEnter() {
      dispatch(actionCreators.handleMouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.handleMouseLeave())
    },
    handleChangePage(page, totalPage, spinIcon){
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
      spinIcon.style.transform = `rotate(${originAngle+360}deg)`
      if (page < totalPage-1) {
        dispatch(actionCreators.changePage(page+1))
      } else {
        dispatch(actionCreators.changePage(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)