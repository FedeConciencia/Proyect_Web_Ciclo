import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          <Image src="/logo_navbar.png" alt="Ciclo" width={200} height={120} />
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        <ul className={styles.navLinksList}>
          <li>
            <div
              className={
                dropdownOpen
                  ? `${styles.dropdown} ${styles.opened}`
                  : styles.dropdown
              }
            >
              <a className={styles.navLink} onClick={toggleDropdown} href="#">
                Nuestra Propuesta
              </a>
              {dropdownOpen && (
                <div
                  className={`${styles.dropdown} ${styles.open} ${styles.list}`}
                >
                  <Link
                    href="/#slider_1"
                    className={styles.dropdownLink}
                    onClick={closeDropdown}
                  >
                    Ciclo Integral
                  </Link>
                  <Link
                    href="/#slider_2"
                    className={styles.dropdownLink}
                    onClick={closeDropdown}
                  >
                    Ciclo Colaborativo
                  </Link>
                  <Link
                    href="/#slider_3"
                    className={styles.dropdownLink}
                    onClick={closeDropdown}
                  >
                    Ciclo Estratégico
                  </Link>
                  <Link
                    href="/#slider_4"
                    className={styles.dropdownLink}
                    onClick={closeDropdown}
                  >
                    Ciclo Activo
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link href="/nosotros" className={styles.navLink}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/obras" className={styles.navLink}>
              Obras
            </Link>
          </li>
          <li>
            <Link href="#contacto" className={styles.navLink}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.navbarSocial}>
        <ul className={styles.socialLinksList}>
          <li>
            <Link href="/">
              <FacebookIcon className={styles.socialMediaIcon} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <InstagramIcon className={styles.socialMediaIcon} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <LinkedInIcon className={styles.socialMediaIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
