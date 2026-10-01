import styles from "./Navbar.module.css";
import NavMenuItem from "./NavMenuItem";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavMenuItem label="SHOP" />
      <NavMenuItem label="SKILLS" />
      <NavMenuItem label="STORIES" />
      <NavMenuItem label="ABOUT" />
      <NavMenuItem label="CONTACT US" />
    </nav>
  );
};

export default Navbar;
