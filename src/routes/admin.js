const express = require('express');
const AdminController = require('../controllers/AdminController');
const authMiddleware = require('../middlewares/authMiddleware');
const DashboardUserSummaryController = require('../controllers/DashboardUserSummaryController');
const DashboardProductSummaryController = require('../controllers/DashboardProductSummaryController');

const router = express.Router();

router.post('/login', AdminController.login);
router.post('/logout', authMiddleware, AdminController.logout); 


router.get('/dashboard/users-by-gender', authMiddleware, (req, res) => DashboardUserSummaryController.getTotalUsersByGender(req, res));
router.get('/dashboard/users-by-age', authMiddleware, (req, res) => DashboardUserSummaryController.getTotalUsersByAge(req, res));
router.get('/dashboard/users-by-state', authMiddleware, (req, res) => DashboardUserSummaryController.getTotalUsersByState(req, res));
router.get('/dashboard/product-summaries', authMiddleware, (req, res) => DashboardProductSummaryController.getProductSummaries(req, res));

module.exports = router;
