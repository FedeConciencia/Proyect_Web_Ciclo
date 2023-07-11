import MaxContainer from "../mixins/MaxContainer/MaxContainer";
import Link from "next/link";
import Image from "next/image";

import styles from "./adminNavbar.module.scss";

const AdminNavbar = (props: any) => (
  <MaxContainer>
    <nav className={styles.container}>
      <div>
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
      <div className={styles.navbarLinks}>
        <ul className={styles.navLinksList}>
          <li>
            <Link href="/admin/proyectos" className={styles.navLink}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/admin/comunidad" className={styles.navLink}>
              Comunidades
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </MaxContainer>
);

export default AdminNavbar;
