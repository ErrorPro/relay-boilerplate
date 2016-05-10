import Relay from 'react-relay';

export default class AddUserMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {addUser}`;
  }

  getVariables() {
    return {
      user: this.props.user,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on AddUserPayload {
        userEdge
        viewer { users }
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        parentID: 'viewer',
        connectionName: 'users',
        edgeName: 'userEdge',
        rangeBehaviors: {
          '': 'append',
        },
      },
    ];
  }
}
