
export default class ImageWidget {
  constructor(element) {
    this._element = element;
    this._total_fields = 16;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  addImageRabbit() {
    console.log('done')

    const newElements = this._element.querySelectorAll('.item-table');
    console.log(newElements)

    // const lastImageField = newElements[newElements.length - 1];
    
    let choiceField = this.getRandomInt(this._total_fields)
    console.log(choiceField)

    let randomField = newElements[choiceField]
    randomField.classList.add("item-table-active");
    console.log(randomField)
    // console.log(lastImageField)
    // this._element.removeChild(lastImageField)

    console.log('--------')
  }


}
