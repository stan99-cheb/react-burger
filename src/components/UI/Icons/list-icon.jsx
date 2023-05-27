import PropTypes from "prop-types";
import { getIconColor } from "../../../utils/iconColor";

const ListIcon = ({ type }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={getIconColor(type)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V3ZM6.5 8C7.0523 8 7.5 7.5523 7.5 7C7.5 6.4477 7.0523 6 6.5 6C5.9477 6 5.5 6.4477 5.5 7C5.5 7.5523 5.9477 8 6.5 8ZM8.5 7C8.5 6.44772 8.94772 6 9.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7C18.5 7.55228 18.0523 8 17.5 8H9.5C8.94772 8 8.5 7.55228 8.5 7ZM9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13H17.5C18.0523 13 18.5 12.5523 18.5 12C18.5 11.4477 18.0523 11 17.5 11H9.5ZM9.5 16C8.94772 16 8.5 16.4477 8.5 17C8.5 17.5523 8.94772 18 9.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17C18.5 16.4477 18.0523 16 17.5 16H9.5ZM6.5 13C7.0523 13 7.5 12.5523 7.5 12C7.5 11.4477 7.0523 11 6.5 11C5.9477 11 5.5 11.4477 5.5 12C5.5 12.5523 5.9477 13 6.5 13ZM6.5 18C7.0523 18 7.5 17.5523 7.5 17C7.5 16.4477 7.0523 16 6.5 16C5.9477 16 5.5 16.4477 5.5 17C5.5 17.5523 5.9477 18 6.5 18Z"
      />
    </svg>
  );
};

ListIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ListIcon;
