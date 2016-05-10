import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export default (refs) => new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    name: { type: GraphQLString },
  },
  interfaces: [refs.nodeInterface],
});
