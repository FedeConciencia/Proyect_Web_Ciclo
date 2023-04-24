import { forwardRef } from "react";
import cn from "classnames";
import InputMask from "react-input-mask";
import styles from "./input.module.scss";
import { Text } from "@/components/mixins";

interface InputProps {
  autoCompleteOff?: boolean;
  br?: "hard" | "soft";
  error?: string;
  id: string;
  inLineStyles?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  startIcon?: React.ReactNode;
  textColor?: string;
  type?: "email" | "password" | "text" | "number" | "checkbox";
  width?: "none" | "sm" | "md" | "lg" | "fullWidth";
  title?: string;
  titleColor?: string;
  filled?: boolean;
  className: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  mask?: string;
  maskChar?: string;
  label?: string;
  labelColor?: string;
  textSize?: "s" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "xxxl" | undefined;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

// eslint-disable-next-line no-unused-vars
const Input = forwardRef((props: InputProps, ref) => {
  const {
    autoCompleteOff,
    br,
    error,
    id,
    inLineStyles,
    onChange,
    onClick,
    placeholder,
    startIcon,
    textColor,
    type = "text",
    width = "fullWidth",
    title,
    titleColor,
    filled,
    className,
    value,
    disabled,
    name,
    required,
    onFocus,
    onKeyPress,
    mask = "",
    maskChar,
    label,
    labelColor,
    textSize,
  } = props;
  const inputStyles = cn({
    [styles.form]: true,
    [className]: !!className,
    [styles.checkbox]: name === "requirments",
  });

  const inputClass = cn({
    [styles.input]: true,
    [styles.brHard]: br === "hard",
    [styles.startIcon]: startIcon,
    [styles.filled]: filled,
  });

  const widthOptions = {
    fullWidth: "100%",
    none: "auto",
    sm: "25%",
    md: "50%",
    lg: "75%",
  };

  return (
    <div id={id} className={inputStyles}>
      {title && (
        <Text className={styles.title} textColor={titleColor}>
          {title}
          {required ? " *" : ""}
        </Text>
      )}
      {startIcon}
      <InputMask
        mask={mask}
        maskChar={maskChar}
        onChange={onChange}
        onFocus={onFocus}
        name={name}
        type={type}
        onClick={onClick}
        onKeyPress={onKeyPress}
        style={{
          ...inLineStyles,
          width: name !== "requirments" ? `${widthOptions[width]}` : "",
          color: textColor,
        }}
        placeholder={placeholder}
        className={inputClass}
        autoComplete={autoCompleteOff ? "off" : "on"}
        disabled={disabled}
        required={required}
      />
      {label && (
        <Text
          forInput="ja"
          textColor={labelColor}
          textSize={textSize ? textSize : "xs"}
        >
          {label}
        </Text>
      )}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
});


Input.displayName = "Input";

export default Input;
