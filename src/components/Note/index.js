import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import styles from "./note.module.css";

const NOTE_WIDTH = 95;
const NOTE_HEIGHT = 50;

const NOTE_LIGHT_SPRITE = "sprites/note_light.png";
const NOTE_BODY_SPRITE = "sprites/note_body.png";
const NOTE_BASE_SPRITE = "sprites/note_base.png";

function createImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

function drawImage(id, img, isLoaded = function () {}) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    isLoaded(true);
  };
}

function changeColor(id, img, color) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, NOTE_WIDTH, NOTE_HEIGHT);
  ctx.drawImage(img, 0, 0);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, NOTE_WIDTH, NOTE_HEIGHT);
  ctx.globalCompositeOperation = "source-over";
}

const Note = ({ id, lightColor, bodyColor }) => {
  const [lightLoaded, setLightLoaded] = useState(false);
  const [bodyLoaded, setBodyLoaded] = useState(false);

  const lightIdRef = useRef(`${id}-note-light`);
  const lightImgRef = useRef(createImage(NOTE_LIGHT_SPRITE));

  const bodyIdRef = useRef(`${id}-note-body`);
  const bodyImgRef = useRef(createImage(NOTE_BODY_SPRITE));

  const baseIdRef = useRef(`${id}-note-base`);
  const baseImgRef = useRef(createImage(NOTE_BASE_SPRITE));

  useEffect(function () {
    drawImage(baseIdRef.current, baseImgRef.current);
    drawImage(lightIdRef.current, lightImgRef.current, setLightLoaded);
    drawImage(bodyIdRef.current, bodyImgRef.current, setBodyLoaded);
  }, []);

  useEffect(
    function () {
      if (lightColor) {
        changeColor(lightIdRef.current, lightImgRef.current, lightColor);
      }
    },
    [lightLoaded, lightColor]
  );

  useEffect(
    function () {
      if (bodyColor) {
        changeColor(bodyIdRef.current, bodyImgRef.current, bodyColor);
      }
    },
    [bodyLoaded, bodyColor]
  );

  return (
    <div className={styles["sprites-container"]}>
      <canvas
        id={`${id}-note-light`}
        className={classNames(styles.sprite, styles["note-light"])}
        width={NOTE_WIDTH}
        height={NOTE_HEIGHT}
      />
      <canvas
        id={`${id}-note-base`}
        className={classNames(styles.sprite, styles["note-base"])}
        width={NOTE_WIDTH}
        height={NOTE_HEIGHT}
      />
      <canvas
        id={`${id}-note-body`}
        className={classNames(styles.sprite, styles["note-body"])}
        width={NOTE_WIDTH}
        height={NOTE_HEIGHT}
      />
    </div>
  );
};

export default Note;
