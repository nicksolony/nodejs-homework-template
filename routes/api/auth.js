const express = require('express');

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");

const {userJoiSchema} = require("../../models/user");

const router = express.Router();

// signup
router.post("/signup", validateBody(userJoiSchema), ctrl.signup);

// signin
router.post("/login", validateBody(userJoiSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;