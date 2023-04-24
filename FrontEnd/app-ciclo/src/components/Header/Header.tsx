import { MaxContainer, Link } from "@/components/mixins";
import Image from "next/image";
import styles from "./header.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = () => {
  return (
    <MaxContainer>
      <header className={styles.container}>
        <NavigationBar/>
      </header>
    </MaxContainer>
  );
};

export default Header;
