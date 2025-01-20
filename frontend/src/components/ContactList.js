import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact._id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
