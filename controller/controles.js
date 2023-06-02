const { mongoosemodel, mongoosemodel_2 } = require('../model/mongoosemodel');

fetch_all = (req, res) => {
  mongoosemodel
    .find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).send(`Error: ${err.message}`);
    });
};

fetch_one = (req, res) => {
  const url_id = req.params.id;
  mongoosemodel
    .findOne({ _id: url_id })
    .then(result => {
      if (!result) {
        res.status(404).send('Not found');
      } else {
        res.send(result);
      }
    })
    .catch(err => {
      res.status(500).send(`Error: ${err.message}`);
    });
};

sign_up = (req, res) => {
  const { username, email, password, phonenumber } = req.body;

  const data = new mongoosemodel_2({
    username,
    email,
    password,
    phonenumber
  });

  data
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      if (error.code === 11000) {
         const dublicatevalue = Object.keys(error.keyValue)[0];
        res.status(400).json({error:`the ${dublicatevalue} is already taken`})
      } else {
        res.status(500).send(`Error: ${error.message}`);
      }
    });
};

log_in = (req, res) => {
  const { email, password, username, phonenumber } = req.body;

  if (!email) {
    res.status(400).send('Email is required!');
  } else if (!username) {
    res.status(400).send('Username is required!');
  } else if (!phonenumber) {
    res.status(400).send('Phone number is required!');
  } else if (!password) {
    res.status(400).send('Password is required!');
  } else {
    mongoosemodel_2
      .findOne({ email })
      .then(result => {
        if (!result) {
          res.status(404).send('User not found.');
        }
           else if (result.username !== username){
            res.status(400).send('User name is incorrect')
           }

           else if (result.phonenumber !== phonenumber){
            res.status(400).send('Phone number is incorrect')
           }
         
        else if (result.password !== password) {
          res.status(400).send(' Password is incorrect.');
        } 
        
        
        
        else {
          res.send('Login successful.');
        }
      })
      .catch(err => {
        res.status(500).send(`Error: ${err.message}`);
      });
  }
};

// Rest of the functions remain unchanged

module.exports = {
  fetch_all,
  fetch_one,
  sign_up,
  log_in,
};
