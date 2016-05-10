import {createAction} from 'redux-act';
import Relay from 'react-relay';
import DeleteUserMutation from '../mutations/deleteUserMutation';

const deleteUser = createAction('deleteUser');

export default function(id) {
  return (dispatch) => {
    Relay.Store.commitUpdate(new DeleteUserMutation({id}));

    dispatch(deleteUser());
  }
}
