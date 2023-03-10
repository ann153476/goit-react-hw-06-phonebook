import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts-slice';
import s from '../App.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);

  const filterValue = useSelector(state => state.contacts.contacts.filter);
  const filterContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filterValue) || number.includes(filterValue)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {filterContacts.map(item => {
          return (
            <li key={item.id} className={s.flex}>
              <div className={s.box__contact}>
                <p>{item.name}</p>
                <p>{item.number}</p>
              </div>

              <button
                className={s.btn}
                type="submit"
                onClick={() => {
                  dispatch(deleteContact(item.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
