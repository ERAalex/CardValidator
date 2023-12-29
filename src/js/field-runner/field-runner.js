import CounterWidget from "../counter/counter";

export default class ImageWidget {
  constructor(element) {
    this._element = element;
    this._total_fields = 16;
    this._last_position = 0;
    this._newCounter = new CounterWidget(
      document.querySelector(".counter-main")
    );

    // listener part
    this.onClickField = this.onClickField.bind(this);
    this._elements = this._element.querySelectorAll(".item-table");
    for (var i = 0; i < this._elements.length; i++) {
      this._elements[i].addEventListener("click", this.onClickField);
    }
  }

  onClickField(event) {
    /**
     * React on clock on some field. If dield is active -> add new poitns, if not -> add miss.
     * @param  {Object} event check events.
     *
     */

    let clickedElement = event.target;

    if (clickedElement.classList.contains("item-table-active")) {
      clickedElement.classList.remove("item-table-active");
      this._newCounter.newHits();
    } else {
      this._newCounter.newMiss();
    }
  }

  getRandomInt(max) {
    /**
     * Random number generator.
     * @param  {Number} number max number possible.
     * @return {Number} random number less or equal to max.
     */

    let choiceNumber = Math.floor(Math.random() * max);
    if (choiceNumber === this._last_position) {
      this.getRandomInt(max);
    }
    this._last_position = choiceNumber;
    return choiceNumber;
  }

  deleteActiveRabbit() {
    /**
     * Finds and delete all active fields.
     * @param  {} no params.
     *
     */
    const activeElements = this._element.querySelectorAll(".item-table-active");

    if (activeElements.length != 0) {
      activeElements[0].classList.remove("item-table-active");
      this._newCounter.newMiss();
    }
  }

  addRandomRabbit() {
    /**
     * Create new active field with a Rabbit.
     * @param  {} no params.
     *
     */
    const newElements = this._element.querySelectorAll(".item-table");
    let choiceField = this.getRandomInt(this._total_fields);

    let randomField = newElements[choiceField];
    randomField.classList.add("item-table-active");
  }
}
