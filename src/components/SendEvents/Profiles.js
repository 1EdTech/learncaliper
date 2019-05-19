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
            <p className="description">Caliper Metric Profiles (<a href="https://www.imsglobal.org/sites/default/files/caliper/v1p1/caliper-spec-v1p1/caliper-spec-v1p1.html#profiles" target="_blank">documentation</a>) provide a common way to describe user interactions using a shared vocabulary. For example: reading a document, taking a quiz, or watching a video.
            </p>
            {this.state.profiles.map((profile, index) => {
                    return <Profile profile={profile} key={index} />
                })}
        </div>
    }
}
