import "./style.scss";
import { Link, NavLink } from "react-router-dom";
const ListItem = ({ ListClass, ListLink, LinkIcon, textCss, text, street }) => {
  return (
    <>
      <li className={ListClass}>
        <NavLink to={street} className={ListLink + " LinkWrapperHref"}>
          <i className={LinkIcon + " LinkIcon fs-4"}></i>
          <span className={textCss + " LinkText"}>{text}</span>
        </NavLink>
      </li>
    </>
  );
};

export default ListItem;
