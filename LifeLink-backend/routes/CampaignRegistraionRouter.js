const express = require('express');
const {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
  getRegistrationsByCampaignId,
  approvedUser
} = require('../controllers/CampaignRegistrationController'); // Adjust path as needed

const router = express.Router();

router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);
router.get('/:campaignId/registrations', getRegistrationsByCampaignId);
router.post('/approve/:campaignId/:userId', approvedUser);




module.exports = router;
