import React, {Component} from "react"
import CustomizeStore from "../../stores/CustomizeStore"
import CustomizeActions from "../../actions/CustomizeActions"
import AppBar from "@material-ui/core/AppBar/index"
import Tabs from "@material-ui/core/Tabs/index"
import Tab from "@material-ui/core/Tab/index"
import {User} from "./User"
import {Quiz} from "./Quiz"
import {Item} from "./Item"
import {Page} from "./Page"

class Customize extends Component {
    constructor(props) {
        super(props);
        this.state = CustomizeStore.getState();

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.tabs = this.tabs.bind(this);
        this.userChange = this.userChange.bind(this);
        this.quizChange = this.quizChange.bind(this);
        this.itemChange = this.itemChange.bind(this);
        this.pageChange = this.pageChange.bind(this);
    }

    componentDidMount() {
        CustomizeStore.listen(this.onStoreUpdate);
        if(!this.state.hasFetchedDefaults){
            CustomizeActions.getDefaults();
        }
    }

    componentWillUnmount() {
        CustomizeStore.unlisten(this.onStoreUpdate);
    }

    onStoreUpdate(state) {
        this.setState(state);
    }

    handleTabChange(event, tab) {
        CustomizeActions.updateTab(tab)
    }

    userChange(event){
        let newUser = Object.assign({}, this.state.user)
        newUser[event.target.name] = event.target.value;

        CustomizeActions.updateUser(newUser)
    }

    quizChange(event){
        let newQuiz = Object.assign({}, this.state.quiz)
        newQuiz[event.target.name] = event.target.value;

        CustomizeActions.updateQuiz(newQuiz)
    }

    itemChange(event){
        let newItem = Object.assign({}, this.state.item)
        newItem[event.target.name] = event.target.value;

        CustomizeActions.updateItem(newItem)
    }

    pageChange(event){
        let newPage = Object.assign({}, this.state.page)
        newPage[event.target.name] = event.target.value;

        CustomizeActions.updatePage(newPage)
    }

    render() {
        return <div>
            <h2>Customize</h2>
            {this.tabs()}
        </div>
    }

    tabs() {
        return <div>
            <AppBar position="static" style={{width: "max-content"}}>
                <Tabs value={this.state.tab} onChange={this.handleTabChange}>
                    <Tab label="User"/>
                    <Tab label="Content Page"/>
                    <Tab label="Quiz"/>
                    <Tab label="Quiz Item"/>
                </Tabs>
            </AppBar>
            {this.state.tab === 0 && <User user={this.state.user} onChange={this.userChange} />}
            {this.state.tab === 1 && <Page page={this.state.page} onChange={this.pageChange} />}
            {this.state.tab === 2 && <Quiz quiz={this.state.quiz} onChange={this.quizChange} />}
            {this.state.tab === 3 && <Item item={this.state.item} onChange={this.itemChange} />}
        </div>

    }
}

Customize.propTypes = {}

export default Customize;
