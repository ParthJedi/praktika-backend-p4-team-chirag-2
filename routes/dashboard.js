const express = require('express');
const router = express.Router();
const dashboardController = require('../app/controllers/dashboardController');

/**
 * @openpi
 * /api/dashboard
 * post:
 *  tags:
 *      -dashboard:
 *      summary: get api for recruiter dashboard
 */
router.get('/api/dashboard', () => dashboardController.get);
