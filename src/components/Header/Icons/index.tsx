import { Handbag, Heart, Search, User } from "lucide-react";
import styles from "./Icon.module.css";
import IconBadge from "./IconBadge";

const Icon = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.icon}>
        <IconBadge url="#" icon={Search} />
      </div>
      <div className={styles.icon}>
        <IconBadge url="#" icon={Heart} />
      </div>
      <div className={styles.icon}>
        <IconBadge url="#" icon={Handbag} />
      </div>
      <div className={styles.icon}>
        <IconBadge url="#" icon={User} />
      </div>
    </nav>
  );
};

export default Icon;
