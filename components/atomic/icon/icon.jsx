import style from "./icon.module.css"

/**
 * Text component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {( "is_72" | "is_60" | "is_52" | "is_48" | "is_44" | "is_40" | "is_38" | "is_36" | "is_34" | "is_32" | "is_30" | "is_28" | "is_24" | "is_20" | "is_16" | "is_14" | "is_12" | "is_10" | "is_8" )} iconSizeTypes
 * @param {{
 *      screenMode: screenModeTypes, 
 *      iconSize: iconSizeTypes, 
 *      fill: String, 
 * }} args
 * @param args.screenMode - screenMode type
 * @param args.type - icon type
 * @param args.iconSize - responsive icon size
 * @param args.fill - fill color of the icon
 */

import Icons from "./lib/__list"

export default function Icon({
    screenMode = "light", 
    type = "Account",
    iconSize = "is_72",
    fill
}){
    const IconType = Icons[type]
    return (
        <svg className={`${style[iconSize]} ${style[screenMode]}`} viewBox="0 0 14 14">
            <IconType fill={fill} />
        </svg>
    )
}