const express = require('express');

const contactsController = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const {schemas} = require('../../models/contact');

const router = express.Router()

router.get('/', contactsController.getAll);

router.get('/:contactId', isValidId, contactsController.getById);

router.post('/', validateBody(schemas.contactsJoiSchema), contactsController.add);

// router.delete('/:contactId', contactsController.deleteById);

// router.put('/:contactId', validateBody(schemas.contactsJoiSchema), contactsController.updateById);

module.exports = router;