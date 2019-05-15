var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class ProfileActions {

    getProfiles() {
        return (dispatch) => {
            Fetchy.get(Fetchy.apiUrl("producer/profiles"))
                    .then((json) => {
                        dispatch(json)
                    });
        }

    }

}

module.exports = alt.createActions(ProfileActions);
