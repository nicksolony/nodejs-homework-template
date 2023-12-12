const express = require('express');

const ctrl = require("../../controllers/auth");

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/signup", validateBody(schemas.userJoiSchema), ctrl.signup);
// не пойму что не так в задании сказано "Create an endpoint /users/signup", у меня полный URL - http://localhost:3000/api/users/signup??

// signin
router.post("/login", validateBody(schemas.userJoiSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", validateBody(schemas.subscriptionUpdateSchema), authenticate, ctrl.updateSubscription);

module.exports = router;