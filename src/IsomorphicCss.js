import React, { Component, Children} from 'react'
const PropTypes = require('prop-types');

class IsomorphicCss extends Component {
    constructor(props, context) {
        super(props, context)
        this.pushCss = this.pushCss.bind(this)
    }
    getChildContext() {
        return {
            pushCss: this.pushCss
        }
    }
    pushCss(css) {
        const {cssArray} = this.props
        if (cssArray.indexOf(css) == -1)
            cssArray.push(css)
    }
    render() {
        return Children.only(this.props.children)
    }
}
IsomorphicCss.contextTypes = {
    cssArray: React.PropTypes.array
}
IsomorphicCss.childContextTypes = {
    pushCss: PropTypes.funcs
}
export default IsomorphicCss
