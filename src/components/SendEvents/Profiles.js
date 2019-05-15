import React, {Component} from "react"
import {Profile} from "./Profile"
import ProfileStore from "../../stores/ProfileStore"
import ProfileActions from "../../actions/ProfileActions"

export class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = ProfileStore.getState();

        this.onStoreUpdate = this.onStoreUpdate.bind(this);
    }

    componentDidMount() {
        ProfileStore.listen(this.onStoreUpdate);
        if(!this.state.hasProfiles){
            ProfileActions.getProfiles();
        }
    }

    componentWillUnmount() {
        ProfileStore.unlisten(this.onStoreUpdate);
    }

    onStoreUpdate(state) {
        this.setState(state);
    }

    render() {
        return <div>
            <h2>Profiles</h2>

            {this.state.profiles.map((profile, index) => {
                    return <Profile profile={profile} key={index} />
                })}
        </div>
    }
}
