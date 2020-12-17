module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      firstName: {
        type: Sequelize.STRING
    },
    LastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    confirmPassword: {
        type:Sequelize.STRING
    },
    dailingCode: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    referenceId: {
        type: Sequelize.INTEGER
    },
    countryId: {
        type: Sequelize.STRING
    },
    howDoYouKnowUs: {
        type: Sequelize.STRING
    }

    });
  
    return User;
  };