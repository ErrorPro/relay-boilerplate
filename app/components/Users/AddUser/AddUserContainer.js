import { connect } from 'react-redux';
import { compose } from 'redux';
import addUser from '../actions/addUser';
import AddUser from './AddUser';

export default compose(
  connect(
    null,
    {
      addUser
    },
    (stateProps, dispatchProps) => ({
      ...dispatchProps,
    })
  )
)(AddUser);
