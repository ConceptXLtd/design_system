/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import customStyle from "./customSelect.module.css";
import style from "./select.module.css";

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
export default function Select(props) {
  return props.type === "custom" ? <Select.Custom {...props} /> : <Select.Basic {...props} />;
}

// eslint-disable-next-line react/display-name
Select.Basic = ({
  screenMode = "light",
  label,
  infoIcon,
  infoText,
  TextComponent,
  fontSize,
  name,
  placeholder,
  value,
  onChangeEvent,
  hasError,
  options = [],
}) => {
  return (
    <>
      <div className={style.label__wrapper}>
        {label}
        {infoText && <div title={infoText}>{infoIcon}</div>}
      </div>
      <div className={style.input__group}>
        <select
          className={`${style.input__control} ${style[screenMode]} ${hasError ? style.input__error : ""}`}
          name={name}
          value={value}
          onChange={onChangeEvent}
        >
          <option>{placeholder}</option>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              <TextComponent screenMode={screenMode} content={option.name} type="label" fontSize={fontSize} />
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

// eslint-disable-next-line react/display-name
Select.Custom = ({
  screenMode = "light",
  label,
  infoIcon,
  infoText,
  TextComponent,
  fontSize,
  name,
  placeholder,
  value,
  options,
  onChangeEvent,
}) => {
  const wrapperRef = useRef(null);
  const selectRef = useRef(null);
  const optionsRef = useRef(null);
  const optionRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    options.find((option) => {
      return option.value === value && setSelectedOption({ ...option });
    });
  }, [value]);

  // handle click outside
  const handleOutSideClick = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      optionsRef.current.style.opacity = 0;
      optionsRef.current.style.pointerEvents = "none";
    }
  };

  // listener for click outside
  useEffect(() => {
    document.addEventListener("click", handleOutSideClick, true);
    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  }, [optionsRef]);

  // show or hide the options box
  const handleOptionsShow = () => {
    if (optionsRef.current.style.opacity === "1") {
      optionsRef.current.style.opacity = 0;
      optionsRef.current.style.pointerEvents = "none";
      optionsRef.current.style.zIndex = -2;
    } else {
      optionsRef.current.style.opacity = 1;
      optionsRef.current.style.pointerEvents = "all";
      optionsRef.current.style.zIndex = 1;
    }
  };

  const handleSelectData = (value) => {
    typeof onChangeEvent === "function" &&
      onChangeEvent({
        target: {
          name,
          value: value.value,
        },
      });
    setSelectedOption(value);
    optionsRef.current.style.opacity = 0;
    optionsRef.current.style.pointerEvents = "none";
  };

  return (
    <>
      <div className={style.label__wrapper}>
        {label}
        {infoText && <div title={infoText}>{infoIcon}</div>}
      </div>

      <div ref={wrapperRef} className={`${customStyle.wrapper} ${customStyle[screenMode]}`}>
        <div ref={selectRef} onClick={handleOptionsShow} className={customStyle.select__box}>
          {selectedOption.image && (
            <div className={customStyle.icon__wrapper}>
              <img className={customStyle.icon} src={selectedOption.image} />
            </div>
          )}

          {selectedOption.name && (
            <TextComponent screenMode={screenMode} content={selectedOption.name} type="label" fontSize={fontSize} />
          )}
        </div>
        <div ref={optionsRef} className={customStyle.options}>
          {options.map((option, key) => {
            return (
              <div className={customStyle.option} ref={optionRef} key={key} onClick={() => handleSelectData(option)}>
                <div className={customStyle.content__wrapper}>
                  {option.image && (
                    <div className={customStyle.icon__wrapper}>
                      <img className={customStyle.icon} src={option.image} />
                    </div>
                  )}
                  {option.name && (
                    <div>
                      <TextComponent screenMode={screenMode} content={option.name} type="label" fontSize={fontSize} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
