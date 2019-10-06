import express from 'express';
import buckettbl from './buckettbl';

const router = express.Router({ caseSensitive: true });

router.post('/addBucket', buckettbl.addBucket);
router.post('/updateBucket', buckettbl.updateBucket);
router.delete('/deleteBucket', buckettbl.deleteBucket);
router.get('/listBucket', buckettbl.listBucket);
module.exports = router;
