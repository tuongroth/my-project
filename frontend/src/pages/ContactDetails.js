// src/pages/ContactDetails.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ContactDetails() {
  const { contactId } = useParams();  // Lấy ID từ URL
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Lấy chi tiết liên hệ từ API hoặc dữ liệu mẫu
    fetch(`/api/contacts/${contactId}`)
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact:', error));
  }, [contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
      <Link to="/">Back to Contact List</Link>  {/* Quay lại danh bạ */}
    </div>
  );
}

export default ContactDetails;
