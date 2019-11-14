import expressJwt from 'express-jwt';
import userService from '../utils/DButilsUser';
import * as config from '../../etc/config.json'
import { async } from 'q';

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked}).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if(!user) {
        return done(null, true)
    }

    done();
}