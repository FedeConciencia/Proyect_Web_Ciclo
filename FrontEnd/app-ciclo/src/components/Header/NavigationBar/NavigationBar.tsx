import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AiFillInstagram } from "react-icons/ai";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./NavigationBar.module.scss";
import useDeviceType from "@/hooks/useDeviceType";
import { Container } from "semantic-ui-react";
import { Button } from "@/components/mixins";
import { FiMenu } from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const NavigationBar = (props: any) => {
  const { sideMenuFunction } = props;
  const { isDesktop } = useDeviceType();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Container
      className={
        scrolled
          ? `${styles.container}  ${styles.scrolled}`
          : `${styles.container}`
      }
      fluid
      textAlign="justified"
    >
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbarBrand}>
            <Link href="/">
              <Image
                src="/logo_navbar.png"
                alt="Ciclo"
                width={200}
                height={120}
                priority
              />
            </Link>
          </div>
          {isDesktop ? (
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
                    <a
                      className={`${styles.navLink} ${styles.chevron}`}
                      onClick={toggleDropdown}
                    >
                      Nuestra Propuesta
                      {dropdownOpen ? (
                        <BiChevronUp
                          color={"#ffffff"}
                          fontSize={20}
                          className={styles.bi_chevron}
                        />
                      ) : (
                        <BiChevronDown
                          color={"#ffffff"}
                          fontSize={20}
                          className={styles.bi_chevron}
                        />
                      )}
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
                  <Link
                    href="#contacto"
                    className={styles.navLink}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className={styles.navbarMenu}>
              <Button
                id="close-sidemenu"
                withOutPadding
                variant="icon"
                onClick={sideMenuFunction}
                startIcon={<FiMenu fontSize={50} color="white" />}
                width="fullWidth"
                className=""
              />
            </div>
          )}
        </div>

        {isDesktop && (
          <div className={styles.navbarSocial}>
            <ul className={styles.socialLinksList}>
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=100094922780339&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FacebookIcon className={styles.socialMediaIcon} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/ciclo.soluciones?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <AiFillInstagram className={styles.socialMediaIcon} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <LinkedInIcon className={styles.socialMediaIcon} />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </Container>
  );
};

NavigationBar.displayName = "NavigationBar";
export default NavigationBar;
