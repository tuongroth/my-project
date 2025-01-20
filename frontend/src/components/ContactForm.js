import React, { useState } from 'react';
import { addContact } from '../api';

const ContactForm = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = { name, phone, email, address };

    try {
      const response = await addContact(contact);
      onContactAdded(response.data); // Notify parent component
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
    } catch (err) {
      console.error('Error adding contact:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Address" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        required 
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
