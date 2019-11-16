import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema  = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    name: {type: String},
    id: {type: String},
    dataCreated: {type: Date}
})

module.exports = mongoose.model('Notes', NoteSchema);
