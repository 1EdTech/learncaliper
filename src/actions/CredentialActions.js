var alt = require('../alt');

class CredentialActions {

  updateLocalCredentials(credentials) {
    return credentials;
  }

  updateRemoteCredentials(credentials) {
    return credentials;
  }

  updateUsingLocalCredentials(val){
      return val
  }

}

module.exports = alt.createActions(CredentialActions);
