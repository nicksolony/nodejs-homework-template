const express = require('express');

const contactsController = require('../controllers/contacts');

const { validateBody, isValidId, authenticate, checkOwner } = require('../middlewares');

const {schemas} = require('../models/contact');

const router = express.Router()

router.get('/',authenticate, contactsController.getAll);

router.get('/:contactId',authenticate, checkOwner, isValidId, contactsController.getById);

router.post('/',authenticate, validateBody(schemas.contactsJoiSchema), contactsController.add);

router.delete('/:contactId',authenticate, checkOwner, isValidId, contactsController.deleteById);

router.put('/:contactId',authenticate, checkOwner, isValidId, validateBody(schemas.contactsJoiSchema), contactsController.updateById);

router.patch("/:contactId/favorite",authenticate, checkOwner, isValidId, validateBody(schemas.updateFavoriteSchema), contactsController.updateStatusContact);

module.exports = router;