import React from "react";
import styles from "./Navbar.module.css";
interface NavMenuItemProps {
  label: string;
}
const NavMenuItem = ({ label }: NavMenuItemProps) => {
  return <div className={styles.font}>{label}</div>;
};

export default NavMenuItem;
