import {
  LOADING_DATA,
  SET_CONVERSATIONS,
  SET_CONVERSATION,
  SUBMIT_MESSAGE,
  POST_CONVERSATION
} from "../types";

const initialState = {
  conversations: [],
  conversation: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };

    case SET_CONVERSATIONS:
      return { ...state, conversations: action.payload, loading: false };

    case SET_CONVERSATION:
      return { ...state, conversation: action.payload };

    case POST_CONVERSATION:
      return {
        ...state,
        conversations: [action.payload, ...state.conversations]
      };

    case SUBMIT_MESSAGE:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          messages: [...state.conversation.messages, action.payload]
        }
      };

    default:
      return state;
  }
}
