import NoteCard from "components/NoteCard";
import styles from "./DrumEditor.module.css";

export const DrumEditor = () => {
  return (
    <div className={styles.drumeditor}>
      <div className={styles.row}>
        <NoteCard
          id="cym_red"
          title="Cymbol Red"
          section="drums"
          mainLabel="cym_red"
          animationLabel="cym_anim_red"
        />
        <NoteCard
          id="cym_yellow"
          title="Cymbol Yellow"
          section="drums"
          mainLabel="cym_yellow"
          animationLabel="cym_anim_yellow"
        />
        <NoteCard
          id="cym_blue"
          title="Cymbol Blue"
          section="drums"
          mainLabel="cym_blue"
          animationLabel="cym_anim_blue"
        />
        <NoteCard
          id="cym_green"
          title="Cymbol Green"
          section="drums"
          mainLabel="cym_green"
          animationLabel="cym_anim_green"
        />
      </div>

      <div className={styles.row}>
        <NoteCard
          id="tom_red"
          title="TomTom Red"
          section="drums"
          mainLabel="tom_red"
          animationLabel="tom_anim_red"
        />
        <NoteCard
          id="tom_yellow"
          title="TomTom Yellow"
          section="drums"
          mainLabel="tom_yellow"
          animationLabel="tom_anim_yellow"
        />
        <NoteCard
          id="tom_blue"
          title="TomTom Blue"
          section="drums"
          mainLabel="tom_blue"
          animationLabel="tom_anim_blue"
        />
        <NoteCard
          id="tom_green"
          title="TomTom Green"
          section="drums"
          mainLabel="tom_green"
          animationLabel="tom_anim_green"
        />
      </div>
    </div>
  );
};
