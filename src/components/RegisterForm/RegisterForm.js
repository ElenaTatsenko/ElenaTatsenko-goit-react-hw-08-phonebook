import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css'
import { useDispatch } from "react-redux"; 
import {register} from 'redux/auth/operations';;


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
    const inputTelId = nanoid();
  

    return (
        <form className={css.conactForm} onSubmit={handleSubmit}>
            <label htmlFor={inputNameId} className={css.conactFormLabel}>
                Name
                <input
                    className={css.conactFormItem}
                    id={inputNameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={hendleInputChange}>
                </input>
            </label>
            <label htmlFor={inputTelId} className={css.conactFormLabel}>
                Email
                <input
                    className={css.conactFormItem}
                    id={inputTelId}
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
        <button className={css.contactFormBtn } type="submit">Register</button>
      </form>
        );
    }