import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

import '../models/User.js';

import config from '../../etc/config.json';
import { async } from "q";

const User = mongoose.model('User');

export function setUpConnectionUser() {
    mongoose.connect(`mongodb://${config.dbuser.host}:${config.dbuser.port}/${config.dbuser.name}`);
}

export function listUsers() {
    return User.find();
}

async function authenticate({user, password}) {
    const user = await User.findOne({user});
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