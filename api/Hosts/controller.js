const models = require("../models");

exports.showHost = (req, res) => {
  console.log(req.decoded);
  console.log("-------------------");
  models.Host.findOne({
    where: {
      accountId: req.decoded.id
    },
    include: [{ model: models.Gig }]
  })
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.showNotif = (req, res) => {
  console.log(req.decoded);

  models.Host.findOne({
    where: {
      id: req.decoded.id
    },
    include: [{ model: models.HostNotif }]
  })
    .then(host => res.send(host))
    .catch(err => console.log(err));
};

exports.createHost = (req, res) => {
  models.Host.create(req.body)
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.updateHost = (req, res) => {
  models.Host.update(req.body, {
    where: {
      id: req.decoded.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.findAccount = (req, res) => {
  // models.Host.getAccounts({ where: { id: req.params.id } })
  //   .then(acc => res.send(acc))
  //   .catch(err => console.log(404));
  console.log(req.params.id);
  models.Host.findOne({
    where: {
      id: req.decoded.id
    },
    include: [{ model: models.Account }]
  })
    .then(acc => res.send(acc))
    .catch(err => res.send(err));
};

// exports.showGigs = (req, res) => {
//   models.Host.findOne({ where: { id: req.params.id }, include: [models.Gig] })
//     .then(gigs => res.send(gigs))
//     .catch(err => console.log(err));
// };
