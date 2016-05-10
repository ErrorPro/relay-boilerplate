import { INCREMENT, DECREMENT } from './Todo/actions/todoList';

export default function (state=0, action) {
  switch (action.TYPE) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
