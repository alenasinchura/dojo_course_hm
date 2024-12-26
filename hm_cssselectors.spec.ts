import { test, expect } from '@playwright/test';

test('HM 0 - adding a cup of coffee to the cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $12.00');
  await expect(page.locator('[aria-label="Cart page"]')).toContainText('cart (1)');
});


test('HM 01 - redirect to Payment details form', async({page}) =>{
  await page.goto('https://coffee-cart.app/')

  await page.locator('[data-test="Mocha"]').click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('button[id="submit-payment"]')).toBeVisible()

});


test('HM 02 - filling payment details form with valid data',async({page})=>{
  await page.goto('https://coffee-cart.app/')

  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('input[name="name"]').fill('alona');
  await page.locator('input[name="email"]').fill('dev@test.com');

  await expect(page.locator('label[aria-label="Promotion message"]')).toContainText('I would like to receive order updates and promotional messages.');
  await page.locator('input[type="checkbox]').check();

  await page.locator('button[type="submit"]').click();
  
  test.setTimeout(50000);
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
 
});
// await expect(page.locator('[class="snackbar success"]')).toContainText('Thanks for your purchase. Please check your email for payment.');

// await expect(page.locator('[id="app"]')).toContainText('Thanks for your purchase. Please check your email for payment.');


test('HM 03 - closing payment details form with empty data', async({page}) =>{
  await page.goto('https://coffee-cart.app/')

  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="checkout"]').click();

  await expect(page.locator('button[class="close"]')).toBeVisible();
  await page.locator('button[class="close"]').click();

});


test('HM 04 - Removing coffee from the cart', async({page}) =>{
  await page.goto('https://coffee-cart.app/')

  await page.locator('[data-test="Flat_White"]').click();

  await page.getByLabel('Cart page').click();
  // await page.goto('https://coffee-cart.app/cart')
  // await page.locator('a[class="router-link-active router-link-exact-active"]').click();

  await page.locator('button[class="delete"]').click();

  //   await page.locator(button[aria-label="Remove all Espresso"]).click();
  await page.locator('div').filter({ hasText: /^No coffee, go add some\.$/ }).click();
});

