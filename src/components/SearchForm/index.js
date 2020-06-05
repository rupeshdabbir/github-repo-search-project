import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Dropdown from '../Dropdown/index';
import 'suitcss-utils-display';
import 'react-dropdown/style.css';
import SearchIcon from './search.svg';

const SearchForm = (props) => {
  const [initialInputValue, languageStr] = props.initialInputValue.split(' ');
  const [inputValue, setInputValue] = useState(initialInputValue);

  let dropdownValue = languageStr && languageStr.length ? languageStr.split(':')[1] : 'JavaScript';

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!inputValue && !dropdownValue) {
      return;
    }
    props.onSubmit({ inputValue, dropdownValue });
  };

  const onDropdownSelect = (value) => {
    dropdownValue = value;
  };

  return (
    <form className={css(styles.SearchForm)} onSubmit={handleOnSubmit}>
      <label className="u-hiddenVisually" htmlFor="searchInput">
        Search for a repo
      </label>
      <input
        className={css(styles.SearchForm_input)}
        type="text"
        id="searchInput"
        placeholder="Search for a repo"
        value={inputValue}
        onChange={handleOnChange}
      />
      <Dropdown onSelect={onDropdownSelect} default={dropdownValue} />

      <button className={css(styles.SearchForm_btn)} type="submit">
        <SearchIcon width={22} height={24} />
        <span className="u-hiddenVisually">Submit</span>
      </button>
    </form>
  );
};

const styles = StyleSheet.create({
  SearchForm: {
    position: 'relative',
  },

  SearchForm_input: {
    padding: 8,
    paddingRight: 40,
    width: '100%',
    border: '1px solid #bbb',
    boxShadow: 'inset 0 2px 2px rgba(0, 0, 0, .1);',
  },

  SearchForm_btn: {
    padding: '3px 14px',
    position: 'absolute',
    top: 4,
    right: 0,
  },
});

export default SearchForm;
