import React from "react";

export const useFormField = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return [
    { value, onChange: ({ target }) => setValue(target.value) },
    () => setValue(initialValue),
  ]
};
