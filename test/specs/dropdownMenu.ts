import mainMenuPage from '../pageobjects/dropdownMenu.page.js'
import FormPage from '../pageobjects/dropdownMenu.page.js'

describe('Navigation to Dresses page', () => {
    beforeEach(async() =>{
        await mainMenuPage.open()

        await browser.pause(2000)

        await mainMenuPage.closePopUp()

        await browser.pause(2000)

        await mainMenuPage.navigateToDresses()
    });

    it('user should navigate to the dresses page', async () => {
        // TO DO - Create page object for Dresses. Test Dresses page
        await browser.pause(2000)
    })
})
