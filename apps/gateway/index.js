import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('EchoScribe API Gateway Running');
});

app.listen(5000, () => {
  console.log('API Gateway listening on port 5000');
});
