const { Sequelize, Op } = require('sequelize');
const { generateDate } = require('../utils/queryFilter');

class DashboardProductSummaryService {
    constructor(DashboardProductSummaryModel) {
      this.dashboardProductSummaryModel = DashboardProductSummaryModel;
    }
  
    async getProductSummaries(year = new Date().getFullYear(), month = null) {
    const whereClause = generateDate(year, month);
    
      const results = await this.dashboardProductSummaryModel.findAll({
        where: whereClause,
        attributes: [
            [Sequelize.fn('COALESCE', Sequelize.cast(Sequelize.fn('SUM', Sequelize.col('totalNikePrice')), 'DECIMAL(10,2)'), '0.00'), 'totalNikePrice'],
            [Sequelize.fn('COALESCE', Sequelize.cast(Sequelize.fn('SUM', Sequelize.col('totalAdidasPrice')), 'DECIMAL(10,2)'), '0.00'), 'totalAdidasPrice'],
            [Sequelize.fn('COALESCE', Sequelize.cast(Sequelize.fn('SUM', Sequelize.col('totalPumaPrice')), 'DECIMAL(10,2)'), '0.00'), 'totalPumaPrice'],
            [Sequelize.fn('COALESCE', Sequelize.cast(Sequelize.fn('SUM', Sequelize.col('totalUnderArmourPrice')), 'DECIMAL(10,2)'), '0.00'), 'totalUnderArmourPrice'],
            [Sequelize.fn('COALESCE', Sequelize.cast(Sequelize.fn('SUM', Sequelize.col('totalLiNingPrice')), 'DECIMAL(10,2)'), '0.00'), 'totalLiNingPrice'],          
            [Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('totalNikeQuantity')), 0), 'totalNikeQuantity'],
            [Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('totalAdidasQuantity')), 0), 'totalAdidasQuantity'],
            [Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('totalPumaQuantity')), 0), 'totalPumaQuantity'],
            [Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('totalUnderArmourQuantity')), 0), 'totalUnderArmourQuantity'],
            [Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('totalLiNingQuantity')), 0), 'totalLiNingQuantity'],
        ],        
        raw: true,
      });

        if (results.length) {
            return [
                { name: 'Nike', price: parseFloat(results[0].totalNikePrice), quantity: parseInt(results[0].totalNikeQuantity) },
                { name: 'Adidas', price: parseFloat(results[0].totalAdidasPrice), quantity: parseInt(results[0].totalAdidasQuantity) },
                { name: 'Puma', price: parseFloat(results[0].totalPumaPrice), quantity: parseInt(results[0].totalPumaQuantity) },
                { name: 'Under Armour', price: parseFloat(results[0].totalUnderArmourPrice), quantity: parseInt(results[0].totalUnderArmourQuantity) },
                { name: 'Li-Ning', price: parseFloat(results[0].totalLiNingPrice), quantity: parseInt(results[0].totalLiNingQuantity) }
            ];
        }
        return [];
    }
}

module.exports = DashboardProductSummaryService;
