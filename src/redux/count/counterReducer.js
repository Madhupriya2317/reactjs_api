import actions from "./actions";

const initialState = {
    count: 0
  };
  
  export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case actions.INCREMENT_COUNTER:
        return {
            ...state,
          count: action.count
        }
        default: return state;
    }
    
  }