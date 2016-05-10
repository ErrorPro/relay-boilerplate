import React from 'react';
import Relay from 'react-relay';
import { UserListContainer } from './components/Users/UserList';
import { UserItemPageContainer } from './components/Users/UserItemPage';
import { Route, IndexRoute } from 'react-router';

export default {
  childRoutes: [
    {
      path: '/',
      component: UserListContainer,
      queries: {
        viewer: () => Relay.QL`query { viewer }`,
      }
    },
    {
      path: 'item/:id',
      component: UserItemPageContainer,
      prepareParams: (props) => ({...props}),
      queries: {
        viewer: () => Relay.QL`query { viewer }`,
      }
    },
  ]
}
