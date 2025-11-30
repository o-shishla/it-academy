import{test, expect} from 'playwright/test'
test.describe.only('Side Menu Navigation',async function(){
    test('Clicking the option of side navigation menu scrolls to the correct place of the page', async({page})=>{
        await page.goto('https://playwright.dev/docs/writing-tests');
        const option = await page.locator('.table-of-contents__link').nth(1);
        const anchor = await option.getAttribute('href');
        await option.click();
        await expect(page).toHaveURL(new RegExp(`${anchor}$`));
        const target = page.locator(anchor);
        await expect(target).toBeVisible();
        await expect(target).toBeInViewport();

    })
})