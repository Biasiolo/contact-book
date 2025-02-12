// App.tsx
import { useState } from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

import { Contact } from './store/slices/contactSlice';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 36px auto;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const Title = styled.h1`
  color: #6b19d6;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export default function App() {
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  function handleEditContact(contact: Contact) {
    setEditingContact(contact);
  }

  function handleFinishEditing() {
    setEditingContact(null);
  }

  return (
    <AppContainer>
      <Title>Gerenciador de Contatos</Title>

      <ContactForm contact={editingContact} onFinishEditing={handleFinishEditing} />

      <ContactList onEditContact={handleEditContact} />
    </AppContainer>
  );
}
