import express from 'express';
import notestbl from './notestbl';

const router = express.Router({ caseSensitive: true });

router.post('/addNote', notestbl.addNote);
router.post('/updateNote', notestbl.updateNote);
router.delete('/deleteNote', notestbl.deleteNote);
router.get('/listNote/:cat_id', notestbl.listNote);
router.post('/updateStatus', notestbl.updateStatus);
module.exports = router;
