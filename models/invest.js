module.exports = (sequelize, Sequelize) => {
    const Invest = sequelize.define('invests', {
      
         title: {
              type: Sequelize.STRING
         },
         description: {
              type: Sequelize.STRING
         },
         interestRate: {
              type: Sequelize.STRING
         },
         duration: {
              type: Sequelize.STRING
         },
         availableSlots: {
              type: Sequelize.STRING
         },
         location: {
              type: Sequelize.STRING
         },
         image: {
              type: Sequelize.STRING
         }

    });
    
    return Invest;
  }