const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUser,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/user-controllers");
const {
  validateRole,
  validateEmail,
  validateUserId,
} = require("../helpers/db-validators");
const { inputValidator } = require("../middlewares/inputValidate");

const routerUser = Router();

routerUser.get("/usuarios", getUser);

routerUser.post(
  "/usuarios",
  [
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("password", "el password es obligatorio y mas de  5 letras").isLength(
      { min: 6 }
    ),
    check("email").custom((email) => validateEmail(email)),
    check("rol").custom((rol) => validateRole(rol)),
    inputValidator,
  ],
  addUser
);

routerUser.delete(
  "/usuarios/:id",
  [
    check("id", "el id no es valido").isMongoId(),
    check("id").custom(validateUserId),
    inputValidator,
  ],
  deleteUser
);

routerUser.put(
  "/usuarios/:id",
  [
    check("id", "el id no es valido").isMongoId(),
    check("id").custom(validateUserId),
    check("rol").custom((rol) => validateRole(rol)),
    inputValidator,
  ],
  editUser
);

module.exports = routerUser;
