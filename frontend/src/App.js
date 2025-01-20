import React, { useState, useEffect } from 'react';
import { getContacts } from './api';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContacts();
        setContacts(response.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
      }
    };
    fetchContacts();
  }, []);

  const handleContactAdded = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleContactDeleted = (contactId) => {
    setContacts(contacts.filter(contact => contact._id !== contactId));
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm onContactAdded={handleContactAdded} />
      <ContactList contacts={contacts} onDelete={handleContactDeleted} />
    </div>
  );
};

export default App;
