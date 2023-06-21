import style from "./text.module.css"

/**
 * Text component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("heading" | "title" | "subTitle" | "label" | "content")} typeTypes
 * @typedef {("h1" | "h2" | "h3" | "h4" )} tagTypes
 * @typedef {("fs_c_10" |"fs_c_11" |"fs_c_12" |"fs_c_13" |"fs_c_14" |"fs_c_15" |"fs_c_16" |"fs_c_17" |"fs_c_18" |"fs_c_19" |"fs_c_20" |"fs_c_21" |"fs_c_22" |"fs_c_23" |"fs_c_24" | "fs_h_14" | "fs_h_15" | "fs_h_16" | "fs_h_17" | "fs_h_18" | "fs_h_19" | "fs_h_20" | "fs_h_21" | "fs_h_22" | "fs_h_23" | "fs_h_24" )} fontSizeTypes
 * @typedef {("400" | "500" | "600" | "700" )} fontWeightTypes
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
    emphasis 
}){
    let output = content;
    if (emphasis) output = <em> {output} </em>;
    if (underline) output = <u> {output} </u>;
    if (strong) output = <strong> {output} </strong>;

    const headTags = {
        h1: <h1 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h1>,
        h2: <h2 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h2>,
        h3: <h3 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h3>,
        h4: <h4 style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {content} </h4>
    };

    if (["heading", "title", "subTitle"].includes(type)) return headTags[tag];
    else if (type === "label") return <label style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {output} </label>;
    else if (type === "content") return <p style={{ fontWeight: fontWeight || "", color: color || "" }} className={`${style[type]} ${style[screenMode]} ${style[fontSize]}`} > {output} </p>;
    else return output;
}