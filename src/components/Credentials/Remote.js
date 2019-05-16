import React, {Component} from "react"
import * as PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField/index"

export class Remote extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>

                    <TextField
                            id="endpointUrl"
                            label="Server URL"
                            value={this.props.creds.endpointUrl}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The URL to send Caliper events to."
                            variant="outlined"
                            fullWidth

                    />
                    <TextField
                            id="apiToken"
                            label="API Token"
                            value={this.props.creds.apiToken}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The value for the Authorization Bearer token."
                            variant="outlined"
                            fullWidth
                    />

            </form>
        </div>
    }
}

Remote.propTypes = {
    onChange: PropTypes.func,
    creds: PropTypes.object
}
