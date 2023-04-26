import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  

  collectionInfo = event => {
    const { name, value } = event.currentTarget;
    
    // if (this.state.name || this.state.number) {
    //   console.log('kyky');
    // }
    this.setState({
      [name]: value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.form}>
        <form  onSubmit={this.submitForm}>
          {/* <label htmlFor={this.nameInputId}> */}
          <span className={css.formName}>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.collectionInfo}
            id={this.nameInputId}
            className={css.formInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* </label> */}

          {/* <label htmlFor={this.numberInputId}> */}
          <span className={css.formName}>Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.collectionInfo}
            id={this.numberInputId}
            className={css.formInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* </label> */}
          <button type="submit">add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};