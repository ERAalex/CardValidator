import CardWidget from "./card-types";

describe("Card Widget functionality", () => {
  test("check available cards", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    const widget = new CardWidget(document.querySelector(".cards-container"));
    widget._element.querySelector = mockQuerySelector;

    const totalCards = widget._awailableCards;
    expect(totalCards.length).toBe(7); // 7 cards available: visa, mir, mastercard, express, discover, jsb, diners

    mockQuerySelector.mockRestore();
  });
});

describe("Check function cardShow()", () => {
  test("create new items by innerHTML", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    const widget = new CardWidget(document.querySelector(".cards-container"));
    widget._element.querySelector = mockQuerySelector;

    // after call this function it will create 7 new elements in .cards-container (because we have 7 cards)
    widget.cardShow();
    const container = widget._element.querySelector(".cards-container");
    expect(container.children.length).toBe(7); 
    mockQuerySelector.mockRestore();
  });
});

describe("Check function cardShow()", () => {
  test("create new items by innerHTML", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    const widget = new CardWidget(document.querySelector(".cards-container"));
    widget._element.querySelector = mockQuerySelector;

    // after call this function it will create 7 new elements in .cards-container (because we have 7 cards)
    widget.cardShow();
    const container = widget._element.querySelector(".cards-container");
    expect(container.children.length).toBe(7); 
    mockQuerySelector.mockRestore();
  });
});

describe("Check function cardShow()", () => {
  test("create new items by innerHTML", () => {
    //
    const mockQuerySelector = jest
      .fn()
      .mockReturnValue(document.createElement("div"));
    document.querySelector = mockQuerySelector;

    const mockQuerySelectorAll = jest
      .fn()
      .mockReturnValue([
        document.createElement("span"),
        document.createElement("span"),
      ]);
    document.querySelectorAll = mockQuerySelectorAll;


    const widget = new CardWidget(document.querySelector(".cards-container"));
    widget._element.querySelector = mockQuerySelector;

    // after call this function it will create 7 new elements in .cards-container (because we have 7 cards)
    widget.cardShow();
    const container = widget._element.querySelector(".cards-container");
    expect(container.children.length).toBe(7); 

    widget.cardDeactivateAll();

    const checkActivatedItems = widget._element.querySelectorAll(".filter-active");
    console.log(checkActivatedItems)
    expect(checkActivatedItems.length).toBe(7);

    mockQuerySelector.mockRestore();
  });
});
