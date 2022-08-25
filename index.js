const express=require('express');
const cors=require('cors');
const app = express();

app.use(cors());

app.get('/github/user',require('./api/github/user'));
app.get('/github/repo',require('./api/github/repo'));

app.listen(80);