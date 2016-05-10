import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from 'graphql';
import { globalIdField } from 'graphql-relay';
import * as queries from '../queries';

export default (refs) => new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},//globalIdField('viewer'),
    ...Object.keys(queries).reduce((acc, key) => (acc[key] = queries[key](refs), acc), {})
  },
  interfaces: [refs.nodeInterface],
});
