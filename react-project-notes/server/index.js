import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import { serverPort } from '../etc/config.json';
const passport = require('passport');

const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


import * as db from './utils/DButils.js';

import config from '../etc/config';

import * as users from './utils/routesUser';


// db.setUpConnection(); //соединение с бд
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
{ useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(passport.initialize());
require('./passport')(passport);

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: false }));
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

// app.use('/api/users', users);

app.post('/register', (req, res) => {
    users.regUser(req.body).then(data => res.send(data));
})

app.post('/login', (req, res) => {
    users.logUser(req.body).then(data => res.send(data));
})


app.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});


const server = app.listen(serverPort, () => {
    console.log(`start port ${serverPort}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

