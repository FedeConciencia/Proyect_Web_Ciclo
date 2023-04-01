import { MaxContainer, Link } from "@/components/mixins";
import Image from "next/image";
import styles from "./header.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Dropdown from "./Dropdown/Dropdown";
import NavBar from "./Navbar/Navbar";

const Header = () => {
  const handleScroll = () => {
    // Get the navbar
    console.log('Soy un Sticky')
  };
  return (
    <header className={styles.container} onScroll={handleScroll} id="navbar">
      <nav>
        <Link href="" noWidth target="_blank">
          <Image
            src="/logo_navbar.webp"
            alt="Ciclo"
            width={1398}
            height={100}
            className={styles.logo}
          />
        </Link>
        <MaxContainer>
          <div className={styles.navbar}>
            <NavBar/>
            <Dropdown />
            <Link href="/nosotros"> Nostros </Link>
            <Link href="/"> Obras</Link>
            <Link href="/"> Contacto</Link>
            <div className={styles.social_networks}>
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </MaxContainer>
      </nav>
    </header>
  );
};

export default Header;
