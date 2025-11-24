import {test, expect} from 'playwright/test'
test.describe('Footer Menu Options', async function() {
    test('Clicking on the option in the footer takes the user to the correct page', async ({page}) => {
        await page.goto('https://playwright.dev');
        const buttonInTheFooter = await page.locator('a.footer__link-item[href="/community/ambassadors"]');
        await buttonInTheFooter.click();
        const h1 = await page.locator('header>h1');
        await expect(buttonInTheFooter).toHaveText(await h1.innerText());

    })

})
