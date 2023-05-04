import { MaxContainer } from "@/components/mixins";
import styles from "./header.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Container } from "semantic-ui-react";


const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationBar/>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
