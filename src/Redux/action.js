import { CHANGE_NAME } from './actionType';
export function changeName(newName) {
  return {
    type: CHANGE_NAME,
    payload: { newName: newName },
  };
}
