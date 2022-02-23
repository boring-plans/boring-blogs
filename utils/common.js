import fireworks from "fireworks";

export const star = (ev) => {
  fireworks({
    x: ev.x,
    y: ev.y,
    colors: [
      "#4FC3F7",
      "#4DD0E1",
      "#303F9F",
      "#7E57C2",
      "#F8BBD0",
      "#FFAB91",
      "#E57373",
    ],
    bubbleSizeMaximum: 8,
  });
};
