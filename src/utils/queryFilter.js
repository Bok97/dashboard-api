const { Op } = require('sequelize');


function generateDate(year, month) {
  let whereClause;
  if (month !== null && month !== undefined && month !== '') {
    console.log('hi1')
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    whereClause = {
      date: {
        [Op.gte]: startDate,
        [Op.lte]: endDate
      }
    };
  } else {
    console.log('hi2')
    const startOfYear = new Date(year, 0, 1);
    let endOfYear;
    if (year == new Date().getFullYear()) {
      endOfYear = new Date();
    } else {
      endOfYear = new Date(year, 11, 31);
    }
    whereClause = {
      date: {
        [Op.gte]: startOfYear,
        [Op.lte]: endOfYear
      }
    };
  }

  return whereClause;
}

module.exports = { generateDate };
