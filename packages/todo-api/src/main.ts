/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcaome to todo-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listensingsg at http://localhost:${port}/api`);
});
server.on('error', console.error);
