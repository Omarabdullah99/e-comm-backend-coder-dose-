const { UserModel } = require("../model/UserModel");

exports.fetchAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).exec();
    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
};

exports.findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
