import { useState } from "react";
import style from "./input.module.css";

/**
 * Input component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("string" | "JSX.Element")} labelTypes
 * @typedef {("text" | "number" | "email" | "password" | "date")} inputTypes
 * @param {{
 *      screenMode: screenModeTypes,
 *      name: string
 *      label: labelTypes,
 *      infoIcon: JSX.Element,
 *      infoText: string,
 *      type: inputTypes,
 *      placeholder: string,
 *      value: string,
 *      onChangeEvent: Function,
 *      visibilityOnIcon: JSX.Element,
 *      visibilityOffIcon: JSX.Element,
 *      hasError: boolean,
 * }} args
 * @param args.screenMode - screenMode type
 * @param args.name - field name
 * @param args.label - field title
 * @param args.infoIcon - svg icon for hover information
 * @param args.infoText - hover information
 * @param args.type - field type
 * @param args.placeholder - field placeholder
 * @param args.value - corresponding value
 * @param args.onChangeEvent - event to fire onChange
 * @param args.visibilityOnIcon - view password icon
 * @param args.visibilityOffIcon - hide password icon
 * @param args.hasError - field error status
 */

export default function Input({
  screenMode = "light",
  name,
  label,
  infoIcon,
  infoText,
  type,
  placeholder,
  value,
  onChangeEvent,
  visibilityOnIcon,
  visibilityOffIcon,
  hasError,
}) {

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <>
      <div className={style.label__wrapper}>
        {label}
        {infoText && <div title={infoText}>{infoIcon}</div>}
      </div>
      <div className={style.input__group}>
        <input
          className={`${style.input__control} ${style[screenMode]} ${hasError ? style.input__error : ""}`}
          type={type === "password" ? (passwordVisibility ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChangeEvent}
        />
        {type === "password" && (
          <span className={style.eye__icon} onClick={() => setPasswordVisibility((prev) => !prev)}>
            {passwordVisibility ? visibilityOnIcon : visibilityOffIcon}
          </span>
        )}
      </div>
    </>
  );
}
