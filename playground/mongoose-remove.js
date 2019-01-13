const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((remove) => {
//   console.log(remove);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5c3b7f153a1e3939a547f521'}).then((todo) => {
//   console.log(todo);
// });


Todo.findByIdAndRemove('5c3b7f153a1e3939a547f521').then((todo) => {
  console.log(todo);
});
