export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const initialState = {
  cartItem: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      console.log(passProps, 'reducer');
      return { ...state, cartItem: cartItem.push(action.payload.passProps) };
    default:
      return state;
  }
}
