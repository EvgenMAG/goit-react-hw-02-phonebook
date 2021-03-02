import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ searchedName, cleanContactList }) => {
  return (
    <ul className={s.contact__list}>
      {searchedName.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact__item}>
            <span className={s.contact__text}>{name}: </span>
            <span className={s.contact__text}>{number}</span>
            <button
              className={s.contact__button}
              onClick={() => cleanContactList(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
