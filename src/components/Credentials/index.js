import React, {Component} from "react"
import CredentialStore from "../../stores/CredentialStore"
import CredentialActions from "../../actions/CredentialActions"
import AppBar from "@material-ui/core/AppBar/index"
import Tabs from "@material-ui/core/Tabs/index"
import Tab from "@material-ui/core/Tab/index"
import * as PropTypes from "prop-types"
import {Local} from "./Local"
import {Remote} from "./Remote"

class Credentials extends Component {
    constructor(props) {
        super(props);
        this.state = CredentialStore.getState();

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleRemoteChange = this.handleRemoteChange.bind(this);
        this.tabs = this.tabs.bind(this);
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

    handleTabChange(event) {
        CredentialActions.updateUsingLocalCredentials(!this.state.usingLocalCredentials)
        event.preventDefault();
    }

    handleRemoteChange(event) {
        let newCreds = Object.assign({}, this.state.remoteCredentials)
        newCreds[event.target.id] = event.target.value;

        CredentialActions.updateRemoteCredentials(newCreds)
    }

    render() {
        let contents = this.props.onlyLocal ? <Local creds={this.state.localCredentials}/> : this.tabs()
        return <div>
            <h2>Server Configuration</h2>
            {contents}
        </div>
    }

    tabs() {
        let tab = this.state.usingLocalCredentials ? 0 : 1;
        return <div>
            <AppBar position="static">
                <Tabs value={tab} onChange={this.handleTabChange}>
                    <Tab label="Use Local Server"/>
                    <Tab label="User Remote Server"/>
                </Tabs>
            </AppBar>
            {this.state.usingLocalCredentials && <Local creds={this.state.localCredentials}/>}
            {!this.state.usingLocalCredentials && <Remote creds={this.state.remoteCredentials} onChange={this.handleRemoteChange} />}
        </div>

    }
}

Credentials.propTypes = {onlyLocal: PropTypes.bool}

export default Credentials;
