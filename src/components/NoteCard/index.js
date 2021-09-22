import Note from "components/Note";
import NoteForm from "components/NoteForm";
import NoteContext from "contexts/note";
import { useContext } from "react";

const NoteCard = ({ id, title }) => {
  const { main, animation } = useContext(NoteContext);

  return (
    <div className="card mb-3 bg-dark text-white">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="d-flex w-100 h-100 align-items-center justify-content-center p-2">
            <Note id={id} bodyColor={main} lightColor={animation} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <div className="mt-3">
              <NoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
