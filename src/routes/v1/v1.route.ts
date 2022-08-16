import mutations from "./adn/mutations.route";
import stats from "./adn/stats.route";
import { Router } from "express";

const router = Router();

router.use('/mutations', mutations);
router.use('/stats', stats);

export default router;