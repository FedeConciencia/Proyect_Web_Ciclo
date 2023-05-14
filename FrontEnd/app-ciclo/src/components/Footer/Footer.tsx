import MaxContainer from "../mixins/MaxContainer/MaxContainer";
import Info from "./Info/Info";
import Copyright from "./Copyright/Copyright";
import styles from "./footer.module.scss";

const Footer = (props: any) => (
  <MaxContainer>
    <footer className={styles.container} id="contacto">
      <Info {...props} />

      <Copyright />
    </footer>
  </MaxContainer>
);

export default Footer;
