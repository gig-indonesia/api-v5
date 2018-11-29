const models = require("../models");

exports.create = (req, res) => {
  models.ArtistNotifs.create(req.body)
    .then(notif => res.send(notif))
    .catch(err => console.log(err));
};
