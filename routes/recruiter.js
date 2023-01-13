const express = require('express');
const router = express.Router();
const recruiterController = require('../app/controllers/recruiterController');

/**
 * @openpi
 * /api/recruiter/get
 * post:
 *  tags:
 *      -recruiter:
 *      summary: Create api for the recruiter profie
 */
router.get('/api/recruiter', () => recruiterController.get);

/**
 * @openpi
 * /api/recruiter
 * post:
 *  tags:
 *      -recruiter:
 *      summary: Create api for the recruiter profie
 */
router.post('/api/recruiter', () => recruiterController.create);
/**
 * @openpi
 * /api/recruiter
 * put:
 *  tags:
 *      -recruiter:
 *      summary: Update api for recruiter pofile
 */
router.put('/api/recruiter', () => recruiterController.update);

module.exports = router;
