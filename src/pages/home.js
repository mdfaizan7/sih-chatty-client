import React, { Component, Fragment } from "react";
import CreateConversation from "../components/CreateConversation";

// Mui stuff
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// components
import Conversation from "../components/Conversation";

// redux stuff
import { connect } from "react-redux";
import { getConversations } from "../redux/actions/dataActions";

class home extends Component {
  state = {
    conversations: null
  };

  componentDidMount() {
    this.props.getConversations();
  }

  render() {
    const { conversations, loading } = this.props.data;

    let renderConversations = !loading
      ? conversations.map(conversation => (
          <Conversation key={conversation.ConvId} conversation={conversation} />
        ))
      : "LOADING";

    return (
      <Fragment>
        <Container maxWidth="md">
          <Grid container>
            <Grid item sm={2} />
            <Grid item sm={8}>
              <div>{renderConversations}</div>
              <CreateConversation />
            </Grid>
            <Grid item sm={2} />
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getConversations })(home);
