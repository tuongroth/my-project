import React from 'react';
import { deleteContact } from '../api';

const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteContact(contact._id);
      onDelete(contact._id);
    } catch (err) {
      console.error('Error deleting contact:', err);
    }
  };

  return (
    <li>
      <strong>{contact.name}</strong>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
