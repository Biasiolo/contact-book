// ContactForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact, Contact } from '../store/slices/contactSlice';
import {
  Card,
  FormTitle,
  Label,
  Input,
  Button
} from './ContactForm.styled';

interface ContactFormProps {
  contact?: Contact | null;
  onFinishEditing?: () => void;
}

// Função auxiliar para formatar o telefone
function formatPhone(value: string): string {
  // Remove tudo que não é dígito e limita a 11 caracteres
  const digits = value.replace(/\D/g, '').slice(0, 11);

  // Se não tiver dígitos, retorna vazio
  if (!digits) return '';

  const length = digits.length;

  // 1) Se tiver até 2 dígitos, só exibe "(", "DDD" parcial
  if (length < 3) {
    // Ex.: digitou "1" => "(1"
    return '(' + digits;
  }

  // 2) Se tiver de 3 até 6 dígitos, formatamos como "(99) 999" (sem o hífen ainda)
  if (length < 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  // 3) Se tiver de 7 até 11 dígitos, exibe no formato completo "(99) 99999-9999"
  //    Observação: se tiver só 10 dígitos, ex.: "(99) 9999-9999" (sem o 'x' a mais)
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContactForm({ contact, onFinishEditing }: ContactFormProps) {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Se estivermos editando um contato, carregamos os dados iniciais
  useEffect(() => {
    if (contact) {
      setFullName(contact.fullName);
      setEmail(contact.email);
      setPhone(contact.phone);
    } else {
      setFullName('');
      setEmail('');
      setPhone('');
    }
  }, [contact]);

  // Formulário de envio
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !phone) {
      alert('Preencha todos os campos');
      return;
    }

    // Aqui podemos checar se o usuário inseriu 11 dígitos (caso seja obrigatório):
    // const digits = phone.replace(/\D/g, '');
    // if (digits.length !== 11) {
    //   alert('O telefone deve ter 11 dígitos (ex.: (XX) 9XXXX-XXXX)');
    //   return;
    // }

    if (contact) {
      // Edição
      dispatch(updateContact({ ...contact, fullName, email, phone }));
      onFinishEditing?.();
    } else {
      // Criação
      dispatch(addContact({
        id: Date.now().toString(),
        fullName,
        email,
        phone,
      }));
    }

    // Reset
    setFullName('');
    setEmail('');
    setPhone('');
  };

  const isEditing = !!contact;

  // Função que formata o telefone conforme o usuário digita
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  return (
    <Card onSubmit={handleSubmit}>
      <FormTitle>
        {isEditing ? 'Editar Contato' : 'Adicionar Novo Contato'}
      </FormTitle>

      <Label>Nome Completo</Label>
      <Input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Label>E-mail</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label>Telefone</Label>
      <Input
        type="text"
        value={phone}
        onChange={handlePhoneChange} // <- Chamamos a função
      />

      <Button type="submit">
        {isEditing ? 'Atualizar Contato' : 'Adicionar Contato'}
      </Button>
    </Card>
  );
}
