import React from 'react';
import { nanoid } from 'nanoid';
import css from './contacts.module.css'
import PropTypes from 'prop-types';

const Contacts = ({ contacts, filter, ondeletContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={nanoid()} id={nanoid()} className={css.contactsItem}>
            {contact.name}: {contact.number}
            <button onClick={() => ondeletContact(contact.id)} className={css.deletBtn}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
