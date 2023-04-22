import React, { Component } from 'react';
import css from './filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <div className={css.search}>
        {/* <label htmlFor="search">Search:</label> */}
        <span>Find contacts by name</span>
        <input
          className={css.formSearch}
          type="text"
          id="search"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  };
