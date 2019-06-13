const express = require('express');
require('./db/mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server up on port ' + port);
});

const bcrypt = require('bcryptjs');

// const myFunc = async () => {
//   const password = 'Red12345!';
//   const hashedPassword = await bcrypt.hash(password, 8);
//
//   console.log(password);
//   console.log(hashedPassword);
//
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//
//   console.log(isMatch);
// };

// myFunc();
