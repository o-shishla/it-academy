import{test, expect} from 'playwright/test'

test.describe('Search functionality', async function(){
    test('The search should return the correct page', async ({page}) =>{
        await page.goto('https://playwright.dev');
        await page.locator('.DocSearch.DocSearch-Button').click();
        await page.locator('.DocSearch-Input').fill('Videos')
        await page.locator('a[href="/docs/videos"]').click();
        await expect(page.locator('header>h1')).toHaveText('Videos');

    })
})
