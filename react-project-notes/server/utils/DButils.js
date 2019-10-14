import mongoose from "mongoose";

import '../models/Notes.js';

import config from '../../etc/config.json';

const Notes = mongoose.model('Notes');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}


export function listNotes() {
    return Notes.find();
}

export function createNote(data) {
    const note = new Notes({
        title: data.title,
        text: data.text,
        color: data.color,
        author: data.author,
        dataCreated: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Notes.findById(id).remove();
}