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
        PR.prettyPrint();
    }

    componentDidMount(){
        PR.prettyPrint();
    }

    styles(){
        return {
            div: {
                minWidth: this.props.minWidth || '500px',
                maxWidth: this.props.maxWidth || '700px',
                maxHeight: this.props.maxHeight || '500px',
                overflow: 'auto',
                padding: '10px'
            }
        }
    }

    render() {
        const styles = this.styles();
        let code = this.props.code;
        if(this.props.json){
            code = JSON.stringify(this.props.json, null, 2)
        }
        if(!code) return "";

        let format = "lang-json"
        if(this.props.format === "ruby"){
            format = "lang-ruby"
        }
        let title = this.props.title ? <h3>{this.props.title}</h3> : ""

        // the highlighter manually adds a "prettyprinted" class to the <pre> tag
        // and react only updates the body of the element by default. So adding
        // a random number on there makes sure the "prettyprinted" class is removed
        // by creating a whole new element each time.
        return <div style={styles.div}>
            {title}
            <pre className={"prettyprint " + Math.random()}>
                <code className={format}>{code}</code>
            </pre>
        </div>
    }
}

Highlighter.propTypes = {
    code: PropTypes.string,
    json: PropTypes.object,
    format: PropTypes.oneOf(['json', 'ruby']),
    title: PropTypes.string
}
