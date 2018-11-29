const models = require("../models");

exports.create = async (req, res) => {
  const artist = await models.Artist.findOne({
    where: {
      accountId: req.decoded.id
    }
  });

  const applicant = await models.Applicant.create({
    status: req.body.status,
    gigsId: req.body.gigsId,
    artistId: artist.id
  });

  res.send(applicant);
};

exports.update = (req, res) => {
  console.log(req.body);
  console.log("-------------");
  models.Applicant.findOne({
    where: {
      gigsId: req.body.gigsId,
      artistId: req.body.artistId
    }
  })
    .then(applicant => {
      console.log("------- applicant --------");
      console.log(applicant);
      console.log("--------applicant end --------");
      applicant
        .update({ status: req.body.status })
        .then(app => res.send(app))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
