import Relay from 'react-relay';

export default class DeleteUserMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {deleteUser}`;
  }

  getVariables() {
    return {
      id: this.props.id,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on DeleteUserPayload {
        deleteId
        viewer {
          users
          user
       }
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'RANGE_DELETE',
        parentName: 'viewer',
        parentID: 'viewer',
        connectionName: 'users',
        pathToConnection: ['viewer', 'users'],
        deletedIDFieldName: 'deleteId',
      },
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {viewer: 'viewer'},
      }
    ];
  }
}
