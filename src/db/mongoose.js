const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27018/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('Can not use the string password');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const newTask = new Task({
  description: 'get yumcream'
});
newTask
  .save()
  .then(() => {
    console.log(newTask);
  })
  .catch(error => {
    console.log(error);
  });

//const me = new User({
//  name: '   Jacob    ',
//  email: '    LILLLYYYY@lilly.com',
//  age: 20,
//  password: 'password123'
//});
//
//me.save()
//  .then(() => {
//    console.log(me);
//  })
//  .catch(error => {
//    console.log('Error', error);
//  });
//
