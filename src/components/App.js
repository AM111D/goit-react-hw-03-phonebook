import React, { Component } from 'react';
import ContactForm from './Form/ContactForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {

    state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    // this.handleFilter = this.handleFilter.bind(this);
  

  addContact = data => {
    const newContact = Object.assign({}, data, { id: nanoid() });
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deletContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1 style={{ marginLeft: 20 }}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 style={{ marginLeft: 20 }}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <Contacts contacts={this.filteredContacts()} filter={filter} ondeletContact={this.deletContact}/>
      </div>
    );
  }
}

export default App;
