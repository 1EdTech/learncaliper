import React, {Component} from "react"
import List from "@material-ui/core/List/index"
import ListItem from "@material-ui/core/ListItem/index"
import ListItemAvatar from "@material-ui/core/ListItemAvatar/index"
import Avatar from "@material-ui/core/Avatar/index"
import LinkIcon from "@material-ui/icons/Link"
import ListItemText from "@material-ui/core/ListItemText/index"
import Divider from "@material-ui/core/Divider/index"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import * as PropTypes from "prop-types"

export class Local extends Component {
    render() {
        return <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LinkIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Server URL" secondary={this.props.creds.endpointUrl}/>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <VpnKeyIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="API Token" secondary={this.props.creds.apiToken}/>
            </ListItem>
        </List>
    }
}

Local.propTypes = {creds: PropTypes.any}
