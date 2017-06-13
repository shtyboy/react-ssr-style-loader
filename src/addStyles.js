import React from 'react';
export default (styles) => (WrappedComponent) => {
  class AddStyles extends React.Component {
    render() {
      if (this.context.pushCss) this.context.pushCss(styles);
      return <WrappedComponent {...this.props} />;
    }
  }
  AddStyles.contextTypes = {
    pushCss: React.PropTypes.func,
  };
  return AddStyles;
};
