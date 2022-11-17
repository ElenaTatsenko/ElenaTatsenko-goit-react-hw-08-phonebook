import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux"; 
import {register} from 'redux/auth/operations';
import { Form, Input, Label } from 'components/Form.styled';
import { Button } from 'Btn.styled';

export default function RegisterForm() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const hendleInputChange = event => {
        switch (event.currentTarget.name) {
            case 'name':
                setName(event.currentTarget.value);
                break;
            case 'email':
                setEmail(event.currentTarget.value);
                break;
            case 'password':
                setPassword(event.currentTarget.value);
                break;
            default:
                return;
        }
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(register({ name, email, password }));
        reset();
    }

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
          
  }
  
    const inputNameId = nanoid();
    const inputPasswordId = nanoid();
    const inputEmailId = nanoid();
  

    return (
        <Form onSubmit={handleSubmit} >
            <Label >
                Name
                <Input
                    id={inputNameId}
                    type="text"
                    name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={hendleInputChange}>
                </Input>
            </Label>
            <Label >
                Email
                <Input
                    id={inputEmailId}
                    type="email"
                    name="email"
                    
                    required
                    value={email}
                    onChange={hendleInputChange}>
                </Input>
            </Label>
            <Label>
                Password
                <Input
                    id={inputPasswordId}
                    type="password"
                    name="password"
                    
                    required
                    value={password}
                    onChange={hendleInputChange}>
                </Input>
            </Label>
        <Button  type="submit">Register</Button>
      </Form>
        );
    }