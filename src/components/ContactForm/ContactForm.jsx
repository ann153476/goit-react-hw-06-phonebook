import React, { useState } from 'react';

import s from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts-slice';

const ContactForm = () => {
  const [stateForm, setState] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setState(prevState => {
      return { ...prevState, [target.name]: target.value };
    });
  };
  const contacts = useSelector(state => state.contacts.contacts.contacts);
  const onFormSubmit = e => {
    e.preventDefault();
    if (contacts.find(({ name }) => name === stateForm.name)) {
      setState({ name: '', number: '' });
      return alert('already add');
    }
    dispatch(addContact(stateForm));
    setState({ name: '', number: '' });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            value={stateForm.name}
            onChange={onInputChange}
            type="text"
            name="name"
            placeholder="enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            value={stateForm.number}
            onChange={onInputChange}
            type="tel"
            name="number"
            placeholder="enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
