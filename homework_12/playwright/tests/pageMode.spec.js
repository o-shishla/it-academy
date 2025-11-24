import {test, expect} from '@playwright/test';

test.describe('Switching modes', async function (){
    test('the mode should switch when clicking the button', async ({page}) => {
        await page.goto('https://playwright.dev');
        const button = await page.locator('.clean-btn.toggleButton_gllP');
        const currentMode = await button.getAttribute('title');
        await button.click();
        if(currentMode === 'dark mode'){
            await expect(await page.locator('.clean-btn.toggleButton_gllP')).toHaveAttribute('title','system mode')
        }else if(currentMode === 'system mode'){
            await expect(await page.locator('.clean-btn.toggleButton_gllP')).toHaveAttribute('title','light mode')
        }else{
            await expect(await page.locator('.clean-btn.toggleButton_gllP')).toHaveAttribute('title','dark mode')
        }

    })
})