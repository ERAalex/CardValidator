// takes the form field value and returns true on valid number
export default function valid_credit_card(value) {
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
