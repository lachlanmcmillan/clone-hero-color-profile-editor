import NoteCard from "components/NoteCard";
import styles from "./GuitarEditor.module.css";

export const GuitarEditor = () => {
  return (
    <div className={styles.drumeditor}>
      <div className={styles.row}>
        <NoteCard
          id="note_green"
          section="guitar"
          mainLabel="note_green"
          animationLabel="note_anim_green"
        />
        <NoteCard
          id="note_red"
          section="guitar"
          mainLabel="note_red"
          animationLabel="note_anim_red"
        />
        <NoteCard
          id="note_yellow"
          section="guitar"
          mainLabel="note_yellow"
          animationLabel="note_anim_yellow"
        />
        <NoteCard
          id="note_blue"
          section="guitar"
          mainLabel="note_blue"
          animationLabel="note_anim_blue"
        />
        <NoteCard
          id="note_orange"
          section="guitar"
          mainLabel="note_orange"
          animationLabel="note_anim_orange"
        />
      </div>
    </div>
  );
};
