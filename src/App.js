import React, { Component } from 'react';

import s from './App.module.css';
// import { v4 as idv4 } from 'uuid';
import users from './contacts.json';
import Filter from './components/Filter';
import Form from './components/Form';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: users,
    filter: '',
  };

  onSubmitHandler = data => {
    const { contacts } = this.state;
    const newName = data.name.toLowerCase();
    const newPhone = data.number;
    if (contacts.some(el => el.name.toLowerCase() === newName)) {
      return alert(`${newName} is already in contacts`);
    }

    if (contacts.some(el => el.number.toLowerCase() === newPhone)) {
      return alert(`${newPhone} is already in contacts`);
    }
    // console.log(data);
    const newContact = contacts.concat(data);
    // console.log(newContact);

    this.setState(prevState => {
      return { ...prevState, contacts: newContact };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const foundName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    console.log(foundName);
    return (
      <div className={s.blocks}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.onSubmitHandler} />
        <h2 className={s.title__contacts}>Contacts</h2>
        <Filter search={this.state.filter} onChangeInput={this.changeFilter} />
        <ContactList
          searchedName={foundName}
          cleanContactList={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
