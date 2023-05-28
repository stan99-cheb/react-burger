import React from "react";

const isEmpty = (formField) => {
  const keys = Object.keys(formField);
  return keys.find(key => formField[key].length === 0);
};

export const useFormField = (initialValue = '') => {
  const [formField, setFormField] = React.useState(initialValue);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    isEmpty(formField)
      ? setIsChange(false)
      : setIsChange(true);
  }, [formField]);

  const onChange = (e, name) => {
    setFormField({ ...formField, [name]: e.target.value })
  };

  const onReplace = (name, value) => {
    setFormField(prevState => ({ ...prevState, [name]: value }));
  };

  return { isChange, formField, onChange, onReplace };
};
