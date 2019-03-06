import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  position:relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:58px;
  background-image:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:16px;
  color:#333;
  cursor:pointer;
  &.left {
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active {
    color:#ea6f5a;
  }
`
export const NavSearchWrapper = styled.div`
  float:left;
  position:relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius:50%;
    line-height:30px;
    text-align:center;
    &.focused {
      background:#777;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  &.slide-enter{
    width:160px;
    transition:all .2s ease-out
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    width:240px;
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
  width:160px;
  height:38px;
  padding:0 20px;
  box-sizing:border-box;
  margin-top:9px;
  margin-left:20px;
  border:none;
  outline:none;
  color:#777;
  border-radius:19px;
  background-color:#eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div`
  float:right;
  border:1px solid #ec6149;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  cursor:pointer;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background-color:#ec6149;
  }
`