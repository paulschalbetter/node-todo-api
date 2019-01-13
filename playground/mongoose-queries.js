const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c3b5f44d00758094e4d80d41';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('Object id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

let id = '5c3b49762fdcb56df0f4b472';

if (!ObjectID.isValid(id)) {
  return console.log('Object id not valid');
};

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
