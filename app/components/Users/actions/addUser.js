import {createAction} from 'redux-act';
import Relay from 'react-relay';
import AddUserMutation from '../mutations/addUserMutation';

const addUser = createAction('addUser');

export default function(user) {
  return (dispatch) => {
    Relay.Store.commitUpdate(new AddUserMutation({user}));

    dispatch(addUser());
  }
}
