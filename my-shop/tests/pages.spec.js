const { test, expect } = require('@playwright/test');

test('Candles page should render 12 cards', async ({ page }) => {
  // Navigate to the page where the Candles component is rendered
  await page.goto('https://is-218-final-nu.vercel.app/candles'); // Replace with your actual URL
  
  // Use a selector that matches your card elements
  const cardSelector = '.candle-card'; // This should be the class name or data attribute for your Card components

  // Wait for the card elements to be rendered
  await page.waitForSelector(cardSelector);
  
  // Count the number of card elements
  const cardCount = await page.locator(cardSelector).count();
  
  // Assert that there are exactly 12 cards
  await expect(cardCount).toBe(12);
});


test('CookieConsent component should have text and buttons', async ({ page }) => {
  // Navigate to the page where the CookieConsent component is rendered
  await page.goto('https://is-218-final-nu.vercel.app/'); // Replace with your actual URL

  // Check for the presence of the 'Cookie Policy' link
  await expect(page.locator('.cookie-consent a')).toHaveText('Cookie Policy');

  // Check for the presence of the 'Accept All' button
  await expect(page.locator('button', { hasText: 'Accept All' })).toBeVisible();

  // Check for the presence of the 'Reject All' button
  await expect(page.locator('button', { hasText: 'Reject All' })).toBeVisible();
});


test('FAQs page should render 10 questions and answers', async ({ page }) => {
  // Navigate to the page where the FAQs component is rendered
  await page.goto('https://is-218-final-nu.vercel.app/faq'); // Replace with your actual URL
  
  // Count the number of elements with the class 'question'
  const numberOfQuestions = await page.locator('.question').count();
  
  // Assert that there are exactly 10 questions
  await expect(numberOfQuestions).toBe(10);

  // Count the number of elements with the class 'answer'
  const numberOfAnswers = await page.locator('.answer').count();
  
  // Assert that there are exactly 10 answers
  await expect(numberOfAnswers).toBe(10);
});



test('Footer should have a logo image', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL
  const logo = page.locator('footer img[alt="Wander Glow Logo"]');
  await expect(logo).toBeVisible();
});



test('Footer should have specific text indicating copyright', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL
  
  // Find the paragraph inside the div with the class 'footer-text'
  const footerText = page.locator('.footer-text p');
  
  // Check that the paragraph contains the specific text
  await expect(footerText).toContainText('Â© 2023 All Rights Reserved | Wander Glow');
});


test('Header should have "Home" and "Candles" links', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL
  
  // Check for the "Home" link
  const homeLink = page.locator('text=Home').first();
  await expect(homeLink).toHaveAttribute('href', './');
  
  // Check for the "Candles" link
  const candlesLink = page.locator('text=Candles').first();
  await expect(candlesLink).toHaveAttribute('href', './candles');
});


test('Cart popover in Header should display empty cart message', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL
  
  // Trigger the cart popover to open, assuming there's a clickable element to do so
  await page.click('text=Cart');
  
  // Verify that the cart popover content is visible
  const cartPopoverContent = page.locator('.px-1.py-2');
  await expect(cartPopoverContent).toBeVisible();

  // Verify the "Cart" title in the popover
  const cartTitle = cartPopoverContent.locator('.text-small.font-bold >> text=Cart');
  await expect(cartTitle).toBeVisible();
  
  // Verify the "Your cart is currently empty." text in the popover
  const cartEmptyText = cartPopoverContent.locator('.text-tiny >> text=Your cart is currently empty.');
  await expect(cartEmptyText).toBeVisible();
});


test('MainBanner should have the correct heading and button', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL
  
  // Verify the presence and content of the heading
  const heading = page.locator('h1 >> text=Embrace Ambiance with Wander Glow');
  await expect(heading).toBeVisible();

  // Verify the presence of the 'Browse Candles' button
  const browseButton = page.locator('.browse-button:has-text("Browse Candles")');
  await expect(browseButton).toBeVisible();

  await browseButton.click();
  await expect(page.url()).toContain('https://is-218-final-nu.vercel.app/candles');
});



test('ReviewSection should have 3 reviews each within a card', async ({ page }) => {
  await page.goto('https://is-218-final-nu.vercel.app'); // Replace with your actual URL where ReviewSection is rendered
  
  // Locate the review cards
  const reviewCards = page.locator('.review-card');
  
  // Verify that there are exactly 3 review cards
  await expect(reviewCards).toHaveCount(3);

  // Optional: Verify the content of each review card if necessary
  for (let i = 1; i <= 3; i++) {
    const reviewCard = reviewCards.nth(i - 1);
    await expect(reviewCard.locator('.text-md')).toBeVisible(); // Check if reviewer's name is visible
    await expect(reviewCard.locator('.rating')).toBeVisible(); // Check if rating is visible
    await expect(reviewCard.locator('.title')).toBeVisible(); // Check if review title is visible
    await expect(reviewCard.locator('.content')).toBeVisible(); // Check if review content is visible
  }
});