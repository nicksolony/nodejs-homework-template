const express = require('express');

const ctrl = require("../controllers/auth");

const {validateBody, authenticate, upload} = require("../middlewares");

const {schemas} = require("../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.userJoiSchema), ctrl.signup);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

// router.post("/verify", validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);

// signin
router.post("/login", validateBody(schemas.userJoiSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

router.patch("/", validateBody(schemas.subscriptionUpdateSchema), authenticate, ctrl.updateSubscription);

module.exports = router;