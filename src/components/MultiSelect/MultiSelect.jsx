import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelect = (props) => {
  const [selectedOptions, setSelectedOptions] = useState(props.value);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    props.onChange(selected);
  };

  return (
    <Select
      value={selectedOptions}
      onChange={handleChange}
      options={props.options}
      isMulti
      closeMenuOnSelect={false}
      placeholder={props.placeholder || 'Select...'}
    />
  );
};

export default MultiSelect;
