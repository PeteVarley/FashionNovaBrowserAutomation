import Page from './page.js'

class DropdownMenu extends Page {
    /**
     * define elements
     */

    // Below are fields build using the Webdriver.io version of Link Text
    // let driver = await new Builder().forBrowser('chrome').build();
	// const loc = await driver.findElement(By.linkText('New In'));

    get newIn () { return $('=New In') }

    get novaDeals () { return $('=Nova Deals') }

    get swim () { return $('=Swim') }

    get dresses () { return $('=Dresses') }

    // To Do - Add all dropdown links to Dropdown Menu class

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('/')
    }

    closePopUp () {
        return super.closePopUp('a[data-click="close"]')
    }

    hover () {
        return super.hover('//button[@id="shopify-section-header"]')
    }

    async navigateToNewIn () {
        await this.newIn.click()
    }

    async navigateToNovaDeals () {
        await this.novaDeals.click()
    }
    async navigateToSwim () {
        await this.swim.click()
    }

    async navigateToDresses () {
        await this.dresses.click()
    }
}

export default new DropdownMenu()
