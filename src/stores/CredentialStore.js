var alt = require('../alt');
var CredentialActions = require('../actions/CredentialActions')
var Fetchy = require("../util/Fetchy");


class CredentialStore {
    constructor() {
        this.localCredentials = {endpointUrl: Fetchy.receiveApiUrl(), apiToken: Fetchy.sessionId()};
        this.remoteCredentials = CredentialStore.getRemoteCredsFromCookie();
        this.usingLocalCredentials = true;

        this.bindActions(CredentialActions);
    }

    static getRemoteCredsFromCookie(){
        let url = Fetchy.getCookie("credurl")
        let token = Fetchy.getCookie("credtoken")
        return {endpointUrl: url, apiToken: token};
    }

    static setRemoteCredsToCookie(creds){
        if(creds.endpointUrl && creds.apiToken){
            Fetchy.setCookie("credurl", creds.endpointUrl, 0.5)
            Fetchy.setCookie("credtoken", creds.apiToken, 0.5)
        } else {
            Fetchy.setCookie("credurl", '')
            Fetchy.setCookie("credtoken", '')
        }
    }

    static getCurrentCredentials() {
        let state = this.getState();
        if (state.usingLocalCredentials) {
            return state.localCredentials;
        } else {
            return state.remoteCredentials;
        }
    }

    static getLocalCredentials() {
        return this.getState().localCredentials;
    }

    onUpdateLocalCredentials(credentials) {
        this.localCredentials = credentials;
    }

    onUpdateRemoteCredentials(credentials) {
        this.remoteCredentials = credentials;
        CredentialStore.setRemoteCredsToCookie(credentials);
    }

    onUpdateUsingLocalCredentials(val) {
        this.usingLocalCredentials = val;
    }
}

module.exports = alt.createStore(CredentialStore, 'CredentialStore');
