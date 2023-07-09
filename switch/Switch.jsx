import style from "./switch.module.css";

/**
 * Switch component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("string" | "JSX.Element")} labelTypes
 * @param {{
*      screenMode: screenModeTypes,
*      name: string
*      label: labelTypes,
*      value: string,
*      onChangeEvent: Function,
* }} args
* @param args.screenMode - screenMode type
* @param args.name - field name
* @param args.label - field title
* @param args.value - corresponding value
* @param args.onChangeEvent - event to fire onChange
*/
export default function Switch({ screenMode = "light", name, label, value, onChangeEvent }) {
  return (
    <div className={style.switch__wrapper}>
      {label}
      <label className={style.switch}>
        <input type="checkbox" name={name} value={value} defaultChecked={value} onChange={onChangeEvent} />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}
