const express = require('express');
const {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
  getRegistrationsByCampaignId
} = require('../controllers/CampaignRegistrationController'); // Adjust path as needed

const router = express.Router();

router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);
router.get('/:campaignId/registrations', getRegistrationsByCampaignId);


module.exports = router;
