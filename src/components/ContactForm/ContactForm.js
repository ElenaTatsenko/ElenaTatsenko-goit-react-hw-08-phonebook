import React, { useState,  } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux"; 
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Input, Label } from 'components/Form.styled';
import { selectContactItems } from 'redux/contacts/selectors';
import { Button } from 'Btn.styled';

export default function ContactForm() {

  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContactItems);

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  const hendleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? toast(`${name} is already in contacts.`) :
      dispatch(addContact({ name, number }))
      && toast(`Contact ${name} added successfully`)
      && reset();
    }

    const reset = () => {
      setName('')
      setNumber ('')
          
    }
 
  
    const inputNameId = nanoid();
    const inputTelId = nanoid();
  

        return (
     <Form onSubmit={handleSubmit}>
        <Label htmlFor={inputNameId} >
            Name
          <Input
            id={inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={hendleInputChange}>
          </Input>
        </Label>
        <Label htmlFor={inputTelId}>
            Number
          <Input
            id={inputTelId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={hendleInputChange}>
          </Input>
        </Label>
            <Button variant="text" type="submit" >Add contact</Button>
            
      </Form>
        );
    }


