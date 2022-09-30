import express from 'express';
import bodyParser from 'body-parser';

import TwitterController from './twitter/TwitterController.js';
import router from './routes.js';

const app = express();
const port = 8585;

app.use(express.static('frontend'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app
    .use('/', router)
    .use('/', TwitterController);


app.listen((8585), () => {
    console.log('http://localhost:' + port);
});