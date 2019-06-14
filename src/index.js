const express = require('express');
require('./db/mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');
app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET REQ DISABLED');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   if (req.method) {
//     res.status(503).send('Server down for maintenace');
//   }
// });

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server up on port ' + port);
});
