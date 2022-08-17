import { NextFunction, Response, Request } from "express";
import { auth } from '../services/firebase.service'
import axios, { AxiosResponse } from 'axios';

const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers && req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    if (token) {
        try {
            auth.getUser(token)
                .then((decodedToken) => {
                    if (decodedToken.uid) next();
                    else res.status(401).send(decodedToken);
                })
                .catch((error) => {
                    res.status(401).send({
                        message: 'Sorry this token is not valid for this request.',
                        error
                    });
                });
        } catch (err) { 
            res.status(400).send({ message: 'Problem.', err });
        }
    } else {
        res.status(401).send({
            message: 'This request need a valid token in the header.',
            error: new Error('Invalid request!')
        });
    }
};

export default AuthMiddleware