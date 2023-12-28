import ImageWidget from "./field-runner/field-runner";
import CounterWidget from "./counter/counter";

console.log("start");

document.addEventListener("DOMContentLoaded", () => {
  const widget = new ImageWidget(document.querySelector(".table-main"));
  const widgetCounter = new CounterWidget(document.querySelector(".counter-main"));

  setInterval(() => {
    widget.deleteActiveRabbit();
    widget.addRandomRabbit();
    widgetCounter.newHits();
  }, 1000);
});

export default function demo(value) {
  return `Demo: ${value}`;
}
