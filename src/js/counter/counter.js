export default class CounterWidget {
  constructor(element) {
    this._element = element;
  }

  newHits() {
    const getHitsElement = this._element.querySelector(".counter-hits");
    getHitsElement.innerHTML = Number(getHitsElement.innerHTML) + 1;
  }

  newMiss() {
    const getMissElement = this._element.querySelector(".counter-miss");
    const getHitsElement = this._element.querySelector(".counter-hits");

    getMissElement.innerHTML = Number(getMissElement.innerHTML) + 1;
    if (getMissElement.innerHTML > 4) {
      alert("Game over! You lose!");
      getMissElement.innerHTML = 0;
      getHitsElement.innerHTML = 0;
    }
  }
}
