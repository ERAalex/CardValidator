import CardWidget from "../card-types/card-types.js";
import CardValidation from "./card-form-validation.js";

export default class CardForm {
  // This class response for input numbers of cards
  constructor(element) {
    this._element = element;
    this._inputField = this._element.querySelector(".card-input");
    this._buttonValidate = this._element.querySelector(".button-card");
    this._message = this._element.querySelector(".message-status");
    this._alertMessages = [
      "Card is not defined",
      "Incorrect card input",
      "Please enter your card number",
      "You didn't fill card number correctly",
      "Your card number is correct. Card-type: ",
    ];

    // listener part
    this.onKeyPress = this.onKeyPress.bind(this);
    this._inputField.addEventListener("keyup", this.onKeyPress);

    this.onPressButton = this.onPressButton.bind(this);
    this._buttonValidate.addEventListener("click", this.onPressButton);
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

  onPressButton(event) {
    event.preventDefault();
    console.log("heyyy");
    const validateClass = new CardValidation();
    const valueInput = this._inputField.value;
    const widgetCard = new CardWidget(
      document.querySelector(".card-main-container")
    );

    if (valueInput.length >= 14) {
      // if input lenght is 14+ numbers logic for return type card and show it
      // const typeCard = this.checkTypeCard(valueInput);
      const typeCard = validateClass.checkTypeCard(valueInput);

      // if card is not defined add message
      if (typeCard === "Card is not defined") {
        this._message.textContent = this._alertMessages[0];
        this._inputField.classList.add("card-alert");
        // if Lulh alghoritm show that number is not valid
      } else if (typeCard === "Incorrect card input") {
        this._message.textContent = this._alertMessages[1];
        this._inputField.classList.add("card-alert");
      } else if (widgetCard._awailableCards.includes(typeCard)) {
        widgetCard.cardDeactivateAll();
        widgetCard.cardActivate(typeCard);
        this._inputField.classList.add("card-valid");
        this._message.textContent = this._alertMessages[4] + typeCard;
      }
    } else {
      this._message.textContent = this._alertMessages[3];
    }
  }

  onKeyPress() {
    const validateClass = new CardValidation();
    const valueInput = this._inputField.value;
    const widgetCard = new CardWidget(
      document.querySelector(".card-main-container")
    );
    this._inputField.classList.remove("card-valid");

    if (valueInput.length === 0) {
      this._message.textContent = this._alertMessages[2];
      this._inputField.classList.remove("card-alert");
      widgetCard.cardDeactivateAll();
    }

    if (
      (this.checkValidInput(valueInput) === false) &
      (valueInput.length > 0)
    ) {
      // if not valid input add red color to input field
      this._message.textContent = this._alertMessages[1];
      this._inputField.classList.remove("card-valid");
      this._inputField.classList.add("card-alert");
    } else {
      this._inputField.classList.remove("card-alert");
      widgetCard.cardDeactivateAll();
      this._message.textContent = " ";
      const checkAlert =
        this._element.querySelector(".incorrect-card-type") !== null;
      if (checkAlert) {
        checkAlert.remove();
      }

      if (valueInput.length >= 14) {
        // if input lenght is 14+ numbers logic for return type card and show it
        // const typeCard = this.checkTypeCard(valueInput);
        const typeCard = validateClass.checkTypeCard(valueInput);

        // if card is not defined add message
        if (typeCard === "Card is not defined") {
          this._message.textContent = this._alertMessages[0];
          this._inputField.classList.add("card-alert");
          // if Lulh alghoritm show that number is not valid
        } else if (typeCard === "Incorrect card input") {
          this._message.textContent = this._alertMessages[1];
          this._inputField.classList.add("card-alert");
        } else if (widgetCard._awailableCards.includes(typeCard)) {
          widgetCard.cardDeactivateAll();
          widgetCard.cardActivate(typeCard);
          this._inputField.classList.add("card-valid");
        }
      }
    }
  }
}
