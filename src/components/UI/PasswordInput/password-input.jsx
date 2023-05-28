import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/input";

const PasswordInput = ({ value, onChange, ...rest }) => {
  const [showPass, setShowPass] = React.useState(false);

  const onIconClick = () => {
    showPass
      ? setShowPass(false)
      : setShowPass(true)
  };

  return (
    <Input
      type={showPass ? 'text' : 'password'}
      icon={showPass ? 'HideIcon' : 'ShowIcon'}
      value={value}
      onChange={onChange}
      onIconClick={onIconClick}
      {...rest}
    />
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default PasswordInput;
