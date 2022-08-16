/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'
// import ApiDNACrud from './../models/dna';

const hasMutation = async (req: Request, res: Response, next: NextFunction) => { 
    res.status(200).send('Mutations OK!');
    /*
     try {
         const length = req.body.dna[0].length;
         const dna = req.body.dna.map(dna => dna.length == length ? dna.split('').map(val => val.match(/A|T|C|G/img) ? val : false) : false);
         const isValid = dna.every(x => x.every(x => x !== false));
         if (isValid) {
             let hasMutation = false;
             
             if (isVertical(dna) || isHorizontal(dna) || oblicualLeftToRight(dna) || oblicualRightToLeft(dna))
                 hasMutation = true;
 
             //const DnaSet = new ApiDNACrud({ dna: req.body.dna,hasMutation});
             try {
                 //const result = await DnaSet.save();
 
                 // Find the document
                 ApiDNACrud.findOneAndUpdate(
                                 { dna: req.body.dna }, 
                                 { hasMutation }, 
                                 { upsert: true, new: true, setDefaultsOnInsert: true },
                                 function (error, result) {
                                     console.log(error);
                                     console.log(result);
                                 });
             } catch (err) {
                 console.log(err);
             }
 
             if (hasMutation) 
                 res.status(200).send({ message: 'Has mutation' });
             else
                 res.status(403).send({msg: 'Has no mutation'});
         } else
             res.status(403).send({msg:'Is not valid'});
     } catch (err) {
         console.log(err);
         res.status(403).send({msg:'Is not an array'});
     }
     */
}
 /*
 function oblicualLeftToRight(dna) {
     let isMutated = false;
     for (let i = 0; i < dna.length && !isMutated; i++) {
         let flag = true,
             posX = i,
             posY = i + 1;
         count = 1;
         do {
             try {
                 if (dna[posX][posX] == dna[posY][posY])
                     count++;
                 else
                     flag = false;
             } catch (err) {
                 flag = false;
             }
 
             posX++;
             posY++;
         } while (flag == true);
 
         if (count > 3)
             isMutated = true;
     }
     return isMutated;
 }
 
 function oblicualRightToLeft(dna) {
     let isMutated = false;
     for (let i = 0; i < dna.length && !isMutated; i++) {
         let flag = true,
             posX = dna[i].length - 1,
             posY = dna[i].length - 2,
             posA = i,
             posB = i + 1;
         count = 1;
         do {
             try {
                 if (dna[posA][posX] == dna[posB][posY])
                     count++;
                 else
                     flag = false;
             } catch (err) {
                 flag = false;
             }
 
             posX--;
             posY--;
             posA++;
             posB++;
         } while (flag == true);
 
         if (count > 3)
             isMutated = true;
     }
     return isMutated;
 }
 
 function isVertical(dna) {
     let isMutated = false;
     for (let i = 0; i < dna.length && !isMutated; i++) {
         for (let x = 0; x < dna[i].length && !isMutated; x++) {
             let flag = true,
                 counter = 1,
                 posX = x;
             do {
                 if (dna[i][posX] == dna[i][posX + 1])
                     counter++;
                 else
                     flag = false;
 
                 posX++;
             } while (flag == true);
 
             if (counter > 3)
                 isMutated = true;
         }
     }
     return isMutated;
 }
 
 function isHorizontal(dna) {
     let isMutated = false;
     for (let i = 0; i < dna.length && !isMutated; i++) {
         for (let x = 0; x < dna[i].length && !isMutated; x++) {
             let flag = true,
                 counter = 1,
                 posX = i;
             do {
                 try {
                     if (dna[posX][x] == dna[posX + 1][x])
                         counter++;
                     else
                         flag = false;
 
 
                     posX++;
                 } catch (err) {
                     flag = false;
                 }
             } while (flag == true);
 
             if (counter > 3)
                 isMutated = true;
         }
     }
     return isMutated;
 }
 */
 
export default hasMutation;