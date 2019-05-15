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
        let format = "lang-json"

        if(this.props.format === "ruby"){
            format = "lang-ruby"
        }

        // the highlighter manually adds a "prettyprinted" class to the <pre> tag
        // and react only updates the body of the element by default. So adding
        // a random number on there makes sure the "prettyprinted" class is removed
        // by creating a whole new element each time.
        return <div style={{minWidth: '500px', maxWidth: '700px', maxHeight: '500px', overflow: 'auto', padding: '10px'}}>
            <h3>{this.props.title}</h3>
            <pre className={"prettyprint " + Math.random()}>
                <code className={format}>{this.props.code}</code>
            </pre>
        </div>
    }
}

Highlighter.propTypes = {
    code: PropTypes.string,
    format: PropTypes.oneOf(['json', 'ruby']),
    title: PropTypes.string
}
