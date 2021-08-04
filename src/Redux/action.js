import { ADD_TO_FAVORITE } from './actionType';
export function addToCart(passProps) {
  return {
    type: ADD_TO_FAVORITE,
    payload: { passProps: passProps },
  };
}
