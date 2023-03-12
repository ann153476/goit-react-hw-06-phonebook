import { nanoid } from 'nanoid';
const { createSlice } = require('@reduxjs/toolkit');

const conatctSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    getfilter: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
});

export const { addContact, deleteContact, getfilter } = conatctSlice.actions;
const contactsReducer = conatctSlice.reducer;

export default contactsReducer;
