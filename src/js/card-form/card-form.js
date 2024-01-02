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

  checkTypeCard(string) {
    const dinersCard = [30, 36, 38, 39]
    const jsbCard = [352800, 358999]
    const express = [34, 37]

    console.log(string[0])
    console.log(string.substring(0, 2))

    // check type of card
    if (string.length === 16) {

      if (string[0] === '4') {
        return 'visa';
      } else if (string[0] === '5') {
        return 'mastercard';
      } else if (string[0] === '6') {
        return 'discover';

      } else if (dinersCard.includes(string.substring(0, 2))) {
        return 'diners';
      } else if (string.substring(0, 2) in express) {
        return 'express';
      } else if (string.substring(0, 6) >= jsbCard[0] & string.substring(0, 6) <= jsbCard[1]) {
        return 'jsb';
      } else {
        return 'unknown';
      }
    }
  }

  onKeyPress(event) {
    const valueInput = this._inputField.value;

    if (this.checkValidInput(valueInput) === false) {
      console.log('Не правильный ввод');
      this._inputField.classList.add('card-alert')
    }
    else {
      // if valid input check 16 numbers and return type card and show it
      console.log('Правильный ввод');
      this._inputField.classList.remove('card-alert')
      if (valueInput.length === 16) {
        const typeCard = this.checkTypeCard(valueInput);
        console.log(typeCard);
      }
    }



}

}
