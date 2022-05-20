import InputColor from "components/InputColor";
import { EditorContext } from "contexts/EditorContext";
import { useContext } from "react";

const NoteForm = ({ mainLabel, animationLabel, section }) => {
  const { config, setColor } = useContext(EditorContext);

  const handlePickColorMain = (hex) => {
    setColor(section, mainLabel, hex);
  };

  const handlePickColorAnim = (hex) => {
    setColor(section, animationLabel, hex);
  };

  return (
    <>
      <InputColor
        label={mainLabel}
        color={config[section][mainLabel]}
        onPickColor={handlePickColorMain}
      />
      <InputColor
        label={animationLabel}
        color={config[section][animationLabel]}
        onPickColor={handlePickColorAnim}
      />
    </>
  );
};

export default NoteForm;
