import { useState } from "react";
import { ChromePicker } from "react-color";
import reactCSS from "reactcss";
import styles from "./input-color.module.css";

const InputColor = ({ label, color, onPickColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  function handleClick() {
    setDisplayColorPicker(!displayColorPicker);
  }

  function handleClose() {
    setDisplayColorPicker(false);
  }

  function handleChange({ hex }) {
    onPickColor(hex);
  }

  const customStyles = reactCSS({
    default: {
      color: {
        background: color,
      },
    },
  });

  return (
    <div className={styles.inputcolor}>
      {label}
      <div className="">
        <div className={styles.swatch} onClick={handleClick}>
          <div className={styles.color} style={customStyles.color}>
            {color}
          </div>
        </div>
        {displayColorPicker ? (
          <div className={styles.popover}>
            <div className={styles.cover} onClick={handleClose} />
            <ChromePicker
              disableAlpha={true}
              color={color}
              onChange={handleChange}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InputColor;
