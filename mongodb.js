const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27018';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);

    db.collection('tasks')
      .updateMany(
        { completed: false },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    //    db.collection('users')
    //      .updateOne(
    //        { _id: new ObjectID('5cf851d262fde720c82dda80') },
    //        {
    //          $set: {
    //            name: 'Mike'
    //          }
    //        }
    //      )
    //      .then(result => {
    //        console.log(result);
    //      })
    //      .catch(error => {
    //        console.log(error);
    //      });
    //
    //    db.collection('tasks').findOne(
    //      { _id: new ObjectID('5cf855f4ff08702143135231') },
    //      (error, tasks) => {
    //        console.log(tasks);
    //      }
    //    );
    //
    //    db.collection('tasks')
    //      .find({ completed: false })
    //      .toArray((error, tasks) => {
    //        console.log(tasks);
    //      });
    //

    //    db.collection('users').findOne(
    //      { _id: new ObjectID('5cf85ccf55c7e1229e038834') },
    //      (error, user) => {
    //        if (error) {
    //          return console.log('Unable to get user');
    //        }
    //        console.log(user);
    //      }
    //    );
    //
    //    db.collection('users')
    //      .find({ age: 28 })
    //      .toArray((error, users) => {
    //        console.log(users);
    //      });
    //
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
