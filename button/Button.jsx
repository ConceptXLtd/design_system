import style from "./button.module.css";

/**
 * Text component is reusable for every case
 * @typedef {("primary" | "secondary" | "text")} typeTypes
 * @typedef {("left" | "right")} iconPositionTypes
 * @param {{
*      type: typeTypes, 
*      icon: Element, 
*      text: Element, 
*      bgColor: string,
*      iconPosition: string,
*      clickEvent: Function,
*      id: string
* }} args
* @param args.type - button type
* @param args.icon - icon component
* @param args.text - text component
* @param args.bgColor - background color
* @param args.iconPosition - position of the icon
* @param args.id - button id
*/

export function Button({
  type = "primary",
  icon,
  text,
  bgColor,
  iconPosition = "left",
  clickEvent,
  id,
}) {
  return (
    <button {...(id && { id })} className={`${style.btn} ${style[type]}`} style={{ ...(bgColor && { backgroundColor: bgColor, border: `1px solid ${bgColor}` }) }} type="button" onClick={clickEvent} >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>
  );
}
