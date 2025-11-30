import{test, expect} from 'playwright/test'

const menuOptions = [{
    label: 'Node.js',
    expectedHeader: 'Playwright'
}, {
    label: 'Python',
    expectedHeader: 'Playwright for Python'
}, {
    label: 'Java',
    expectedHeader: 'Playwright for Java'
}, {
    label: '.Net',
    expectedHeader: 'Playwright for .NET'
}];

test.describe('The dropdown menu in the header', async function(){
        for (const option of menuOptions) {
            test(`Selecting "${option.label}" updates header`, async ({ page }) => {
                await page.goto('https://playwright.dev');

                await page.locator('a[href="#"]').hover();
                await page.locator(`.dropdown__menu li >> text=${option.label}`).click();

                await expect(page.locator('.navbar__title.text--truncate')).toHaveText(option.expectedHeader);
            });
        }
})