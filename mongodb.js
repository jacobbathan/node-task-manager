const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27018';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Lilly',
    //     age: 5
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 27
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //db.collection('tasks').insertMany(
    //  [
    //    {
    //      description: 'get boba',
    //      completed: false
    //    },
    //    {
    //      description: 'fix bed',
    //      completed: true
    //    },
    //    {
    //      description: 'learn mongo',
    //      completed: false
    //    }
    //  ],
    //  (error, result) => {
    //    if (error) {
    //      return console.log('Unable to insert users');
    //    }

    //    console.log(result.ops);
    //  }
    //);
  }
);
