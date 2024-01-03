import ImageWidget from "./field-runner";

describe("field-runner", () => {
  test("generateRandomNumber", () => {
    // Let's mock some moments for our Rabbit programm
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

    const widget = new ImageWidget(document.querySelector(".table-main"));
    widget._element.querySelectorAll = mockQuerySelectorAll;

    const randomNumber = widget.getRandomInt(10);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);

    // Restore the original function after the test
    mockQuerySelector.mockRestore();
  });

  test("totalFields", () => {
    // Let's mock some moments for our Rabbit programm
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

    const widget = new ImageWidget(document.querySelector(".table-main"));
    widget._element.querySelectorAll = mockQuerySelectorAll;

    expect(widget._total_fields).toBe(16);
  });
});
