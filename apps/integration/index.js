import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('EchoScribe Integration Service Running'));
app.listen(5002);
