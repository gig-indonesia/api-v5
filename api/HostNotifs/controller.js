const models = require("../models");

exports.create = (req, res) => {
  models.HostNotif.create(req.body)
    .then(notif => res.send(notif))
    .catch(err => res.send(404));
};
