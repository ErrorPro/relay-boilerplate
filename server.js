import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import schema from './app/graphQl';
import { MongoClient } from 'mongodb';

const app = express()

MongoClient.connect('mongodb://localhost:27017/relayProject').then((db) => {
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/graphql', graphQLHTTP({
    schema,
    pretty: true,
    graphiql: true,
    context: {
      rootValue: {
        id: 'viewer'
      },
      db,
    },
  }));

  app.get('*', function (req, res) {
    res.send(renderPage())
  })

  function renderPage() {
    return `
      <!doctype html public="storage">
      <html>
      <meta charset=utf-8/>
      <title>My First React Router App</title>
      <link rel=stylesheet href=/index.css>
      <div id=root></div>
      <script src="/bundle.js"></script>
     `
  }

  const PORT = process.env.PORT || 8080

  app.listen(PORT, function() {
    console.log('Express server running at localhost:' + PORT)
  })
});
