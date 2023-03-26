import MaxContainer from '../mixins/MaxContainer/MaxContainer';
import Info from './Info/Info';
import Copyright from './Copyright/Copyright';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    <Info/>
    <MaxContainer>
      <Copyright />
    </MaxContainer>
  </footer>
);

export default Footer;
