import React from 'react'
import { Link } from "react-router-dom";
import s from "./CustomerNavListItem.module.css";

const CustomerNavListItem = ({ name, href }) => (
  <span
    style={{ backgroundColor: "white" }}
    className={`${s.CustomerNavListItem} p-shadow-1`}
  >
    <Link to={`/${href}`}>{name}</Link>
  </span>
);

export default CustomerNavListItem;
