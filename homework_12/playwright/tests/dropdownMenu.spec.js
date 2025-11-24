import{test, expect} from 'playwright/test'
test.describe('The dropdown menu in the header', async function(){
    test('The options of dropdown menu should change the header title', async({page})=>{
        await page.goto('https://playwright.dev');
        await page.locator('a[href="#"]').hover();
        const dropdownOptions = page.locator('.dropdown__menu li').nth(1);
        const optionText = await dropdownOptions.innerText();
        await dropdownOptions.click();
        if(optionText==='Node.js'){
            await expect(page.locator('.navbar__title.text--truncate')).toBe('Playwright')
        }
        await expect(page.locator('.navbar__title.text--truncate')).toContainText(optionText);
    })
})