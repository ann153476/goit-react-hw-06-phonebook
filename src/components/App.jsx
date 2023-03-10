import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);
  console.log(contacts.length);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter></Filter>
      {contacts.length === 0 ? <Notification /> : <ContactList />}
    </>
  );
};

export default App;
