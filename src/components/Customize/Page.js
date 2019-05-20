import React, {Component} from "react"
import * as PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField/index"

export class Page extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        
        return <div>
            <form onSubmit={this.handleSubmit}>

                    <TextField
                            name="id"
                            label="Page ID"
                            value={this.props.page.id}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Page's ID (integer)"
                            variant="outlined"
                            type="number"
                    />
                    <TextField
                            name="name"
                            label="Page Name"
                            value={this.props.page.name}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Page's name"
                            variant="outlined"
                    />

            </form>
        </div>
    }
}

Page.propTypes = {
    onChange: PropTypes.func,
    user: PropTypes.object
}
