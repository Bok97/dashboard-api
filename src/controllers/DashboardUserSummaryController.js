const DashboardUserSummaryService = require('../services/DashboardUserSummaryService');
const DashboardUserSummaryModel = require('../models/DashboardUserSummaryModel'); // Adjust the path as necessary

const { sendSuccessResponse, sendErrorResponse } = require('../utils/responseHandlers');

class DashboardUserSummaryController {
    constructor() {
        this.dashboardUserSummaryService = new DashboardUserSummaryService(DashboardUserSummaryModel);
      }
  
    async getTotalUsersByGender(req, res) {
        try {
            const { year, month } = req.query; 
            console.log(`Year: ${year}, Month: ${month}`);
            const results = await this.dashboardUserSummaryService.getTotalUsersByGender(year, month);
            const defaultData = results.map(result => ({ name: result.name, y: result.y }));
            sendSuccessResponse(res, defaultData);
        } catch (error) {
            console.error(error);
            sendErrorResponse(res, error.message, 500);
        }
    }

    async getTotalUsersByAge(req, res) {
        try {
            const { year, month } = req.query; 
            console.log(`Year: ${year}, Month: ${month}`);
            const results = await this.dashboardUserSummaryService.getTotalUsersByAge(year, month);
            sendSuccessResponse(res, { categories: results.categories, results: results.data }); 
        } catch (error) {
            console.error(error);
            sendErrorResponse(res, error.message, 500);
        }
    }


    async getTotalUsersByState(req, res) {
        try {
            const { year, month } = req.query; 
            console.log(`Year: ${year}, Month: ${month}`);
            const results = await this.dashboardUserSummaryService.getTotalUsersByState(year, month);
            sendSuccessResponse(res, { categories: results.categories, results: results.data }); 
        } catch (error) {
            console.error(error);
            sendErrorResponse(res, error.message, 500);
        }
    }
  }
  
  module.exports = new DashboardUserSummaryController();
  