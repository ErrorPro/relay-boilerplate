import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

export default (refs) => new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type:  new GraphQLNonNull(GraphQLID),
      resolve: (user) => user._id,
    },
    name: { type: GraphQLString }
  },
  interfaces: [refs.nodeInterface],
});
