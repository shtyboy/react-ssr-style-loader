import React from 'react';
export default (styles) => (WrappedComponent) => {
  return class extends React.Component {
    static contextTypes = {
      pushCss: React.PropTypes.func,
    };
    render() {
      if (this.context.pushCss) this.context.pushCss(styles);
      return <WrappedComponent {...this.props} />;
    }
  }
};
