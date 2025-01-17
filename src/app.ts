import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware для обработки JSON
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
