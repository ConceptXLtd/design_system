import style from "./text.module.css"

/**
 * Text component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("heading" | "title" | "subTitle" | "label" | "content")} typeTypes
 * @typedef {("h1" | "h2" | "h3" | "h4" )} tagTypes
 * @typedef {("fs_72" | "fs_60" | "fs_52" | "fs_48" | "fs_44" | "fs_40" | "fs_38" | "fs_36" | "fs_34" | "fs_32" | "fs_30" | "fs_28" | "fs_24" | "fs_20" | "fs_16" | "fs_14" | "fs_12" | "fs_10" | "fs_8 ")} fontSizeTypes
 * @typedef {(400 | 500 | 600 | 700 )} fontWeightTypes
 * @param {{
 *      screenMode: screenModeTypes, 
 *      content: string, 
 *      type: typeTypes, 
 *      tag: tagTypes, 
 *      fontSize: fontSizeTypes, 
 *      fontWeight: fontWeightTypes, 
 *      color: string, 
 *      underline: boolean,
 *      strong: boolean,
 *      emphasis: boolean 
 *      id: string
 * }} args
 * @param args.screenMode - screenMode type
 * @param args.content - text render content
 * @param args.type -  type of text whould be heading
 * @param args.tag - need to pass when text type heading for specify h1, h2 etc
 * @param args.fontSize - fontSize classname
 * @param args.fontWeight - text weight
 * @param args.color - text color
 * @param args.underline - value of text underline visible or not
 * @param args.emphasis - value of text style italic or not
 * @param args.id - any id string
 */

export default function Text({ 
    screenMode = "light", 
    content="lorem ipsum", 
    type="heading", 
    tag="h1", 
    fontSize="fs_h_32", 
    fontWeight=400, 
    color, 
    underline, 
    strong, 
    emphasis,
    id
}){
    let output = content;
    if (emphasis) output = <em> {output} </em>;
    if (underline) output = <u> {output} </u>;
    if (strong) output = <strong> {output} </strong>;

    const headTags = {
        h1: <h1 {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h1>,
        h2: <h2 {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h2>,
        h3: <h3 {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h3>,
        h4: <h4 {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h4>
    };

    if (["heading", "title", "subTitle"].includes(type)) return headTags[tag];
    else if (type === "label") return <label {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {output} </label>;
    else if (type === "content") return <p {...(id && {id})} style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {output} </p>;
    else return output;
}