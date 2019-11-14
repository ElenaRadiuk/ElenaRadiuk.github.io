import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = newSchema({
    name: {type: String, unique: true, required: true},
    hash: {type: String},
    email: {type: String},
    createdDate: {type: Date, default: Date.now}
});

UserSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', UserSchema);