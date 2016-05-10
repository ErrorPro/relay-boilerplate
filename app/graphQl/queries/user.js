import { GraphQLString } from 'graphql';
import { ObjectID } from 'mongodb'

export default (refs) => ({
  type: refs.user,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (_, args, {db}) => {
    return db.collection('users').findOne({_id: ObjectID(args.id)});
  }
});
