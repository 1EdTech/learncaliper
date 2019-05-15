var alt = require('../alt');
var CredentialActions = require('../actions/CredentialActions')

class CredentialStore {
    constructor() {
        this.localCredentials = {endpointUrl: "", apiToken: ""};
        this.remoteCredentials = {endpointUrl: "", apiToken: ""};
        this.usingLocalCredentials = true;

        this.bindActions(CredentialActions);
    }

    static getCurrentCredentials(){
        let state = this.getState();
        if(state.usingLocalCredentials){
            return state.localCredentials;
        } else {
            return state.remoteCredentials;
        }
    }

    onUpdateLocalCredentials(credentials) {
        this.localCredentials = credentials;
    }

    onUpdateRemoteCredentials(credentials) {
        this.remoteCredentials = credentials;
    }

    onUpdateUsingLocalCredentials(val){
        this.usingLocalCredentials = val;
    }
}

module.exports = alt.createStore(CredentialStore, 'CredentialStore');
