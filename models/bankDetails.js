module.exports = (sequelize, Sequelize) => {
    const bankDetail = sequelize.define("bankDetails", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      accountName: {
        type: Sequelize.STRING
      },
      BankName: {
        type: Sequelize.STRING
      },
      AccountNumber: {
        type: Sequelize.INTEGER
      },
      BVN: {
        type: Sequelize.INTEGER
      },
      swiftCode: {
        type: Sequelize.INTEGER
      },
      cardNumber: {
        type: Sequelize.INTEGER
      },
      cvv_cvs: {
        type: Sequelize.INTEGER
      },
      month: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      }
    });
  
    return bankDetail;
  };