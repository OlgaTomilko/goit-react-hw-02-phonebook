import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

const Phonebook = () => {
  const [items, setItems] = useState({
    contacts: [],
    filter: "",
  });

  const handleInputChange = (event) => {
    const option = event.target.id;
    setItems((prevState) => ({ ...prevState, [option]: event.target.value }));
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    isAlreadyContact()
      ? alert(`${items.name} is already in contacts.`)
      : setItems((prevState) => ({
          ...prevState,
          contacts: [
            ...items.contacts,
            { id: uuidv4(), name: items.name, number: items.number },
          ],
        }));
  };

  const handleInputFind = (event) => {
    setItems((prevState) => ({
      ...prevState,
      filter: event.target.value,
    }));
  };

  const filterContactsList = () => {
    const filterContacts = items.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(items.filter.toLowerCase())
    );
    return filterContacts;
  };

  const isAlreadyContact = () => {
    const Names = items.contacts.map((contact) => contact.name);
    const isAlreadyContact = Names.includes(items.name);
    return isAlreadyContact;
  };

  const index = (value) => {
    const ids = items.contacts.map((contact) => contact.id);
    const index = ids.indexOf(value);
    return index;
  };

  const handleButtonDelete = (event) => {
    items.contacts.splice(index(event.target.id), 1);
    setItems((prevState) => ({ ...prevState }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
      />

      <h2>Contacts</h2>
      <Filter onInputFind={handleInputFind} />
      <ContactList
        filter={items.filter}
        contacts={items.contacts}
        onFilter={filterContactsList}
        onDelete={handleButtonDelete}
      />
    </div>
  );
};

export default Phonebook;
