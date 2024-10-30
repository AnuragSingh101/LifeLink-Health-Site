const express = require('express');
const router = express.Router();
const {getCampign, postCampign, updateCampign, deleteCampign, getRegisteredUsers} = require('../controllers/campignController');

router.post('/add', postCampign);

router.get('/', getCampign);

router.put('/update/:id', updateCampign);

router.delete('/delete/:id', deleteCampign);

router.get('/:id/registered-users', getRegisteredUsers);


module.exports = router;
