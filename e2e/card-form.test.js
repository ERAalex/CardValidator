import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Page start', () => {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      // need to create path to google chrome fom MAC M2
      executablePath: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test("Test if input card number is valid, as example - Visa", async () => {
    await page.goto("http://localhost:8080");
    const input = await page.$(".card-input");
    await input.type("4556737586899855"); // Visa
    const button = await page.$(".button-card");
    await button.click();
    const message = await page.$(".message-status");

    // special page.$eval to get querySelector in puppeteer
    const imageActiveStyle = await page.$eval(".message-status", (el) =>
      el.textContent
    );
    expect(imageActiveStyle).toBe("Your card number is correct. Card-type: visa");

  });

  test("Luhn alghoritm test", async () => {
    await page.goto("http://localhost:8080");
    const input = await page.$(".card-input");
    await input.type("6011120000777076"); // Discover - wrong card number
    const button = await page.$(".button-card");
    await button.click();
    const message = await page.$(".message-status");

    // special page.$eval to get querySelector in puppeteer
    const imageActiveStyle = await page.$eval(".message-status", (el) =>
      el.textContent
    );
    expect(imageActiveStyle).toBe("Incorrect card input");

  });

  afterAll(async () => {
    await browser.close();
  });

});
