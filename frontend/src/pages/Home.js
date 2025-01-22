// src/pages/Home.js
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

// Mô phỏng dữ liệu liên hệ ban đầu
const initialContacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
];

const Home = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts([
      ...contacts,
      { id: contacts.length + 1, name: newContact.name, email: newContact.email, phone: newContact.phone },
    ]);
  };

  return (
    <div>
      <h1>My Contact App</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
