import Relay from 'react-relay';
import React from 'react';
import UserPreview from './UserPreview';
import { compose } from 'redux';

export default compose(
  (component) => {
    return class extends React.Component {
      render() {
        const route = {
          name: 'RelayRootWrapper',
          params: this.props,
          queries: {
            viewer: (Comp, params) => Relay.QL`
              query {
                viewer {
                  ${Comp.getFragment('viewer', params)}
                }
              }
            `,
          },
        };

        return (
          <Relay.RootContainer
            Component={component}
            route={route}
          />
        )
      }
    }
  },
  (component) => {
    return Relay.createContainer(component, {
      initialVariables: {
        userId: null,
      },
      fragments: {
        viewer: () => Relay.QL`
          fragment on Viewer {
            user(id: $userId) {
              name
            }
          }
        `,
      }
    });
  }
)(UserPreview);
