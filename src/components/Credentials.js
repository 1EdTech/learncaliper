import React, {Component} from "react"
import CredentialActions from "../actions/CredentialActions"
import CredentialStore from "../stores/CredentialStore"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

export class Credentials extends Component {
    constructor(props) {
        super(props);
        this.state = CredentialStore.getState();

        this.handleChange = this.handleChange.bind(this);
        this.onStoreUpdate = this.onStoreUpdate.bind(this);
    }

    componentDidMount() {
        CredentialStore.listen(this.onStoreUpdate);
    }

    componentWillUnmount() {
        CredentialStore.unlisten(this.onStoreUpdate);
    }

    onStoreUpdate(state) {
        this.setState(state);
    }

    handleChange(event) {
        let newCreds = Object.assign({}, this.state.localCredentials)
        newCreds[event.target.id] = event.target.value;

        CredentialActions.updateLocalCredentials(newCreds)
        // this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        console.log("Submitted");
        event.preventDefault();
    }

    render() {
        return <div>
            <h4>Endpoint Configuration</h4>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3}>

                        <Grid item xs={8} sm={6}><TextField
                                id="endpointUrl"
                                label="Endpoint URL"
                                value={this.state.localCredentials.endpointUrl}
                                onChange={this.handleChange}
                                margin="normal"
                                helperText="The URL to send Caliper events to."
                                variant="outlined"
                                fullWidth
                                
                        /></Grid>
                        <Grid item xs={8} sm={6}><TextField
                                id="apiToken"
                                label="API Token"
                                value={this.state.localCredentials.apiToken}
                                onChange={this.handleChange}
                                margin="normal"
                                helperText="The value for the Authorization Bearer token."
                                variant="outlined"
                                fullWidth
                        /></Grid>

                    </Grid>
                </form>
            </div>
        </div>
    }
}
