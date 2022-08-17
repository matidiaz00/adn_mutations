import mutations from "./adn/mutations.route";
import stats from "./adn/stats.route";
import jwt from "./accounts/jwt.route";
import { Router } from "express";
import auth from '../../middlewares/auth.middleware'

const router = Router();

router.use('/adn/mutations', auth, mutations);
router.use('/adn/stats', auth, stats);
router.use('/account/json-web-token', jwt);

export default router;