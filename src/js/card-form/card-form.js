export default class CardForm {
  // This class response for input numbers of cards
  constructor(element) {
    this._element = element;
    this._inputField = this._element.querySelector('.card-input');

  // listener part
    this.onKeyPress = this.onKeyPress.bind(this);
    this._inputField.addEventListener('keyup', this.onKeyPress);
  }

  checkValidInput(string) {
    const regex = /^\d+$/;

    if (regex.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  onKeyPress(event) {
    console.log(event)
    const valueInput = this._inputField.value;

    if (this.checkValidInput(valueInput) === false) {
      console.log('Не правильный ввод');
      this._inputField.classList.add('card-alert')
    }
    else {
      console.log('Правильный ввод');
      this._inputField.classList.remove('card-alert')
    }

}

}
