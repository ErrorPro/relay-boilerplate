import * as types from './types';
import * as queries from './queries';
import * as mutations from './mutations';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
  connectionDefinitions,
  nodeDefinitions,
  fromGlobalId,
} from 'graphql-relay';


const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId, {rootValue}) => {
    const {type, id} = fromGlobalId(globalId);

    if (id === 'viewer') {
      return rootValue;
    }

    return rootValue;
  },
  (obj) => {
    return refs.viewer;
  }
)

const refs = Object.keys(types).reduce((acc, key) => {
  acc[key] = types[key](acc);

  const {connectionType, edgeType} = connectionDefinitions({
    name: acc[key].name,
    nodeType: acc[key],
  });

  acc[key + 'Connection'] = connectionType;
  acc[key + 'Edge'] = edgeType;

  return acc;
}, {nodeField, nodeInterface});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
      node: nodeField,
      viewer: {
        type: refs.viewer,
        resolve: (_, args, {rootValue}) => rootValue
      }
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
      ...Object.keys(mutations).reduce((acc, key) => (acc[key] = mutations[key](refs), acc), {})
    }
  })
});
