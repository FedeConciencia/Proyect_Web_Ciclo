/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import cn from "classnames";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Divider, Link, Button } from "@/components/mixins";
import styles from "./SideBar.module.scss";
import Image from "next/image";

const SideMenu = (props: any) => {
  const { close, open, mounted } = props;
  const categorias = [
    {
      link: "/#slider_1",
      title: "Ciclo Integral",
      key: "1",
    },
    {
      link: "/#slider_2",
      title: "Ciclo Colaborativo",
      key: "2",
    },
    { link: "#slider_3", title: "Ciclo Estratégico", key: "3" },
    {
      link: "#slider_4",
      title: "Ciclo Activo",
      key: "4",
    },
    { link: "/nosotros", title: "Nosotros", key: "5" },
    { link: "/obras", title: "Obras", key: "5" },
  ];

  const sidemenuClass = cn({
    [styles.menu]: true,
    [styles.open]: open,
    [styles.close]: !open && mounted,
  });

  const renderCategories = (link: any, title: any, key: string) => {
    return (
      <Link href={link} passHref>
        <Button
          onClick={close}
          label={title}
          textColor="#fff"
          endIcon={<IoIosArrowForward color="white" fontSize={23} />}
          variant="terciary"
          justify="space-between"
          id={title}
          key={key}
          width="fullWidth"
          className={styles.button}
          border="#e93a7d"
        />
      </Link>
    );
  };

  return (
    <div className={sidemenuClass}>
      <div className={styles.container}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <Link href="/">
              <Image
                src="/logo_navbar.png"
                alt="Ciclo"
                width={200}
                height={120}
                priority
              />
            </Link>

            <div className={styles.close_button}>
              <Button
                id="logo"
                variant="icon"
                onClick={close}
                startIcon={
                  <MdClose color="var(--color-primary)" fontSize={30} />
                }
                withOutPadding
                width="fullWidth"
                className=""
              />
            </div>
          </div>
          <Divider size={20} color="#fff" />
        </div>
        <div className={styles.section}>
          <div className={styles.navbar}>
            <Link key="Contactanos" href="tel: +5492612765262" passHref>
              <Button
                onClick={() => {}}
                label="Contactanos"
                textColor="#fff"
                startIcon={
                  <FaWhatsapp
                    className={styles.phoneLogo}
                    color="#fff"
                    fontSize={30}
                  />
                }
                variant="secondary"
                justify="center"
                id="centro-de-ayuda"
                style={{ gap: "1rem" }}
                width="fullWidth"
                className=""
              />
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.navbar}>
            {categorias.map((c) => (
              <div key={c.key}>{renderCategories(c.link, c.title, c.key)}</div>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.stores}></div>
        </div>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool,
  mounted: PropTypes.bool,
};

SideMenu.defaultProps = { open: null };

export default SideMenu;
