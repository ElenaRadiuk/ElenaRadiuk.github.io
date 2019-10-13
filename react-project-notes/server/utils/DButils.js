import mongoose from "mongoose";

import '../models/Notes.js';

const Notes = mongoose.model('Notes');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost:27017/notes');
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