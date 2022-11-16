import React from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { List, ListItem, ListEl, ListSpan, ListItemBtn } from './ContactList.styled';
import { selectContactItems, selectFilter, selectContactsIsLoading } from 'redux/contacts/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContactItems);
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectContactsIsLoading);
   
    const onDeleteContact = id => dispatch(deleteContact(id));
    
    
  

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
       
        <List> {isLoading && <Loader />}{getFilterContacts().map(({ name, number, id }) => {
            return (<ListItem key={id}  >
                <ListEl><ListSpan>Name:</ListSpan> {name}</ListEl>
                <ListEl> <ListSpan>Number:</ListSpan> {number}</ListEl>
                <ListItemBtn onClick={() => onDeleteContact( id ) &&  toast(`Contact delete successfully`)}  type="button">Remove</ListItemBtn>
            </ListItem>)
        }
            
        
        )}
        </List>);
};
        

    
export default ContactList;

