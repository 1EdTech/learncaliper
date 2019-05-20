var alt = require('../alt');
var CustomizeActions = require('../actions/CustomizeActions')
var Fetchy = require("../util/Fetchy");

class CustomizeStore {
    constructor() {
        this.user = {id: "", name: ""}
        this.page = {id: "", name: ""}
        this.quiz = {id: "", name: ""}
        this.item = {id: "", name: ""}
        this.hasFetchedDefaults = false;
        this.expanded = false;
        this.tab = 0;

        this.bindActions(CustomizeActions);
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

    onGetDefaults(defaults) {
        this.hasFetchedDefaults = true;
        this.user = defaults.user;
        this.page = defaults.page;
        this.quiz = defaults.quiz;
        this.item = defaults.item;
    }

    onUpdateExpanded(expanded) {
        this.expanded = expanded;
    }

    onUpdateTab(tab){
        this.tab = tab;
    }

    onUpdateUser(user){
        this.user = user;
    }

    onUpdateQuiz(quiz){
        this.quiz = quiz;
    }

    onUpdatePage(page){
        this.page = page;
    }

    onUpdateItem(item){
        this.item = item;
    }

}

module.exports = alt.createStore(CustomizeStore, 'CustomizeStore');
