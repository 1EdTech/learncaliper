var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class CodeSampleActions {

    fetchCode(sampleName, callback) {
        return (dispatch) => {
            Fetchy.get( Fetchy.apiUrl("producer/" + sampleName) )
                    .then((text) => {
                        callback(text)
                    });
        }

    }

}

module.exports = alt.createActions(CodeSampleActions);
