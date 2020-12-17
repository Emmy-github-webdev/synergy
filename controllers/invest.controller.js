const db = require("../models");
const Invest = db.invest;

// Post an investment
exports.create = (req, res) => {  
    // Save to MySQL database
    Invest.create({  
        title: req.body.title,
        description: req.body.description,
        interestRate: req.body.interestRate,
        duration: req.body.duration, 
        availableSlots: req.body.availableSlots, 
        location: req.body.location, 
        image: req.body.image
    }).then(user => {    
      // Send created customer to client
      res.json(user);
    });
};

// FETCH all investments
exports.findAll = (req, res) => {
    Invest.findAll().then(invests => {
      // Send all investments to Client
      res.json(invests);
    });
};


// Find a investment by Id
exports.findByPk = (req, res) => {  
    Invest.findByPk(req.params.investId).then(invest => {
      res.json(invest);
    })
};

// Update a single investment
exports.update = (req, res) => {
  const id = req.params.investId;
  Invest.update( { 
    title: req.body.title,
    description: req.body.description,
    interestRate: req.body.interestRate,
    duration: req.body.duration, 
    availableSlots: req.body.availableSlots, 
    location: req.body.location, 
    image: req.body.image
  }, 
    { where: {id: req.params.investId} }
    ).then(() => {
        res.status(200).json("updated successfully an investment with id = " + id);
    });
};


// Delete a single investment by Id
exports.delete = (req, res) => {
    const id = req.params.investId;
    Invest.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).json('deleted successfully an investment with id = ' + id);
    });
  };