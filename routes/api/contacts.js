const express = require('express');

const contactsController = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const {schemas} = require('../../models/contact');

const router = express.Router()

router.get('/', contactsController.getAll);

router.get('/:contactId', isValidId, contactsController.getById);

router.post('/', validateBody(schemas.contactsJoiSchema), contactsController.add);

router.delete('/:contactId', isValidId, contactsController.deleteById);

router.put('/:contactId', isValidId, validateBody(schemas.contactsJoiSchema), contactsController.updateById);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), contactsController.updateStatusContact);

module.exports = router;