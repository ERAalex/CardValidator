import ImageWidget from "./field-runner";

describe("field-runner", () => { 
  test("generateRandomNumber", () => {
    const widget = new ImageWidget(document.querySelector(".table-main"));
    const randomNumber = widget.getRandomInt(10);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(10);
  })

  test("totalFields", () => {
    const widget = new ImageWidget(document.querySelector(".table-main"));
    expect(widget._total_fields).toBe(16);
  })

  
})
