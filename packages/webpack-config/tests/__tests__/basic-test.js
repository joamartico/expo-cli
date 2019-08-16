/* global page */
import config from '../../jest-puppeteer.config';

beforeEach(async () => {
  await page.goto(config.url);
});

it(`should match a text element`, async () => {
  await expect(page).toMatchElement('div[data-testid="basic-text"]', {
    text: 'Open up App.js to start working on your app!',
  });
});

it(`should be aware of process.env.CI`, async () => {
  await expect(page).toMatchElement('div[data-testid="has-ci-text"]', {
    text: 'Has CI env',
  });
});