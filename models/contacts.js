// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, './contacts.json');
const { model } = require('mongoose');
const { contactsMongooseSchema } = require('../schemas');
const { handleMongooseError } = require("../helpers");

contactsMongooseSchema.post("save", handleMongooseError);

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contactsId = String(contactId);
  const contacts = await listContacts();
  const contact = contacts.find(contact =>contact.id === contactsId);
  return contact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactsId = String(contactId);
  const index = contacts.findIndex(contact => contact.id === contactsId);
  if (index === -1) {
    return null;
  };
  const [deletedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

const addContact = async ({name, email, phone}) => {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (id, body) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === id);
    if(index === -1){
        return null;
    }
    contacts[index] = {id, ...body};
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}