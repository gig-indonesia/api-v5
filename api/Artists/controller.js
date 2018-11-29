const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multiparty = require("multiparty");
const S3 = require("../../config/S3");

exports.getAll = (req, res) => {
  models.Artist.findAll({ limit: 10, order: [["createdAt", "DESC"]] })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.getNotif = (req, res) => {
  models.Artist.findOne({
    where: {
      accountId: req.decoded.id
    },
    include: [{ model: models.ArtistNotif }]
  })
    .then(host => res.send(host))
    .catch(err => console.log(err));
};

exports.getApplicant = (req, res) => {
  models.Artist.findOne({
    where: {
      accountId: req.decoded.id
    },
    include: [{ model: models.Gig }]
  })
    .then(app => res.send(app))
    .catch(err => console.log(err));
};

// exports.getAll = (req, res) => {
//   models.Artist.findAll()
//     .then(accounts => res.send(accounts))
//     .catch(err => res.send(err));
// };

exports.createArtist = (req, res) => {
  models.Artist.create(req.body)
    .then(artist => res.send(artist))
    .catch(err => console.log(err));
};
// exports.deleteOne = (req, res) => {
//   models.accounts
//     .findOne({ where: { id: req.params.id } })
//     .then(accounts => accounts.destroy())
//     .then(result => res.send(result))
//     .catch(err => res.send(err));
// };

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.Artist.findOne({
    where: {
      id: req.headers.id
    }
  })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.profile = (req, res) => {
  models.Artist.findOne({
    where: {
      accountId: req.decoded.id
    }
  })
    .then(artist => res.send(artist))
    .catch(err => console.log(err));
};

exports.update = (req, res) => {
  models.Artist.update(req.body, {
    where: {
      accountId: req.decoded.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

exports.updateprofile = async (req, res) => {
  try {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) return console.log(err);
      const userData = JSON.parse(fields.user_data[0]);

      const image = await S3.uploadImage(files.user_image[0].path);
      // console.log(req.decoded.id);
      // const host = await models.Host.findOne({
      //   where: {
      //     accountId: req.decoded.id
      //   }
      // });


      const artist = await models.Artist.findOne({
        where: { accountId: req.decoded.id }
      })
        .then(res => {
          console.log('------------- Response -------')
          console.log(res)
          console.log('--------- end ------')
          res
            .update({
              about: userData.about,
              name: userData.name,
              phone: userData.contact,
              type: userData.artistType,
              photo: image.Key
            })
            .then(upd => res.send(upd))
            .catch(err => console.log(err));
        })
        .catch();
      res.json({ artist });
    });
  } catch (err) {
    console.log(err);
  }
};
