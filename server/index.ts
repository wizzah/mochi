import express, {
  Request,
  Response
} from 'express';
import { MongoClient, Db } from 'mongodb';
import bodyParser from 'body-parser';
import { getUrl, getOrCreateUrl } from './url';

const app = express();
app.use(bodyParser.json())

let dbo: Db;

// Occurs when we re-run the server
MongoClient.connect('mongodb://localhost:27017/', function (_err, db) {
  dbo = db.db('mydb')
  app.listen(3000, () => console.log('Listening!'))
});

// Landing page
app.get('/', function (_req: Request, res: Response) {
  res.sendFile(__dirname+'/index.html')
});

app.post('/api/url', (req: Request, res: Response) => {
  getOrCreateUrl(req.body.url, dbo, (result) => {
    res.send(result);
  });
});

// The redirection, moving the user to the 
// longer version of the URL
app.get('/r/:urlId', function (req: Request, res: Response) {
  getUrl(req.params.urlId, dbo, (result) => {
    if(result) {
      res.redirect(result.url);
    } else {
      res.redirect('/');
    }
  });
});
