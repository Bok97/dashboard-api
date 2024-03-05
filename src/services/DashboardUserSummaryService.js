const { Sequelize } = require('sequelize');
const { generateDate } = require('../utils/queryFilter');

class DashboardUserSummaryService {
    constructor(DashboardUserSummaryModel) {
      this.dashboardUserSummaryModel = DashboardUserSummaryModel;
    }
  
    async getTotalUsersByGender(year = new Date().getFullYear(), month = null) {
      const whereClause = generateDate(year, month);
      const results = await this.dashboardUserSummaryModel.findAll({
        where: whereClause,
        attributes: [
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('totalMaleUsers')), 0), 'totalMale'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('totalFemaleUsers')), 0), 'totalFemale'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('totalOtherUsers')), 0), 'totalOther']
        ],
        raw: true,
      });

        if (results.length) {
            return [
                { name: 'Male', y: parseInt(results[0].totalMale) },
                { name: 'Female', y: parseInt(results[0].totalFemale) },
                { name: 'Other', y: parseInt(results[0].totalOther)}
            ];
        }
        return [];
    }

    async getTotalUsersByAge(year = new Date().getFullYear(), month = null) {
        const whereClause = generateDate(year, month);
        const results = await this.dashboardUserSummaryModel.findAll({
          where: whereClause,
          attributes: [
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('ageBelow18')), 0), 'below18'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age18To24')), 0), 'age18To24'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age25To29')), 0), 'age25To29'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age30To34')), 0), 'age30To34'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age35To39')), 0), 'age35To39'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age40To44')), 0), 'age40To44'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('age45To49')), 0), 'age45To49'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('ageAbove50')), 0), 'above50'],
          ],
          raw: true,
        });
  
          if (results.length) {
            const categories = ['Below 18', '18 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44', '45 - 49', 'Above 50'];
            const data = [
                parseInt(results[0].below18),
                parseInt(results[0].age18To24),
                parseInt(results[0].age25To29),
                parseInt(results[0].age30To34),
                parseInt(results[0].age35To39),
                parseInt(results[0].age40To44),
                parseInt(results[0].age45To49),
                parseInt(results[0].above50)
            ];
            return { categories, data };
          }
          return [];
      }


    async getTotalUsersByState(year = new Date().getFullYear(), month = null) {
        const whereClause = generateDate(year, month);
        const results = await this.dashboardUserSummaryModel.findAll({
          where: whereClause,
          attributes: [
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateJohor')), 0), 'stateJohor'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateKedah')), 0), 'stateKedah'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateKelantan')), 0), 'stateKelantan'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateMelaka')), 0), 'stateMelaka'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateNegeriSembilan')), 0), 'stateNegeriSembilan'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('statePahang')), 0), 'statePahang'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('statePerak')), 0), 'statePerak'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('statePerlis')), 0), 'statePerlis'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('statePulauPinang')), 0), 'statePulauPinang'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateSabah')), 0), 'stateSabah'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateSarawak')), 0), 'stateSarawak'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateSelangor')), 0), 'stateSelangor'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateTerengganu')), 0), 'stateTerengganu'],
            [Sequelize.fn('COALESCE', Sequelize.fn('sum', Sequelize.col('stateKualaLumpur')), 0), 'stateKualaLumpur'],
          ],         
          raw: true,
        });
  
          if (results.length) {
            const categories = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur'];
            const data = [
                parseInt(results[0].stateJohor),
                parseInt(results[0].stateKedah),
                parseInt(results[0].stateKelantan),
                parseInt(results[0].stateMelaka),
                parseInt(results[0].stateNegeriSembilan),
                parseInt(results[0].statePahang),
                parseInt(results[0].statePerak),
                parseInt(results[0].statePerlis),
                parseInt(results[0].statePulauPinang),
                parseInt(results[0].stateSabah),
                parseInt(results[0].stateSarawak),
                parseInt(results[0].stateSelangor),
                parseInt(results[0].stateTerengganu),
                parseInt(results[0].stateKualaLumpur)
            ];
            return { categories, data };
          }
          return [];
      }
}

module.exports = DashboardUserSummaryService;
