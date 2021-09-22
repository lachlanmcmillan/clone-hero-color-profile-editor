import React from "react";

const NoteContext = React.createContext({
  main: "",
  setMain: function () {},
  animation: "",
  setAnimation: function () {},
});

export default NoteContext;
