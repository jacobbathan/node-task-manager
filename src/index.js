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

const Task = require('./models/task');
const User = require('./models/user');
const main = async () => {
  //  const task = await Task.findById('5d03d9c67f119e710463a368');
  //  await task.populate('owner').execPopulate();
  //  console.log(task.owner);
  const user = await User.findById('5d03d837ff848470a0d05db0');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
