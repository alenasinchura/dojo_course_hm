import {test, expect} from '@playwright/test';

test('00-conduit auth flow for user that already exist in database with creating a new article', async ({page}) =>{
    await page.goto('https://demo.learnwebdriverio.com/login');


    await page.locator('//input[@placeholder = "Email"]').fill('alenasinchura777@gmail.com'); 
    await page.locator('//input[@placeholder = "Password"]').fill('QWERTY77');
    await page.locator('//button[contains(@class, "btn btn-lg btn-primary pull-xs-right")]').click(); //login 
 

    await page.locator('//a[@href="/editor"]').click();
    await page.locator('//input[@data-qa-id = "editor-title"]').fill('the first article ');
    await page.locator('//input[@data-qa-id = "editor-description"]').fill('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.');
    await page.locator('//textarea[@placeholder="Write your article (in markdown)"]').fill('One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.');
    await page.locator('//input[@data-qa-id="editor-tags"]').fill('new_article');
    await page.locator('//button[@data-qa-id="editor-publish"]').click(); //create a new article 

   await expect(page.locator('//h1[@data-qa-id="article-title"]')).toContainText('the first article '); //verify that article exists 

  });

  
