import { GraphQLString } from 'graphql';
import { ObjectID } from 'mongodb'
import { mutationWithClientMutationId } from 'graphql-relay';

export default (refs) => mutationWithClientMutationId({
  name: 'DeleteUser',
  inputFields: {
    id: {
      type: GraphQLString
    },
  },
  outputFields: {
    deleteId: {
      type: GraphQLString,
      resolve: (res) => res.id
    },
    viewer: {
      type: refs.viewer,
      resolve: (res) => res.rootValue
    }
  },
  mutateAndGetPayload: async ({id}, {db, rootValue}) => {
    const newUser = await db.collection('users').remove({_id: ObjectID(id)});

    return {
      id,
      rootValue,
    };
  }
});
