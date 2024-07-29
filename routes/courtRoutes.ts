import { Router } from "express";
import { createCourt, getCourts } from "../controllers/courtController";

const router = Router();

router.get("/clubs/:clubId/courts", getCourts);
router.post("/clubs/:clubId/courts", createCourt);

export default router;
