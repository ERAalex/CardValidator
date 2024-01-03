import CardWidget from "../card-types/card-types.js";
import valid_credit_card from "../card-form/is-valid-check.js"; 

export default class CardForm {
  // This class response for input numbers of cards
  constructor(element) {
    this._element = element;
    this._inputField = this._element.querySelector('.card-input');
    this._message = this._element.querySelector('.message-status');
    this._alertMessages =['Card is not defined',
                          'Incorrect card input',
                          'Please enter your card number']

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
    // check type of card - visa, mastercard, discover, diners, jsb, mir
    const dinersCard = ['30', '36', '38', '39']
    const jsbCard = [352800, 358999]
    const express = ['34', '37']
    const mir = ['2']
    const visa = ['4']
    const mastercard = ['5']
    const discover = ['6']

    if (string.length === 16) {

      if (!valid_credit_card(string)) {
        return 'Incorrect card input';
      }

      if (visa.includes(string[0])) {
        return 'visa';
      } else if (mir.includes(string[0])) {
        return 'mir';
      } else if (mastercard.includes(string[0])) {
        return 'mastercard';
      } else if (discover.includes(string[0])) {
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
    const widgetCard = new CardWidget(document.querySelector(".card-main-container"));
    this._inputField.classList.remove('card-valid')

    if (valueInput.length === 0) {
      this._message.textContent = this._alertMessages[2];
      this._inputField.classList.remove('card-alert')
      widgetCard.cardDeactivateAll();
    }

    if (this.checkValidInput(valueInput) === false & valueInput.length > 0) {
      // if not valid input add red color to input field
      this._message.textContent = this._alertMessages[1];
      this._inputField.classList.remove('card-valid')
      this._inputField.classList.add('card-alert')
    } else {
      this._inputField.classList.remove('card-alert')
      widgetCard.cardDeactivateAll();
      this._message.textContent = ' ';
      const checkAlert = this._element.querySelector('.incorrect-card-type') !== null;
      if (checkAlert) {
        checkAlert.remove();
      }

      if (valueInput.length === 16) {
        // if input lenght is 16 numbers logic for return type card and show it
        const typeCard = this.checkTypeCard(valueInput);

        // if card is not defined add message
        if (typeCard === 'Card is not defined') {
          this._message.textContent = this._alertMessages[0];
          this._inputField.classList.add('card-alert')
        // if Lulh alghoritm show that number is not valid
        } else if (typeCard === 'Incorrect card input') {
          this._message.textContent = this._alertMessages[1];
          this._inputField.classList.add('card-alert')
        } else {
          widgetCard.cardDeactivateAll();
          widgetCard.cardActivate(typeCard);
          this._inputField.classList.add('card-valid')
      };
    }
  }
}}
