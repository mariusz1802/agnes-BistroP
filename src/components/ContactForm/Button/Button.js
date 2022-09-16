import React from "react";
import * as styles from "./Button.module.scss";
function Button({
  buttonStyle,
  buttonColor,
  buttonSize,
  title,
  onClick,
  type,
  disabled,
}) {
  const COLOR = {
    red: styles.red,
    green: styles.green,
  };
  const SIZE = {
    wide: styles.wide,
    medium: styles.medium,
    small: styles.small,
    micro: styles.micro,
  };

  const checkButtonColor = COLOR.hasOwnProperty.call(COLOR, buttonColor)
    ? COLOR[buttonColor]
    : COLOR.green;

  const checkButtonSize = SIZE.hasOwnProperty.call(SIZE, buttonSize)
    ? SIZE[buttonSize]
    : SIZE.wide;

  return (
    <button
      className={` ${styles.btn} ${checkButtonColor} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
