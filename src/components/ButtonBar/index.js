import React from "react";

import styles from "./ButtonBar.module.css";

export const ButtonBar = ({ onImportFileChange, onExportClick }) => {
  const fileInputRef = React.createRef();
  return (
    <div className={styles.ButtonBar}>
      <button
        onClick={() => fileInputRef.current?.click()}
        className={styles.btn}
      >
        Import file
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={onImportFileChange}
        />
      </button>
      <button onClick={onExportClick} className={styles.btn}>
        Export file
      </button>
    </div>
  );
};
