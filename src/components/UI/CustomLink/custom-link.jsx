import { NavLink, useMatch } from "react-router-dom";
import PropTypes from "prop-types";
import * as Icons from "../Icons/index";

const CustomLink = ({ path, icon, extraStyle, children }) => {
  const match = useMatch(path);
  const Icon = icon && Icons[icon];

  return (
    <NavLink
      to={path}
      className={extraStyle}
      end
    >
      {Icon && <Icon type={match ? 'primary' : 'secondary'} />}
      {children}
    </NavLink>
  );
};

CustomLink.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.string,
  extraStyle: PropTypes.func,
  children: PropTypes.string,
};

export default CustomLink;
