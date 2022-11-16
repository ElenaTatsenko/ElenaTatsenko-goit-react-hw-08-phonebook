import React from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { changeFilter } from 'redux/contacts/filterSlice'
import { FilterLabel, FilterInput, FilretContainer } from './ContactFilter.styled';
import { selectFilter } from 'redux/contacts/selectors';

const ContactFilter = () => {

    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilters = e => {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <FilretContainer>
            <FilterLabel>Find contact by name
                <FilterInput type="text" value={value} onChange={changeFilters}></FilterInput>
            </FilterLabel>
        </FilretContainer>
    )
};
   

export default ContactFilter;

