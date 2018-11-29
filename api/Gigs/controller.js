const multiparty = require("multiparty");
const S3 = require("../../config/S3");
const models = require("../models");

exports.getAll = (req, res) => {
  models.Gig.findAll({ order: [["createdAt", "DESC"]] })
    .then(Gig => res.send(Gig))
    .catch(err => console.log(err));
};

exports.getApplicant = (req, res) => {
  models.Gig.findOne({
    where: {
      id: req.params.id
    },
    include: [{ model: models.Artist }]
  })
    .then(app => res.send(app))
    .catch(err => console.log(err));
};

exports.create = async (req, res) => {
  try {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) return console.log(err);
      const userData = JSON.parse(fields.user_data[0]);

      const image = await S3.uploadImage(files.user_image[0].path);
      console.log(req.decoded.id);
      const host = await models.Host.findOne({
        where: {
          accountId: req.decoded.id
        }
      });

      console.log(host);

      const gig = await models.Gig.create({
        title: userData.title,
        budget: userData.budget,
        date: userData.date,
        description: userData.description,
        location: userData.location,
        latLng: userData.latLng,
        hostId: host.id,
        time: userData.time,
        photo: image.Key
      });

      res.json({ gig });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const gig = await models.Gig.findOne({ where: { id: req.decoded.id } });

    await S3.deleteImage(gig.image);

    await gig.destroy();

    res.json({ gig });
  } catch (err) {
    console.log(err);
  }
};

exports.search = (req, res) => {
  models.Gigs.findAll({
    where: req.query
  })
    .then(Gig => res.send(Gig))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.Gigs.update(req.body, {
    where: {
      id: req.decoded.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};
