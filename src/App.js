import React, { Component } from 'react';
import {GlobalStyle} from './styled'
import {IconFont} from './statics/iconfont/iconfont'

import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <IconFont/>
        <Header/>
      </div>
    );
  }
}

export default App;
