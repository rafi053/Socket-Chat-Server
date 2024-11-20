import express, { Request, Response } from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { initializeSocketServer } from './socketServer';

const app = express();
const PORT = 5000;
app.use(cors());

const appServer = createServer(app);

const io = initializeSocketServer(appServer);

app.get('/', (req:Request , res:Response) => {
    res.send('Server is running!');
  });
  appServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
