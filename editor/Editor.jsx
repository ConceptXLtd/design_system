import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";
import "froala-editor/css/plugins/code_view.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import style from "./editor.module.css";

/**
 * Editor component is reusable for every case
 * @typedef {("string" | "JSX.Element")} labelTypes
 * @param {{
 *      label: labelTypes,
 *      infoIcon: JSX.Element,
 *      infoText: string,
 *      placeholder: string,
 *      value: string,
 *      onChangeEvent: Function,
 *      visibilityOnIcon: JSX.Element,
 *      visibilityOffIcon: JSX.Element,
 *      hasError: boolean,
 * }} args
 * @param args.name - field name
 * @param args.label - field title
 * @param args.infoIcon - svg icon for hover information
 * @param args.infoText - hover information
 * @param args.placeholder - field placeholder
 * @param args.value - corresponding value
 * @param args.onChange - event to fire onChange
 */
export default function Editor({ label, infoIcon, infoText, value = "", placeholder, minHeight = 300, onChange }) {
  return (
    <>
      <div className={style.label__wrapper}>
        {label}
        {infoText && <div title={infoText}>{infoIcon}</div>}
      </div>
      <FroalaEditor
        model={value}
        config={{
          placeholderText: placeholder,
          heightMin: minHeight,
          attribution: false,
        }}
        onModelChange={onChange}
      />
    </>
  );
}
