const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>  {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>  {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>  {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Bob'}).then((result) =>  {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id : new ObjectID("5c3a0215f123d53c326eea78")
  // }).then((result) =>  {
  //   console.log(result);
  // });


  //client.close();
});
