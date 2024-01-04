export default class CardValidation {
  // This class is for decomposing CardForm class
  constructor() {}

  validCreditCard(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0,
      nDigit = 0,
      bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        newDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((newDigit *= 2) > 9) newDigit -= 9;
      }

      nCheck += newDigit;
      bEven = !bEven;
    }
    return nCheck % 10 == 0;
  }

  checkTypeCard(string) {
    // check type of card - visa, mastercard, discover, diners, jsb, mir
    const dinersCard = ["30", "36", "38", "39"]; // 14 digit
    const jsbCard = [352800, 358999]; // 16 digit
    const express = ["34", "37"]; // 15 digit
    const mir = ["2"];
    const visa = ["4"]; // 16 digit
    const mastercard = ["5"]; // 16 digit
    const discover = ["6"]; // 16 digi

    if ((string.length === 14) & dinersCard.includes(string.substring(0, 2))) {
      if (!this.validCreditCard(string)) {
        return "Incorrect card input";
      }
      return "diners";
    }

    if ((string.length === 15) & express.includes(string.substring(0, 2))) {
      if (!this.validCreditCard(string)) {
        return "Incorrect card input";
      }
      return "express";
    }

    if (string.length >= 16) {
      if (!this.validCreditCard(string) & (string[0] != "2")) {
        return "Incorrect card input";
      }
      if (visa.includes(string[0])) {
        return "visa";
      } else if (mir.includes(string[0])) {
        return "mir";
      } else if (mastercard.includes(string[0])) {
        return "mastercard";
      } else if (discover.includes(string[0])) {
        return "discover";
      } else if (
        (Number(string.substring(0, 6)) >= jsbCard[0]) &
        (Number(string.substring(0, 6)) <= jsbCard[1])
      ) {
        return "jsb";
      } else {
        return "Card is not defined";
      }
    }
  }
}
