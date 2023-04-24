import { ReactNode } from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import Text from "../Text/Text";

interface ButtonProps {
  id: string;
  border?: string;
  badge?: string;
  variant:
    | "primary"
    | "secondary"
    | "terciary"
    | "transparent"
    | "icon"
    | "disabled";
  textCase?: "uppercase" | "capitalize" | "none";
  textWeight?: "bold" | "bolder" | "normal";
  textColor?: string;
  textStyle?: object;
  label?: string;
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  br?: "soft" | "hard";
  width: "none" | "sm" | "md" | "lg" | "fullWidth";
  withOutPadding?: boolean;
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
  submit?: boolean;
  className: string;
  style?: object;
}

const Button = (props: ButtonProps) => {
  const {
    br,
    border,
    badge,
    className,
    endIcon,
    id,
    justify,
    label,
    onClick,
    startIcon,
    submit,
    textCase,
    textColor,
    textStyle,
    textWeight,
    variant,
    width,
    withOutPadding,
    style,
  } = props;
  const buttonClass = cn({
    [styles.button]: true,
    [styles[variant]]: true,
    [styles.brHard]: br === "hard",
    [className]: !!className,
  });

  const widthOptions = {
    fullWidth: "100%",
    none: "auto",
    sm: "25%",
    md: "50%",
    lg: "75%",
  };

  // TODO: agregar spinner cuando cargue la accion

  return (
    <button
      type={submit ? "submit" : "button"}
      id={id}
      onClick={onClick}
      className={buttonClass}
      disabled={variant === "disabled"}
      style={{
        width: `${widthOptions[width]}`,
        justifyContent: justify,
        padding: withOutPadding ? "0px" : " 15px 25px",
        border: border ? `1px solid ${border}` : "",
        ...style,
      }}
    >
      {startIcon}
      {label && (
        <Text
          weight={textWeight}
          textCase={textCase}
          textColor={textColor}
          textStyle={textStyle}
          variant="span"
          textSize="s"
        >
          {label}
        </Text>
      )}
      {endIcon}
      {badge && (
        <div
          className={styles.badge}
          style={{ backgroundColor: border || "white" }}
        >
          <Text variant="span" weight="semibold" textColor="black" textSize="m">
            {badge}
          </Text>
        </div>
      )}
    </button>
  );
};

export default Button;
