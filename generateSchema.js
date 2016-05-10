import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import schema from './app/graphQl';
import fs from 'fs';

(async () => {
  const json = await graphql(schema, introspectionQuery);

  fs.writeFile('./schema.json', JSON.stringify(json, null, 2), (err) => {
    if (err) console.log(err);
    console.log('done');
  });
})();
