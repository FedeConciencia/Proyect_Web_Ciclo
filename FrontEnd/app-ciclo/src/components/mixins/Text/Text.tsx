import { ReactNode } from "react";
import styles from "./text.module.scss";
import cn from "classnames";

const sizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  s: "0.875rem",
  m: "1rem",
  l: "1.125rem",
  xl: "1.25rem",
  xxl: "1.375rem",
};

type Props = {
  children: any ;
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
  weight?: "light" | "normal" | "semibold" | "bold" | "bolder";
  textColor?: string;
  textCase?: "uppercase" | "capitalize" | "none";
  textStyle?: object;
  strike?: boolean;
  center?: boolean;
  colored?: boolean;
  className?: string;
  forInput?: string | null;
  textSize?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
};

const Text = ({
  children = "",
  variant = "p",
  textCase = "none",
  weight = "normal",
  textColor = "",
  textStyle = {},
  strike = false,
  className = "",
  center = false,
  colored = false,
  forInput = null,
  textSize = "m",
}: Props) => {

  const textClass = cn({
    [styles.text]: true,
    [styles.light]: weight === "light",
    [styles.normal]: weight === "normal",
    [styles.semibold]: weight === "semibold",
    [styles.bold]: weight === "bold",
    [styles.bolder]: weight === "bolder",
    [className]: !!className,
    [styles.strike]: strike,
    [styles.center]: center,
    [styles.colored]: colored,
  });

  let render = children;

  if (textCase === "uppercase")
    render = `${
      typeof children === "string" ? children : children?.join(" ")
    }`.toUpperCase();

  if (textCase === "capitalize" && typeof children === "string" ) {
    const capital = children[0].toUpperCase();
    const text = children.substring(1);
    render = capital + text;
  }

  switch (variant) {
    case "h1":
      return (
        <h1
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </h4>
      );
    case "span":
      return (
        <span
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </span>
      );

    default:
      return (
        <p
          className={textClass}
          style={{
            color: colored ? "" : textColor,
            fontSize: sizes[textSize],
            ...textStyle,
          }}
        >
          {render}
        </p>
      );
  }
};

export default Text;
