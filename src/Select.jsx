import React from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";

const options = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
];

export const MultiSelect = ({ onChange }) => {
  return (
    <Select
      isSearchable={false}
      defaultValue={options[0]}
      options={options}
      styles={customStyles}
      onChange={(value) => onChange(value.value)}
    />
  );
};
