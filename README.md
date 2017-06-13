## Usage

- ## server
  ```
  // server
  import { IsomorphicCss } from 'react-ssr-critical-styles';
  ...
  const cssArray = []
  const content = renderToString(
    <Provider store={store}>
      <IsomorphicCss cssArray={cssArray}>
        <RouterContext {...renderProps}/>
      </IsomorphicCss>
    </Provider>
  )
  const appCss = cssArray.join('')
  ...

  ```
- ## client
  ```
  import React, { Component } from 'react'
  import styles from 'app.css';
  import { addStyles } from 'react-ssr-critical-styles';

  class App extends Component {
    render() {
      return <div className={locals.App} />
    }
  }

  export default addStyles(styles)(App);
  ```
