import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';

// Get all contacts
export const getContacts = () => {
  return axios.get(API_URL);
};

// Add a new contact
export const addContact = (contact) => {
  return axios.post(API_URL, contact);
};

// Update a contact
export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/${id}`, contact);
};

// Delete a contact
export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
