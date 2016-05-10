import React from 'react';
import Relay from 'react-relay';
import UserList from './UserList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { UserItemContainer } from '../UserItem';
import { AddUserContainer } from '../AddUser';

export default compose(
  (component) => {
    return Relay.createContainer(component, {
      fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            users(first: 100) {
              edges {
                node {
                  ${UserItemContainer.getFragment('user')}
                }
              }
            }
          }
        `,
      }
    });
  },
  connect(
    null,
    null,
    (_, dispatchProps, parentProps) => ({
      ...dispatchProps,
      list: parentProps.viewer.users.edges.map((edge, index) => <UserItemContainer key={index} user={edge.node}/>),
      addForm: <AddUserContainer />,
    })
  )
)(UserList);
