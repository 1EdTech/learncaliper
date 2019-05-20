import React, {Component} from "react"
import * as PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField/index"

export class Quiz extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        
        return <div>
            <form onSubmit={this.handleSubmit}>

                    <TextField
                            name="id"
                            label="Quiz ID"
                            value={this.props.quiz.id}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Quiz's ID (integer)"
                            variant="outlined"
                            type="number"
                    />
                    <TextField
                            name="name"
                            label="Quiz Name"
                            value={this.props.quiz.name}
                            onChange={this.props.onChange}
                            margin="normal"
                            helperText="The Quiz's name"
                            variant="outlined"
                    />

            </form>
        </div>
    }
}

Quiz.propTypes = {
    onChange: PropTypes.func,
    user: PropTypes.object
}
