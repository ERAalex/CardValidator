import CardWidget from "../card-types/card-types.js";

export default class CardForm {
  // This class response for input numbers of cards
  constructor(element) {
    this._element = element;
    this._inputField = this._element.querySelector('.card-input');
    this._message = this._element.querySelector('.message-status');
    this._alertMessages =["Card is not defined",
                         "Incorrect input",]

  // listener part
    this.onKeyPress = this.onKeyPress.bind(this);
    this._inputField.addEventListener('keyup', this.onKeyPress);
  }

  checkValidInput(string) {
    // check valid input if it is a Number
    const regex = /^\d+$/;
    if (regex.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  checkTypeCard(string) {
    // check type of card - visa, mastercard, discover, diners, jsb
    const dinersCard = ['30', '36', '38', '39']
    const jsbCard = [352800, 358999]
    const express = ['34', '37']

    console.log(string[0])
    console.log(string.substring(0, 2))

    if (string.length === 16) {

      if (string[0] === '4') {
        return 'visa';
      } else if (string[0] === '5') {
        return 'mastercard';
      } else if (string[0] === '6') {
        return 'discover';
      } else if (dinersCard.includes(string.substring(0, 2))) {
        return 'diners';
      } else if (express.includes(string.substring(0, 2))) {
        return 'express';
      } else if (Number(string.substring(0, 6)) >= jsbCard[0] & Number(string.substring(0, 6)) <= jsbCard[1]) {
        return 'jsb';
      } else {
        return 'Card is not defined';
      }
    }
  }

  onKeyPress(event) {
    const valueInput = this._inputField.value;

    if (this.checkValidInput(valueInput) === false) {
      // if not valid input add red color to input field
      this._message.textContent = this._alertMessages[1];
      this._inputField.classList.add('card-alert')
    }
    else {
      // if valid input check 16 numbers and return type card and show it
      this._inputField.classList.remove('card-alert')
      this._message.textContent = ' ';
      const checkAlert = this._element.querySelector('.incorrect-card-type') !== null;
      if (checkAlert) {
        checkAlert.remove();
      }

      if (valueInput.length === 16) {
        const typeCard = this.checkTypeCard(valueInput);
        console.log(typeCard);
        // if card is not defined add message
        if (typeCard === 'Card is not defined') {
          this._message.textContent = this._alertMessages[0];
        } else {
          const widgetCard = new CardWidget(document.querySelector(".card-main-container"));
          widgetCard.cardDeactivateAll();
          widgetCard.cardActivate(typeCard);
      };
    }


}}}
