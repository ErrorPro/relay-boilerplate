import Relay from 'react-relay';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import deleteUser from '../actions/deleteUser';

export default compose(
  (component) => {
    return Relay.createContainer(component, {
      fragments: {
        user: () => Relay.QL`
          fragment on User {
            id
            name
          }
        `,
      }
    });
  },
  connect(
    null,
    {
      deleteUser
    },
    (stateProps, dispatchProps, parentProps) => ({
      ...dispatchProps,
      ...parentProps,
    })
  )
)(UserItem);
