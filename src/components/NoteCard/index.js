import React from "react";

import Note from "components/Note";
import NoteForm from "components/NoteForm";

import styles from "./NoteCard.module.css";

const NoteCard = ({ id, title, mainLabel, animationLabel, section }) => {
  return (
    <div className={styles.notecard}>
      <Note id={id} mainLabel={mainLabel} animationLabel={animationLabel} section={section} />
      <NoteForm mainLabel={mainLabel} animationLabel={animationLabel} section={section} />
    </div>
  );
};

export default NoteCard;
