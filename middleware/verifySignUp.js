const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateReferenceIdOrEmail = (req, res, next) => {
  // referenceId
  User.findOne({
    where: {
      referenceId: req.body.referenceId || null
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! referenceId is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email || null
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateReferenceIdOrEmail: checkDuplicateReferenceIdOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;