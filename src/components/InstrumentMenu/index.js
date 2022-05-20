import React from "react";
import classNames from "classnames";
import styles from "./InstrumentMenu.module.css";

export const InstrumentMenu = ({ selected, onChange }) => {
  return (
    <div className={styles.instrumentmenu}>
      <button
        className={classNames(styles.btn, {
          [styles.selected]: selected === "guitar",
        })}
        onClick={() => onChange("guitar")}
      >
        Guitar
      </button>

      <button
        className={classNames(styles.btn, {
          [styles.selected]: selected === "drums",
        })}
        onClick={() => onChange("drums")}
      >
        Drums
      </button>
      <hr className={styles.hr} />
    </div>
  );
};
