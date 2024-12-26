import {test, expect} from '@playwright/test';

  test('conduit auth flow for user that already exist in database with creating a new article', async ({page}) =>{
    const linkSignIn = "https://demo.learnwebdriverio.com/login";
    const emailInput = page.locator('//input[@placeholder = "Email"]');
    const passwordInput = page.locator('//input[@placeholder = "Password"]');
    const signInButton = page.locator('//button[contains(@class, "btn btn-lg btn-primary pull-xs-right")]');
    const linkEditor = page.locator('//a[@href="/editor"]');
                       

    const editorTitle = page.locator('//input[@data-qa-id = "editor-title"]');
    const editorDescription = page.locator('//input[@data-qa-id = "editor-description"]');
    const editorTextArea = page.locator('//textarea[@placeholder="Write your article (in markdown)"]');
    const editorTagsInput = page.locator('//input[@data-qa-id="editor-tags"]');
    const editorPublishButton = page.locator('//button[@data-qa-id="editor-publish"]');
    const articleTitle = page.locator('//h1[@data-qa-id="article-title"]');

    await page.goto(linkSignIn);

    await emailInput.fill('alenasinchura777@gmail.com'); 
    await passwordInput.fill('QWERTY77');
    await signInButton.click(); //login 
 

    await linkEditor.click();
    await editorTitle.fill('the first article ');
    await editorDescription.fill('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.');
    await editorTextArea.fill('One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.');
    await editorTagsInput.fill('new_article');
    await editorPublishButton.click(); //create a new article 

   await expect(articleTitle).toContainText('the first article '); //Verify if exists 
  });