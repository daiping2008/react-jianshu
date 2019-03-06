import {createGlobalStyle} from 'styled-components'

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1544274740532'); /* IE9*/
    src: url('./iconfont.eot?t=1544274740532#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1544274740532') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544274740532#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`