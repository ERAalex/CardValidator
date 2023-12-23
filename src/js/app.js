import ImageWidget from "./field-runner/field-runner";

console.log('start')

document.addEventListener('DOMContentLoaded', () => {
  const widget = new ImageWidget(document.querySelector('.table-main'));

  console.log(widget.addImageRabbit())

  window.widget = widget;
});
