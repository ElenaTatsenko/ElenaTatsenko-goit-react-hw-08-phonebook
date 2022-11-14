import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css'
import { useDispatch } from "react-redux"; 
import authOperetions from 'redux/auth/operations';
//import { useNavigate } from 'react-redux';
import Button from '@mui/material/Button';



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
        reset();
        //navigate('/contacts');
    };
    const reset = () => {
        setEmail('')
        setPassword('')
    }
  
    const inputNameId = nanoid();
    const inputTelId = nanoid();
    
    return (
        <form className={css.conactForm} onSubmit={handleSubmit}>
            <label htmlFor={inputNameId} className={css.conactFormLabel}>
                Email
                <input
                    className={css.conactFormItem}
                    id={inputNameId}
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    value={email}
                    onChange={hendleInputChange}>
                </input>
            </label>
            <label htmlFor={inputTelId} className={css.conactFormLabel}>
                Password
                <input
                    className={css.conactFormItem}
                    id={inputTelId}
                    type="password"
                    name="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                    required
                    value={password}
                    onChange={hendleInputChange}>
                </input>
            </label>
            <Button
                type="submit"
                variant="contained"
                disableElevation
            >Login</Button>
        </form>
    ); 

};