var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class CodeSampleActions {

    action_url(action, type="code"){
        return Fetchy.apiUrl("meta/" + type + "/profile/" + action.profile + "/event/" + action.event + "/action/" + action.action)
    }


    fetchCode(action, callback) {
        return (dispatch) => {
            Fetchy.get( this.action_url(action), "text" )
                    .then((text) => {
                        callback(text)
                    });
        }

    }

    fetchJson(action, callback) {
        return (dispatch) => {
            Fetchy.get( this.action_url(action, "json"), "text" )
                    .then((text) => {
                        callback(text)
                    });
        }

    }

}

module.exports = alt.createActions(CodeSampleActions);
