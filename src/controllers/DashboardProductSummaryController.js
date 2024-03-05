const DashboardProductSummaryService = require('../services/DashboardProductSummaryService');
const DashboardProductSummaryModel = require('../models/DashboardProductSummaryModel'); 

const { sendSuccessResponse, sendErrorResponse } = require('../utils/responseHandlers');

class DashboardProductSummaryController {
    constructor() {
        this.dashboardProductSummaryService = new DashboardProductSummaryService(DashboardProductSummaryModel);
      }
  
    async getProductSummaries(req, res) {
        try {
            const { year, month } = req.query; 
            console.log(`Year: ${year}, Month: ${month}`);
            const results = await this.dashboardProductSummaryService.getProductSummaries(year, month);
            const defaultData = results.map(result => ({ name: result.name, price: result.price, quantity: result.quantity }));
            sendSuccessResponse(res, defaultData);
        } catch (error) {
            console.error(error);
            sendErrorResponse(res, error.message, 500);
        }
    }
  }
  
  module.exports = new DashboardProductSummaryController();
  