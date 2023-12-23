
export default class ImageWidget {
  constructor(element) {
    this._element = element;
    this._total_fields = 16;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  deleteActiveRabbit() {
    const activeElements = this._element.querySelectorAll('.item-table-active');

    if (activeElements.length != 0){
      activeElements[0].classList.remove("item-table-active");
    }
  }

  addRandomRabbit() {
    // const activeElements = this._element.querySelectorAll('.item-table-active');

    // if (activeElements.length != 0){
    //   activeElements[0].classList.remove("item-table-active");
    // }

    const newElements = this._element.querySelectorAll('.item-table');
    
    let choiceField = this.getRandomInt(this._total_fields)


    let randomField = newElements[choiceField]
    randomField.classList.add("item-table-active");

  }


}
