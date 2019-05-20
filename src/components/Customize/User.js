import React, {Component} from "react"
import * as PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField/index"

export class User extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        return <div>
            <form onSubmit={this.handleSubmit}>

                    <TextField
                            name="id"
                            label="User ID"
                            value={this.props.user.id}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The User's ID (integer)"
                            variant="outlined"
                            type="number"
                    />
                    <TextField
                            name="name"
                            label="User Name"
                            value={this.props.user.name}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The User's first name"
                            variant="outlined"
                    />

            </form>
        </div>
    }
}

User.propTypes = {
    onChange: PropTypes.func,
    user: PropTypes.object
}
