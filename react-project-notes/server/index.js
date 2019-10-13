import express from 'express';
import bodyParser from 'body-parser';

import * as db from './utils/DButils.js';

db.setUpConnection(); //соединение с бд

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('8080 send');
})

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
})

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
})

app.get('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
})


const server = app.listen(8080, () => {
    console.log("start port 8080-1");
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

