import{test, expect} from 'playwright/test'
test.describe('Side Menu Navigation',async function(){
    test('Clicking the option of side navigation menu takes the user to the correct place of the page', async({page})=>{
        await page.goto('https://playwright.dev/docs/writing-tests');
        const option = await page.locator('.table-of-contents__link.toc-highlight').nth(1);
        await option.click();
        const h2 = await page.locator('h2').nth(1);
        await expect(option).toHaveText(await h2.innerText());

    })
})