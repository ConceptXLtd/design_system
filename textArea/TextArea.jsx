import style from "./textArea.module.css";

/**
 * Input component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("string" | "JSX.Element")} labelTypes
 * @typedef {("text" | "number" | "email" | "password" | "date")} inputTypes
 * @typedef {("horizontal" | "vertical" | "both" | "none")} resizeTypes
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
 *      resize: resizeTypes,
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
 * @param args.resize - area resize
 * @param args.hasError - field error status
 */
export default function TextArea({
  screenMode = "light",
  name,
  label,
  infoIcon,
  infoText,
  placeholder,
  value,
  onChangeEvent,
  resize,
  hasError,
}) {
  return (
    <>
      <div className={style.label__wrapper}>
        {label}
        {infoText && <div title={infoText}>{infoIcon}</div>}
      </div>
      <div className={style.input__group}>
        <textarea
          style={{ resize: resize || "none" }}
          className={`${style.input__control} ${style[screenMode]} ${hasError ? style.input__error : ""}`}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChangeEvent}
        />
      </div>
    </>
  );
}
