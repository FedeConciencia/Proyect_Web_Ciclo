import { ReactNode } from "react";
import NextLink from "next/link";
import cn from "classnames";
import styles from "./link.module.scss";

type Props = {
  href: string;
  children: ReactNode;
  noWidth?: boolean;
  target?: string;
  className?: any;
  linkStyle?: object;
};

const Link = ({
  href,
  children,
  noWidth = false,
  target = "_self",
  className = {},
  linkStyle = {},
}: Props) => {

  const linkClass = cn({
    [styles.link]: true,
    [className]: !!className,
  });
  return (
    <NextLink
      href={href}
      passHref
      style={
        noWidth
          ? {}
          : { width: "100%", display: "flex", justifyContent: "center" }
      }
      target={target}
    >
      <div className={linkClass} style={{ ...linkStyle }}>
        {children}
      </div>
    </NextLink>
  );
};

export default Link;
