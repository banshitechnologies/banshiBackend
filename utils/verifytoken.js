import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifytoken = (req, res, next) => {
    try {
        const token = req.cookies.user;
        if (!token) {
            return next(createError(401, "You are not authenticated!"));
        }

        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) return next(createError(403, "Token is not valid!"));
            req.user = user;
            next();
          });
    } catch (error) {
       return next(createError(400,"something Went Wrong"));
    }
}