import {
  LOADING_DATA,
  SET_CONVERSATIONS,
  SET_CONVERSATION,
  STOP_LOADING_UI,
  LOADING_UI,
  SUBMIT_MESSAGE,
  CLEAR_ERRORS,
  SET_ERRORS,
  POST_CONVERSATION
} from "../types";
import axios from "axios";

export const getConversations = () => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/conversations")
    .then(res => {
      dispatch({
        type: SET_CONVERSATIONS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_CONVERSATIONS,
        payload: []
      });
    });
};

export const getConversation = ConvId => dispatch => {
  dispatch({ type: LOADING_UI });

  axios
    .get(`/conversation/${ConvId}`)
    .then(res => {
      dispatch({
        type: SET_CONVERSATION,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createConversation = convData => dispatch => {
  dispatch({ type: LOADING_UI });

  axios
    .post("/conversation", convData)
    .then(res => {
      dispatch({
        type: POST_CONVERSATION,
        payload: res.data
      });

      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      console.error(err.response);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const submitMessage = (ConvId, messageData) => dispatch => {
  axios
    .post(`/message/${ConvId}`, messageData)
    .then(res => {
      dispatch({
        type: SUBMIT_MESSAGE,
        payload: res.data
      });

      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response
      });
    });
};
