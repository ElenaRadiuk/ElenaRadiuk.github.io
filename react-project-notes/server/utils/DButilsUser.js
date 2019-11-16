import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

import User from '../models/User.js';

import config from '../../etc/config.json';
// import { async } from "q";
mongoose.Promise = global.Promise;

// const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.dbuser.host}:${config.dbuser.port}/${config.dbuser.name}`);
}

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


export function listUsers() {
    return User.find();
}

async function authenticate({name, password}) {
    const user = await User.findOne({name});
    if(user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id}, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await User.findOne({name: userParam.name})) {
        throw 'Username "' + userParam.name  + '" is already exist';
    }

    const user = new User(userParam);

    //hash pass
    if(userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10)
    }

    //save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.name !== userParam.name && await User.findOne({name: userParam.name})) {
         throw 'Username "' + userParam.name + '" is already exist';
    }

    //hash pass if it was entered
    if (userParam.password) {
        userParam.hash == bcrypt.hashSync(userParam.password, 10)
    }

     // copy userParam properties to user
     Object.assign(user, userParam);

     await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}