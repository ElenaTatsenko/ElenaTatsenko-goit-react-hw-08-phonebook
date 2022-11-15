import React from 'react';
import css from '../ContactList/ContactList.module.css'
import { useDispatch, useSelector } from "react-redux"; 
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
    const isLoading = useSelector(state => state.contacts.isLoading);
   
    const onDeleteContact = id => dispatch(deleteContact(id) && toast(`Contact delete successfully`));
    
    
  

    const getFilterContacts = () => {
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
        
    };

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    
    return (
       
        <ul className={css.contactList}> {isLoading && <Loader />}{getFilterContacts().map(({ name, number, id }) => {
            return (<li key={id}  className={css.contactListItem}>
                <p className={css.contactListEl}><span className={css.contactListSpan}>Name:</span> {name}</p>
                <p className={css.contactListEl}> <span className={css.contactListSpan}>Number:</span> {number}</p>
                <button className={css.contactListDelBtn} onClick={() => onDeleteContact( id )}  type="button">Remove</button>
            </li>)
        }
            
        
        )}
        </ul>);
};
        

    
export default ContactList;

