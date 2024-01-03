import CardForm from "./card-form";

describe("Card Form Widget functionality", () => {
  test("check messages alerts", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    // create fake new input for class constructor and eventListener
    const mainContainer = document.querySelector(".card-form")
    const inputElent = mainContainer.appendChild(document.createElement('input'))
    inputElent.className = "card-input";

    const widget = new CardForm(document.querySelector(".card-form"));
    widget._element.querySelector = mockQuerySelector;


    const totalMessages = widget._alertMessages;
    expect(totalMessages.length).toBe(3); // check all messages

    mockQuerySelector.mockRestore();
  });
});

describe("Check function checkTypeCard()", () => {
  test("diferents types of card need to check", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    // create fake new input for class constructor and eventListener
    const mainContainer = document.querySelector(".card-form")
    const inputElent = mainContainer.appendChild(document.createElement('input'))
    inputElent.className = "card-input";

    const widget = new CardForm(document.querySelector(".card-form"));
    widget._element.querySelector = mockQuerySelector;

    // let check;
    const card = []

    card.push ({
      visa: "4716020678046587",
      mir: "2216020678046587",
      mastercard: "5306951761201585",
      express: "342309932141239",
      discover: "6011197358921938",
      jsb: "3540137604271818",
      diners: "36779869234598"
    })
    
    // lets check all in cicle for each card
    for (const [key, value] of Object.entries(card[0])) {
      const check = widget.checkTypeCard(value)
      expect(check).toBe(key); 
    }
    
    mockQuerySelector.mockRestore();
  });
});
