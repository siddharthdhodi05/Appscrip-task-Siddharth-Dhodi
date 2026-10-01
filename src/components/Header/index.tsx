import { Badge } from "lucide-react";
import styles from "./Header.module.css";
import Logo from "./Logo/Index";
import Icon from "./Icons";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div>
            <Badge className={styles.badge} />
          </div>
          <Logo />
          <Icon />
        </div>
      </div>
    </header>
  );
};

export default Header;
