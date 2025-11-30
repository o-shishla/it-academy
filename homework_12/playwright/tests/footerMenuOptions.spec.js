import {test, expect} from 'playwright/test'

test.describe('Footer Menu Options', async function () {
    test('Clicking on the option in the footer takes the user to the correct page', async ({page}) => {
        await page.goto('https://playwright.dev');
        await page.locator('a.footer__link-item[href="/community/ambassadors"]').click();

        await expect(page).toHaveURL(/.*community\/ambassadors/);
        await expect(page.locator('header > h1')).toHaveText('Ambassadors');
    })
})
