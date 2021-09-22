import InputColor from "components/InputColor";
import NoteContext from "contexts/note";
import { useContext } from "react";

const NoteForm = ({ mainLabel, animationLabel }) => {
  const { main, setMain, animation, setAnimation } = useContext(NoteContext);
  return (
    <form>
      <div className="d-flex justify-content-evenly text-center">
        <InputColor label={mainLabel} color={main} setColor={setMain} />
        <InputColor
          label={animationLabel}
          color={animation}
          setColor={setAnimation}
        />
      </div>
    </form>
  );
};

export default NoteForm;
