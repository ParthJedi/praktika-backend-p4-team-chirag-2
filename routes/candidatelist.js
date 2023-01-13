const express = require('express');
const router = express.Router();
const recruiterController = require('../app/controllers/recruiterController');

/**
/**
 * @openpi
 * /api/recruiter/getcandidates
 * post:
 *  tags:
 *      -recruiter:
 *      summary: Get all candidate by filter
 */
router.get('/api/candidates-list', () => recruiterController.getcandidatelist);

/**
 * @openpi
 * /api/recruiter/candidate/sendrequest
 * post:
 *  tags:
 *      -recruiter candidate sent request:
 *      summary: sent request to candidate regarding job vacancy
 */
router.put(
	'/api/recruiter/candidates-list/sendrequest',
	() => recruiterController.sentcandidateinvite
);
