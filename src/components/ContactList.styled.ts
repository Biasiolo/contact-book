// ContactList.styled.ts

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  width: 80%;
  margin: 22px auto;
`;

export const SearchLabel = styled.label`
  font-weight: 500;

`;

export const Input = styled.input`

  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : '#6a767e')};
  color: ${({ active, theme }) => (active ? theme.colors.textLight : theme.colors.text)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: background-color 0.2s ease;
  font-size: 20px;
  margin-top: 18px;
  margin-bottom: 12px;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.secondary : '#bbb'};
      color: #000000;
  }
`;

export const ContactCard = styled.li`
  background-color: #272727;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: ${({ theme }) => theme.spacing(2)} 0;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ContactInfo = styled.span`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const EditButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #000; 
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fccf39; /* um tom próximo do accent */
  }
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #c0392b; /* tom mais escuro do danger */
  }
`;
