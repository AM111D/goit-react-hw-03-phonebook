import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    let contactId = nanoid();
    let contacts = [...this.state.contacts];
    const names = contacts.map(contact => contact.name);

    if (!names.find(el => el === name)) {
      contacts = [...contacts, { id: contactId, name: name, number: number }];
      this.setState({
        contacts,
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = id => {
    const contacts = [...this.state.contacts];
    const index = contacts.findIndex(person => person.id === id);
    contacts.splice(index, 1);
    this.setState({
      contacts,
    });
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  
  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({
        contacts: storageContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const list = contacts.filter(
      contact =>
        this.state.filter === '' ||
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div
      style={{marginLeft: '50px',}}>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          deleteContact={this.deleteContact}
        />
        <h1>Contacts</h1>
        <Filter change={this.handleFilter} value={filter} />
        <ContactList list={list} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
