import mainMenuPage from '../pageobjects/dropdownMenu.page.js'
import FormPage from '../pageobjects/dropdownMenu.page.js'

describe('draft - hover on dropdown and navigate to dresses', () => {
    it('should reveal on mouse hover', async () => {
        await mainMenuPage.open()

        await browser.pause(2000)

        await mainMenuPage.closePopUp()

        await browser.pause(2000)

        await mainMenuPage.navigateToDresses()

    })
})
