// import { Router } from 'express';
// import { createCourt, getCourt } from '../controllers/courtController';

// const router = Router();

// router.get('/clubs/:clubId/courts', getCourt);
// router.post('/clubs/:clubId/courts', createCourt);


// export default router;

import { Router } from 'express';
import { createCourt, getCourts } from '../controllers/courtController';

const router = Router();

router.get('/clubs/:clubId/courts', getCourts);
router.post('/clubs/:clubId/courts', createCourt);

export default router;
