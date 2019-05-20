var alt = require('../alt');
var Fetchy = require("../util/Fetchy");

class CustomizeActions {

    getDefaults() {
        return (dispatch) => {
            Fetchy.get(Fetchy.apiUrl("producer/defaults"))
                    .then((json) => {
                        dispatch(json)
                    });
        }

    }

    updateExpanded(expanded) {
        return expanded;
    }

    updateTab(tab){
        return tab;
    }

    updateUser(user){
        return user;
    }

    updateQuiz(quiz){
        return quiz;
    }

    updatePage(page){
        return page;
    }

    updateItem(item){
        return item;
    }


}

module.exports = alt.createActions(CustomizeActions);
