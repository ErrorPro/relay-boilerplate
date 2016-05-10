import React from 'react';
import Relay from 'react-relay';
import { UserItemContainer } from '../UserItem';
import UserItemPage from './UserItemPage';
import { connect } from 'react-redux';
import { compose } from 'redux';

export default compose(
  (component) => {
    return Relay.createContainer(component, {
      initialVariables: {
        id: null,
      },
      fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            user(id: $id) {
              ${UserItemContainer.getFragment('user')}
            }
          }
        `,
      }
    });
  },
  connect(
    null,
    null,
    (stateProps, actions, parentProps) => ({
      children: <UserItemContainer user={parentProps.viewer.user} />
    })
  )
)(UserItemPage);
