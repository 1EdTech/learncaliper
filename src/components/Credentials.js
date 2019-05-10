import React, {Component} from "react"

export class Credentials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpointUrl: "",
            apiToken: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event){
        console.log("Submitted");
        event.preventDefault();
    }

    render() {
        return <div>
            <h4>Endpoint Configuration</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mx-sm-3 mb-2 col-7">
                    <label htmlFor="endpointUrl">Endpoint URL</label>
                    <input type="text" className="form-control form-control-sm" id="endpointUrl" value={this.state.endpointUrl} onChange={this.handleChange}  placeholder="The URL to send Caliper events to"/>
                </div>
                <div className="form-group mx-sm-3 mb-2 col-7">
                    <label htmlFor="apiToken">Api Token:</label>
                    <input type="text" className="form-control form-control-sm" id="apiToken" value={this.state.apiToken} onChange={this.handleChange} placeholder="The value for the Authorization Bearer token" />
                </div>
            </form>
        </div>
    }
}
