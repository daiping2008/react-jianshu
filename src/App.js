import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import {GlobalStyle} from './styled'
import {IconFont} from './statics/iconfont/iconfont'

import Home from './pages/home'
import Detail from './pages/detail'

import Header from './components/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle/>
          <IconFont/>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home} ></Route>
              <Route path="/detail" exact component={Detail} ></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
