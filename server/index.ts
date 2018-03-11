import express, {
  Request,
  Response
} from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  const a = "a";
  console.log(a);
  res.send('Hello World');
});

app.listen(3000);
