import Heading from "./Heading";
import Paragraph from "./Paragraph";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <Paragraph />
    </div>
  );
};

export default Hero;
