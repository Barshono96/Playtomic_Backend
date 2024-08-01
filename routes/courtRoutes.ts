import { Router } from "express";
import { createCourt, getCourts, getAllCourts  } from "../controllers/courtController";

const router = Router();

router.get("/clubs/:clubId/courts", getCourts);
router.post("/clubs/:clubId/courts", createCourt);

router.get("/courts", getAllCourts);

export default router;
