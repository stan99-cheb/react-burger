import React from "react";

export const useFormField = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = ({ target }) => setValue(target.value);

  return { value, onChange };
};
