/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import cn from "classnames";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Divider, Link, Button } from "@/components/mixins";
import styles from "./SideBar.module.scss";
import Image from "next/image";
import { useState } from "react";

const SideMenu = (props: any) => {
  const { close, open, mounted } = props;
  const [openPropuesta, setOpenPropuesta] = useState(false);
  const [openConocenos, setOpenConocenos] = useState(false);
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
      link: "#slider_5",
      title: "Ciclo Activo",
      key: "4",
    },
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
          endIcon={<IoIosArrowForward color="white" fontSize={15} />}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-arund",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className={styles.close_button}>
                <Button
                  id="logo"
                  variant="icon"
                  onClick={close}
                  startIcon={<MdClose color="#ffffff" fontSize={30} />}
                  withOutPadding
                  width="fullWidth"
                  className=""
                />
              </div>
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
          </div>
        </div>
        <div className={styles.section}>
          <h2
            className={styles.primary_title}
            onClick={() => {
              setOpenPropuesta(!openPropuesta);
            }}
          >
            Nuestra Propuesta
            {openPropuesta ? (
              <div>
                <BiChevronUp color={"#e93a7d"} fontSize={20} />
              </div>
            ) : (
              <div>
                <BiChevronDown color={"#e93a7d"} fontSize={20} />
              </div>
            )}
          </h2>
          <div>
            <Divider size={100} color="#fff" />
          </div>
          {openPropuesta && (
            <div className={styles.navbar}>
              {categorias.map((c) => (
                <div key={c.key}>
                  {renderCategories(c.link, c.title, c.key)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.section}>
          <h2
            className={styles.secondary_title}
            onClick={() => {
              setOpenConocenos(!openConocenos);
            }}
          >
            Conocenos
            {openConocenos ? (
              <div>
                <BiChevronUp color={"#ffb71b"} fontSize={20} />
              </div>
            ) : (
              <div>
                <BiChevronDown color={"#ffb71b"} fontSize={20} />
              </div>
            )}
          </h2>

          <div>
            <Divider size={100} color="#fff" />
          </div>
          {openConocenos && (
            <div className={styles.stores}>
              <Link href={"/nosotros"} passHref>
                <Button
                  onClick={close}
                  label={"Nosotros"}
                  textColor="#fff"
                  endIcon={<IoIosArrowForward color="white" fontSize={15} />}
                  variant="terciary"
                  justify="space-between"
                  id={"Nosotros"}
                  key={"Nosotros"}
                  width="fullWidth"
                  className={styles.button__about_us}
                  border="#ffb71b"
                />
              </Link>

              <Link href={"/obras"} passHref>
                <Button
                  onClick={close}
                  label={"Obras"}
                  textColor="#fff"
                  endIcon={<IoIosArrowForward color="white" fontSize={15} />}
                  variant="terciary"
                  justify="space-between"
                  id={"Obras"}
                  key={"Obras"}
                  width="fullWidth"
                  className={styles.button__about_us}
                  border="#ffb71b"
                />
              </Link>

              <Link href={"#contacto"} passHref>
                <Button
                  onClick={close}
                  label={"Contactanos"}
                  textColor="#fff"
                  endIcon={<FaWhatsapp color="white" fontSize={15} />}
                  variant="terciary"
                  justify="space-between"
                  id={"Obras"}
                  key={"Obras"}
                  width="fullWidth"
                  className={styles.button_contact}
                  border="#ffb71b"
                />
              </Link>
            </div>
          )}
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
