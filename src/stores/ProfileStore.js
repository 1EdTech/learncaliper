var alt = require('../alt');
var ProfileActions = require('../actions/ProfileActions')

class ProfileStore {
    constructor() {
        this.profiles = []
        this.hasProfiles = false
        this.bindActions(ProfileActions);
    }

    onGetProfiles(profiles) {
        this.profiles = profiles.profiles;
        this.hasProfiles = true;
    }

}

module.exports = alt.createStore(ProfileStore, 'ProfileStore');
