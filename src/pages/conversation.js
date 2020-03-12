import React, { Component, Fragment } from "react";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";

// mui stuff
import Grid from "@material-ui/core/Grid";

// redux stuff
import { connect } from "react-redux";
import { getConversation } from "../redux/actions/dataActions";

export class conversation extends Component {
  componentDidMount() {
    const ConvId = this.props.match.params.ConvId;
    this.props.getConversation(ConvId);
  }

  render() {
    const {
      classes,
      conversation: { ConvName, creator, createdWith, ConvId, messages }
    } = this.props;

    return (
      <Fragment>
        <Grid container>
          <Grid item sm={2} />
          <Grid item sm={8}>
            {!messages ? "LOADING" : <Messages messages={messages} />}
            <MessageForm ConvId={ConvId} />
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  conversation: state.data.conversation
});

export default connect(mapStateToProps, { getConversation })(conversation);
