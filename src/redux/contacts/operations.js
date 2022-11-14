import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//const baseURL = 'https://connections-api.herokuapp.com';



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('/contacts');
        
 
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.mesage);
    }
}
 );

export const addContact = createAsyncThunk('contacts/addContact', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('/contacts', data);
        console.log(response.data)
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        console.log({contactId})
        return response.data;
    }
    catch (error) {
        rejectWithValue(error.message);
       
    }
  }
);