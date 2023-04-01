import { useSelector } from "react-redux";
import { useState } from "react";
import { Button, Link, Text } from "@/components/mixins";
import styles from "./navbar.module.scss";
import NavBarModal from "./NavbarModal";

const NavBar = () => {
  const navbar = {
    dropdowns: [
      {
        name: "Nuestra Propuesta",
        categories: [
          {id: 1,name: "Ciclo Integral", url: 'integral'},
          {id: 2,name: "Ciclo Colaborativo", url: 'colaborativo'},
          {id: 3,name: "Ciclo Estrategico", url: 'estrategico'},
          {id: 4,name: "Ciclo Activo", url: 'activo'},
        ],
      },
    ],
  };
  const [open, setOpen] = useState({ name: "", info: [] });

  const setCategories = (name: string, categories: any) => {
    setOpen({ name, info: categories });
  };
  return (
    <div
      className={styles.navbar}
      onMouseLeave={() => {
        setOpen({ name: "", info: [] });
      }}
      onBlur={() => {
        setOpen({ name: "", info: [] });
      }}
    >
      {navbar?.dropdowns?.map((d) => (
        <div
          onMouseOver={() => {
            setCategories(d.name, d.categories);
          }}
          onFocus={() => {
            setCategories(d.name, d.categories);
          }}
          className={`${styles.navbarItem} ${
            d.name === open.name ? styles.selected : ""
          }`}
        >
          <Text>{d.name}</Text>
        </div>
      ))}


      {open?.name && <NavBarModal content={open.info} />}
    </div>
  );
};

export default NavBar;
