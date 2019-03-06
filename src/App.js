import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from './styled'
import {IconFont} from './statics/iconfont/iconfont'

import Header from './components/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle/>
          <IconFont/>
          <Header/>
        </div>
      </Provider>
    );
  }
}

export default App;
