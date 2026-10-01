import { Badge } from "lucide-react";
import styles from "./Header.module.css";
import Logo from "./Logo/Index";
import Icon from "./Icons";
import Navbar from "./Navbar";
// import MobileMenu from "./MobileMenuIcon";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logos}>
            {/* <MobileMenu /> */}
            <Badge className={styles.badge} />
          </div>
          <div className={styles.centerLogo}>
            <Logo />
          </div>
          <Icon />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
