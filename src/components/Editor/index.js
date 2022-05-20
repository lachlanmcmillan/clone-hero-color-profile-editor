import React from "react";
import saveAs from "file-saver";

import { EditorContext } from "contexts/EditorContext";
import { DrumEditor } from "components/DrumEditor";
import { GuitarEditor } from "components/GuitarEditor";
import { ButtonBar } from "components/ButtonBar";
import { InstrumentMenu } from "components/InstrumentMenu";
import { parseIni, generateIni } from "util/ini";
import { fileToText } from "util/fileToText";
import { defaultConfig } from "util/defaultConfig.ini";

import styles from "./Editor.module.css";

export const Editor = (props) => {
  const [file, setFile] = React.useState(defaultConfig);
  const [filename, setFilename] = React.useState("clone-hero-color-editor.ini");
  const [config, setConfig] = React.useState(parseIni(defaultConfig));
  const [instrument, setInstrument] = React.useState("guitar");

  const setColor = (section, label, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [section]: {
        ...prevConfig[section],
        [label]: value,
      },
    }));
  };

  const handleExportFile = () => {
    const ini = generateIni(file, config);
    const f = new File([ini], { type: "text/plain" });
    saveAs(f, filename);
  };

  const handleImportFile = async (evt) => {
    const f = evt.target.files[0];

    let fileContents;
    try {
      fileContents = await fileToText(f);
    } catch (err) {
      alert("error loading file");
      console.error(err);
      return;
    }

    let newConfig;
    try {
      newConfig = await parseIni(fileContents);
    } catch (err) {
      alert("error parsing file");
      console.error(err);
      return;
    }

    setFile(fileContents);
    setFilename(f.name);
    setConfig(newConfig);
  };

  const handleInstrumentChange = (value) => {
    setInstrument(value);
  };

  return (
    <div className={styles.editor}>
      <EditorContext.Provider value={{ config, setColor }}>
        <InstrumentMenu
          selected={instrument}
          onChange={handleInstrumentChange}
        />
        {instrument === "guitar" && <GuitarEditor />}
        {instrument === "drums" && <DrumEditor />}
        <ButtonBar
          onExportClick={handleExportFile}
          onImportFileChange={handleImportFile}
        />
      </EditorContext.Provider>
    </div>
  );
};
