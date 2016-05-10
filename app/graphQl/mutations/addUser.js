import { mutationWithClientMutationId } from 'graphql-relay';

export default (refs) => mutationWithClientMutationId({
  name: 'AddUser',
  inputFields: {
    user: {
      type: refs.userInput
    },
  },
  outputFields: {
    userEdge: {
      type: refs.userEdge,
      resolve: (res) => res.user
    },
    viewer: {
      type: refs.viewer,
      resolve: (res) => res.rootValue
    }
  },
  mutateAndGetPayload: async ({user}, {db, rootValue}) => {
    const newUser = await db.collection('users').insertOne(user);

    return {
      user: {node: newUser.ops[0], cursor: ''},
      rootValue,
    };
  }
});
