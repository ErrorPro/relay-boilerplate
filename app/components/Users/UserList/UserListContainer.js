import React from 'react';
import Relay from 'react-relay';
import UserList from './UserList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { UserItemContainer } from '../UserItem';
import { AddUserContainer } from '../AddUser';
import { UserPreviewContainer } from '../UserPreview';
import setPreview from '../actions/userPreview';

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
    (state) => ({userPreview: state.userPreview}),
    (dispatch) => ({
      setPreview: (id) => {
        dispatch(setPreview(id))
      }
    }),
    (stateProps, dispatchProps, parentProps) => ({
      ...parentProps,
      list: parentProps.viewer.users.edges.map((edge, index) => (
        <UserItemContainer key={index} user={edge.node} onSetPreview={dispatchProps.setPreview}/>
      )),
      addForm: <AddUserContainer />,
      userPreview: stateProps.userPreview ? <UserPreviewContainer userId={stateProps.userPreview}/> : null,
    })
  )
)(UserList);
