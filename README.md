## Usage

```
  npm install -S ssr-style-loader
```

- ## server
  ```
  // server
  import { IsomorphicCss } from 'ssr-style-loader';
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
  import { addStyles } from 'ssr-style-loader';

  class App extends Component {
    render() {
      return <div className={locals.App} />
    }
  }

  export default addStyles(styles)(App);
  ```
