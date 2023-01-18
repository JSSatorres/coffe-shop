const User = require("../models/user-model");
const bcryptjs = require("bcryptjs");
/* const { validateEmail } = require('../helpers/db-validators'); */
/* const inputValidator = require ("../middlewares") */

const getUser = async (req, res) => {
  const { limit = 5, since = 0 } = req.query;

  // lanza una promesa y luega la otra con la forma del promise.all lanza todas las promesas a la vez

  /* const total = await  User.countDocuments({state :true}),
    const users = await User.find({state :true})
        .limit(Number(limit))
        .skip(Number(since))

    res.json({
        total,
        users
    }) */

  const [total, users] = await Promise.all([
    User.countDocuments({ state: true }),
    User.find({ state: true }).limit(Number(limit)).skip(Number(since)),
  ]);

  res.json({
    total,
    users,
  });
};

const addUser = async (req, res) => {
  const { name, email, password, rol } = req.body;
  const user = new User({ name, email, password, rol });

  //authenticate unique email

  //encrypt password

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //safe user in BD
  await user.save();

  res.json({
    msg: "post Api",
    user,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  //delete user old method now you never delete somethig
  /*const user = await User.findByIdAndDelete(id) */
  const user = await User.findByIdAndUpdate(id, { state: false });

  res.json({
    id,
  });
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { _id, google, email, ...rest } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, rest);
  res.json({
    msg: "put Api",
    id,
  });
};

module.exports = { getUser, addUser, deleteUser, editUser };
