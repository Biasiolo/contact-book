import { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './store/slices/contactSlice';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const ContentWrapper = styled.div`
  flex-grow: 1; /* Faz o conteúdo expandir e empurrar o footer para baixo */
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px; /* Espaço entre os itens */
  padding: 12px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Hr = styled.hr`
  width: 80%;
  margin: 0 auto;
  margin-top: 48px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
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
      <ContentWrapper>
        <Title>Gerenciador de Contatos</Title>
        <ContactForm contact={editingContact} onFinishEditing={handleFinishEditing} />
        <ContactList onEditContact={handleEditContact} />
      </ContentWrapper>

      {/* Footer */}
      <Hr />
      <Footer>
        <span>© {new Date().getFullYear()} Desenvolvido por Biasiolo</span>
        <SocialIcons>
          <IconLink 
            href="https://www.linkedin.com/in/rafael-biasiolo/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink 
            href="https://github.com/Biasiolo/contact-book" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </IconLink>
        </SocialIcons>
      </Footer>
    </AppContainer>
  );
}
