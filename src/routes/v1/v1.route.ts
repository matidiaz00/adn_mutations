import mutations from "./adn/mutations.route";
import stats from "./adn/stats.route";
import jwt from "./accounts/jwt.route";
import { Router } from "express";
//import auth from '../../middlewares/auth.middleware'

const router = Router();

router.use('/dna/mutations', mutations);
router.use('/dna/stats', stats);
router.use('/accounts/json-web-token', jwt);

export default router;