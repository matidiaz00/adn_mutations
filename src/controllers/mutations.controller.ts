/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'
import { isHorizontal, isVertical, oblicualLeftToRight, oblicualRightToLeft } from '../services/mutations.service'
import { db } from '../services/firebase.service'

const hasMutation = async (req: Request, res: Response, next: NextFunction) => { 
    const content_interface = {
        type:'Array of 6 strings',
        strings: 'Contains this specific letthers A,T,C,G',
        letthers_length: 4
    }
    try {
        const length = req.body.dna[0].length;
        const dna = req.body.dna.map((dna:any) => dna.length == length ? dna.split('').map((val:any) => val.match(/A|T|C|G/img) ? val : false) : false);
        const isValid = dna.every((x:any) => x.every((x:any) => x !== false));
        if (isValid) {
            const data = {
                dna: req.body.dna,
                hasMutation: false,
                upsert: true, new: true, setDefaultsOnInsert: true,
            }
            const muatationsDB = db.collection('mutations');
            if (isVertical(dna) || isHorizontal(dna) || oblicualLeftToRight(dna) || oblicualRightToLeft(dna)) {
                data.hasMutation = true;
                try {
                    await muatationsDB.doc().set(data, {merge: true});
                    res.status(200).send({ hasMutation: data.hasMutation, message: 'Has mutation', data: data });
                } catch (err) { res.status(403).send({hasMutation: data.hasMutation, message: 'Problem with save data in server.',data: data , err}); }
            } else {
                try {
                    await muatationsDB.doc().set(data, {merge: true});
                    res.status(200).send({ hasMutation: data.hasMutation, message: 'This DNA has no mutation', data: data });
                } catch (err) { res.status(403).send({hasMutation: data.hasMutation, message: 'Problem with save data in server.',data: data , err}); }
            };
        } else res.status(403).send({message:'Data is not valid', interface: content_interface});
    } catch (err) {
        res.status(403).send({message:'Is not an array', interface: content_interface, err});
    }
}
 
export default hasMutation;

/*
Con mutación
{
  "dna": [
    "ATGCGA","CAGTGC","TTATGT",
    "AGAAGG","AGTCAG","TCACTG"
  ]
}
{
  "dna": [
    "ATGCGA","CAGTGC","TTATGT",
    "AGAAGG","CCCCTA","TCACTG"
  ]
}
*/

/*
Sin mutación
{
  "dna": [
    "ATGCGA","CAGTGC","TTATTT",
    "AGACGG","GCGTCA","TCACTG"
  ]
}
*/