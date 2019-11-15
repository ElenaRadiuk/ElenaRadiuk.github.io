// require('rootpath')();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import expressJwt from "express-jwt";

import { serverPort } from '../etc/config.json';

import jwt from './_helpers/jwt';
// import errorHandler from './_helpers/error-handler';

import * as db from './utils/DButils.js';
// import * as dbuser from './utils/DButilsUser.js';

db.setUpConnection(); //соединение с бд
// dbuser.setUpConnection(); //соединение с бд

const app = express();

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

// use JWT auth to secure the api
app.use(jwt());

// global error handler
// app.use(errorHandler);

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



// app.post('/authenticate', (req, res, next) => {
//     dbuser.authenticate(req.body).then(data => res.send(data))
//     .catch(err => next(err));
// })

// app.post('/register', (req, res, next) => {
//     dbuser.create(req.body).then(data => res.send(data))
//     .catch(err => next(err));
// })


// app.get('/', (req, res, next) => {
//     dbuser.getAll(req.body).then(data => res.send(data))
//     .catch(err => next(err));
// })

// app.get('/current', (req, res, next) => {
//     dbuser.getById(req.user.sub).then(data => res.send(data))
//     .catch(err => next(err));
// })

// app.get('/:id', (req, res, next) => {
//     dbuser.getById(req.params.id).then(data => res.send(data))
//     .catch(err => next(err));
// })

// app.put('/:id', (req, res, next) => {
//     dbuser.update(req.params.id, req.body).then(data => res.send(data))
//     .catch(err => next(err));
// })

// app.delete('/:id', (req, res) => {
//     dbuser._delete(req.params.id).then(data => res.send(data));
// })



const server = app.listen(serverPort, () => {
    console.log(`start port ${serverPort}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

