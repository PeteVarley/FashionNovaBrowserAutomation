export default class Page {
    open (path: string) {
        return browser.url(path)
    }

    closePopUp (popUpCloseIcon: string) {
        return $(popUpCloseIcon).click()
    }

    hover(hoverMenuElement: string) {
        return $(hoverMenuElement).moveTo()
    }
}
