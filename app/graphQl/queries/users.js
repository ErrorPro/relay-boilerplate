import {connectionArgs, connectionFromPromisedArray} from 'graphql-relay';

export default (refs) => ({
  type: refs.userConnection,
  args: connectionArgs,
  resolve: (rootValue, args, {db}) => {
    const users = db.collection('users');

    return connectionFromPromisedArray(users.find({}).toArray(), args);
  }
});
