const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");

module.exports.getAll = (req, res) => {
  models.Account.findAll()
    .then(accounts => {
      console.log(accounts);
      res.send(accounts);
    })
    .catch(err => console.log(err));
};

exports.login = (req, res) => {
  const Op = Sequelize.Op;

  models.Account.findOne({
    where: {
      // email: req.body.email
      [Op.or]: [{ email: req.body.login }, { username: req.body.login }]
    }
  })
    .then(async account => {
      if (account === null) {
        return res.send("account not found");
      }
      const valuePassword = bcrypt.compareSync(
        req.body.password,
        account.password
      );

      if (valuePassword === false) {
        return res.send("password is not valid");
      }

      let accountType = "";
      const host = await models.Host.findOne({
        where: { accountId: account.id }
      }).then(artist => artist);
      const artist = await models.Artist.findOne({
        where: { accountId: account.id }
      }).then(artist => artist);

      console.log(host, artist);

      if (host === null || host === undefined) {
        accountType = "Artist";
      } else {
        accountType = "Host";
      }

      const token_data = {
        payload: {
          id: account.id,
          username: account.username,
          email: account.email
        },
        secret: process.env.JWT_SECRET,
        options: {
          expiresIn: "7d"
        }
      };
      const token = jwt.sign(
        token_data.payload,
        token_data.secret,
        token_data.options
      );

      res.send({
        message: "You are logged in",
        id: account.id,
        token: token,
        accountType: accountType
      });
    })
    .catch(err => res.send(err));
};

//insert data---------------------
exports.register = (req, res) => {
  const SALT_WORK_FACTOR = 7;
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

  req.body.password = bcrypt.hashSync(req.body.password, salt);
  models.Account.create(req.body)
    .then(account => res.send(account))
    .catch(err => res.send(err));
};

exports.deleteOne = (req, res) => {
  models.Account.findOne({ where: { id: req.params.id } })
    .then(accounts => accounts.destroy())
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// exports.deleteAll = (req, res) => {
//   models.Accounts
// }

exports.search = (req, res) => {
  models.Account.findAll({
    where: req.query
  })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.Account.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.getCurrentUserData = (req, res) => {
  res.send(req.account);
};
