import actions from "../cartid/actions";

const initialState = {
    id : []
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case actions.CART_ID:
        return {
            ...state,
            id: action.id
            // id: [...state.id,action.id]
        }
        default: return state;
    }
    
  }