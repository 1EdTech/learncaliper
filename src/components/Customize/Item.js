import React, {Component} from "react"
import * as PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField/index"

export class Item extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        
        return <div>
            <form onSubmit={this.handleSubmit}>

                    <TextField
                            name="id"
                            label="Quiz Item ID"
                            value={this.props.item.id}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Quiz Item's ID (integer)"
                            variant="outlined"
                            type="number"
                    />
                    <TextField
                            name="name"
                            label="Quiz Item Name"
                            value={this.props.item.name}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Quiz Item's name"
                            variant="outlined"
                    />

            </form>
        </div>
    }
}

Item.propTypes = {
    onChange: PropTypes.func,
    user: PropTypes.object
}
