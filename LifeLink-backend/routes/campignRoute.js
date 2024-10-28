const express = require('express');
const router = express.Router();
const {getCampign, postCampign, updateCampign, deleteCampign} = require('../controllers/campignController');

router.post('/add', postCampign);

router.get('/', getCampign);

router.put('/update/:id', updateCampign);

router.delete('/delete/:id', deleteCampign);

module.exports = router;
