import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux"; 
import authOperetions from 'redux/auth/operations';
import { Form, Input, Label } from 'components/Form.styled';
import { Button } from 'Btn.styled';


export default function LoginForm() {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const hendleInputChange = event => {
        switch (event.currentTarget.name) {
            case 'email':
                setEmail(event.currentTarget.value);
                break;
            case 'password':
                setPassword(event.currentTarget.value);
                break;
            default:
                return;
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperetions.logIn({ email, password }));
        
    };
    
  
    const inputNameId = nanoid();
    const inputTelId = nanoid();
    
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={inputNameId}>
                Email
                <Input
                    id={inputNameId}
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    value={email}
                    onChange={hendleInputChange}>
                </Input>
            </Label>
            <Label htmlFor={inputTelId}>
                Password
                <Input
                    id={inputTelId}
                    type="password"
                    name="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                    required
                    value={password}
                    onChange={hendleInputChange}>
                </Input>
            </Label>
            <Button 
                type="submit"
                
            >Login</Button>
        </Form>
    ); 

};