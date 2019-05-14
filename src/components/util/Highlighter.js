import React, {Component} from "react"
import * as PropTypes from "prop-types"

export class Highlighter extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // This highlighter library https://github.com/google/code-prettify
        // is included at the global level. When this component gets new code
        // tell it to rerun its highlighter
        PR.prettyPrint()
    }

    render() {
        if(!this.props.code) return "";

        // the highlighter manually adds a "prettyprinted" class to the <pre> tag
        // and react only updates the body of the element by default. So adding
        // a random number on there makes sure the "prettyprinted" class is removed
        // by creating a whole new element each time.
        return <pre className={"prettyprint " + Math.random()}>
            <code className="lang-ruby">{this.props.code}</code>
        </pre>
    }
}

Highlighter.propTypes = {code: PropTypes.string}
