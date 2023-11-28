const express = require('express');

const contactsController = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router()

router.get('/', contactsController.getAll);

router.get('/:contactId', contactsController.getById);

router.post('/', validateBody(schemas.contactsSchema), contactsController.add);

router.delete('/:contactId', contactsController.deleteById);

router.put('/:contactId', validateBody(schemas.contactsSchema), contactsController.updateById);

module.exports = router;
