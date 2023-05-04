import Page from './page.js'

class womensDresses extends Page {

    expectedBannerText:string = "WOMEN\'S DRESSES"

    get womensDressesBanner () { return $('div[data-title="Women\'s Dresses"]') }

}

export default new womensDresses()
