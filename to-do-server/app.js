import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import os from 'os';

import config from './config/config';
import notesModule from './modules/notes/router';
import bucketModule from './modules/bucket/router';;

const app = express();


app.set('case sensitive routing', true);
app.set('env', config.ENV);
app.set('port', config.PORT);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'))


app.use('/api', notesModule, bucketModule);


app.use((err, req, res, next) => {
    return res.status(500).send({ success: false, msg: 'Someting went wrong', data: err.stack });
});

app.listen(app.get('port'), () => {
    console.log(`Server is listening on http://${os.hostname()}:${app.get('port')}`);
});

module.exports = app;
