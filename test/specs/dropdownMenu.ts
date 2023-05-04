import dropdownMenu from '../pageobjects/dropdownMenu.page.js'
import womensDresses from '../pageobjects/womensDresses.js'


describe('Dropdown menu links are functional', () => {
    it('should close sales pop up and expand dropdown menu', async () => {
        await dropdownMenu.open()

        await browser.pause(2000)

        await dropdownMenu.closePopUp()

        await browser.pause(2000)
    })

    describe('user should navigate to the dresses page', () => {
        it('dresses page should have header Women\'s dresses', async () => {
            // TO DO - Create page object for Dresses. Test Dresses page
            await dropdownMenu.navigateToDresses()
    
            await browser.pause(2000)

            await expect(await womensDresses.womensDressesBanner).toHaveText(womensDresses.expectedBannerText)

        })
    })
})
