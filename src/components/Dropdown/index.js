import React from 'react';
import Dropdown from 'react-dropdown';
import 'suitcss-utils-display';
import 'react-dropdown/style.css';

const DropdownWrapper = (props) => {
  // fetch this dynamically
  const options = ['JavaScript', 'Java', 'Python', 'PHP', 'Ruby', 'Typescript', 'HTML', 'CSS'];
  const defaultOption = props.default || options[0];

  const onSelect = (obj) => {
    const { value } = obj;
    props.onSelect(value);
  };

  return <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select a Language" />;
};

export default DropdownWrapper;
