import styles from "./header.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import SideMenu from "@/components/Header/SideBar/SideBar";
import useDeviceType from "@/hooks/useDeviceType";
import { useState } from "react";

const Header = () => {
  const { isDesktop } = useDeviceType();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  let body;
  if (typeof window !== "undefined") {
    body = document.querySelector("#body");
  }
  const closeMenu = () => {
    body = document.querySelector("#body");
    body?.classList.remove("inactive");
    setOpen(false);
  };
  const openMenu = () => {
    body = document.querySelector("#body");
    body?.classList.add("inactive");
    setMounted(true);
    setOpen(true);
  };

  return (
    <>
      {!isDesktop && (
        <SideMenu close={closeMenu} open={open} mounted={mounted} />
      )}
      <header className={styles.container}>
        <NavigationBar sideMenuFunction={openMenu} />
      </header>
    </>
  );
};

Header.displayName = "Header";
export default Header;
