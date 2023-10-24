import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let lastRequest: any = null;

app.post('/api/search', (req: Request, res: Response) => {
  if (lastRequest) {
    lastRequest.abort();
  }

  const { email, number } = req.body as { email: string, number: string };

  setTimeout(() => {
    const searchResults = yourSearchFunction(email, number);

    lastRequest = null;
    res.json(searchResults);
  }, 5000);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function yourSearchFunction(email: string, number: string): Array<{ email: string, number: string }> {
  const data: Array<{ email: string, number: string }> = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  return data.filter((user) => {
    const emailMatch = user.email.includes(email);
    const numberMatch = number ? user.number.includes(number) : true;

    return emailMatch && numberMatch;
  });
}
