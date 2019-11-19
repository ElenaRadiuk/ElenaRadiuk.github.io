import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import { serverPort } from '../etc/config.json';

import * as db from './utils/DButils.js';

import config from '../etc/config';

// db.setUpConnection(); //соединение с бд
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

const app = express();

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('8080 send');
})

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
})

app.post('/notes', (req, res) => {
    db.addNote(req.body).then(data => res.send(data));
})

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
})


const server = app.listen(serverPort, () => {
    console.log(`start port ${serverPort}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

