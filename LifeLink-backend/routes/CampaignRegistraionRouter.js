const express = require('express');
const {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/CampaignRegistrationController'); // Adjust path as needed

const router = express.Router();

router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);


module.exports = router;
