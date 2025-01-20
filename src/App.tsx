import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Contact {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Lấy danh sách liên hệ
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  // Thêm liên hệ mới
  const handleAddContact = async (newContact: Contact) => {
    await axios.post('http://localhost:5000/api/contacts', newContact);
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>{contact.name} - {contact.phone} - {contact.email}</li>
        ))}
      </ul>
      <button onClick={() => handleAddContact({
        _id: '', name: 'New Contact', phone: '123456789', email: 'new@example.com', address: 'Somewhere'
      })}>
        Add New Contact
      </button>
    </div>
  );
};

export default App;

