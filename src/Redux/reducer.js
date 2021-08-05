import _ from 'lodash';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const initialState = {
  cartItem: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const { cartItem } = state;
      const passProps = action.payload.passProps;
      return { ...state, cartItem: _.union(cartItem, [passProps]) };
    default:
      return state;
  }
}
