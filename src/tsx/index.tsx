import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'react-hot-loader'
import store from './stores'
import GlobalStyle from './style/GlobalStyle'
// page
import Top from './views/pages/top/Top'
import { TagList } from './views/pages/TagList'
// components
import Header from './views/components/block/Header'

const app = document.getElementById('app')

// react-router-domでページ遷移
ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/list/white" exact render={() => <TagList clrType="white" />} />
          <Route path="/list/blue" exact render={() => <TagList clrType="blue" />} />
          <Route path="/list/green" exact render={() => <TagList clrType="green" />} />
          <Route path="/list/red" exact render={() => <TagList clrType="red" />} />
          <Route path="/list/yellow" exact render={() => <TagList clrType="yellow" />} />
        </Switch>
      </Router>
    </>
  </Provider>,
  app,
)

if (module.hot) {
  module.hot.accept()
}
