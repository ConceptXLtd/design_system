import style from "./icon.module.css"

/**
 * Text component is reusable for every case
 * @typedef {("dark" | "light")} screenModeTypes
 * @typedef {("Admins" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "ArrowUp" | "BagDollar" | "BagIn" | "BagOut" | "Bell" | "Bookmark" | "Briefcase" | "Calendar" | "Cart" | "CartIn" | "CartOut" | "Code" | "ColorPalette" | "Connections" | "Cross" | "Cube" | "CubeIn" | "CubeOut" | "Cubes" | "Database" | "Devices" | "Document" | "Dollar" | "Drop" | "Earth" | "Editor" | "Envelope" | "EnvelopeOpened" | "Exclamation" | "EyeClosed" | "EyeOpened" | "Folder" | "Gear" | "Globe" | "Graph" | "GridRounded" | "GridTilted" | "Handshake" | "Home" | "IDCard" | "Image" | "Info" | "Items" | "Lightning" | "Lock" | "MapPointer" | "Megaphone" | "MenuDot" | "MenuLine" | "Message" | "Notebook" | "PaperPlane" | "Percentage" | "Phone" | "Pin" | "Plus" | "Puzzle" | "Quote" | "Robot" | "Shapes" | "Shop" | "Tags" | "Ticket" | "Trash" | "User" | "UserChecked" | "Users" )} iconTypes
 * @typedef {( "is_72" | "is_60" | "is_52" | "is_48" | "is_44" | "is_40" | "is_38" | "is_36" | "is_34" | "is_32" | "is_30" | "is_28" | "is_24" | "is_20" | "is_16" | "is_14" | "is_12" | "is_10" | "is_8" )} iconSizeTypes
 * @param {{
 *      screenMode: screenModeTypes, 
 *      type: iconTypes
 *      iconSize: iconSizeTypes, 
 *      fill: String,
 *      id: string
 * }} args
 * @param args.screenMode - screenMode type
 * @param args.type - icon type
 * @param args.iconSize - responsive icon size
 * @param args.fill - fill color of the icon
 * @param args.id - any id string
 */

import * as Icons from "./lib/__list"

export default function Icon({
    screenMode = "light", 
    type = "Account",
    iconSize = "is_72",
    fill,
    id
}){
    const IconType = Icons[type]
    return (
        <IconType fill={fill} id={id} className={`${style[iconSize]} ${style[screenMode]}`}/>
    )
}