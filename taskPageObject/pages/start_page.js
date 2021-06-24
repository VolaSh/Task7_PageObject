class StartPage {
    
    constructor() {
    this.searchField = $('//input[@class="uui-input"]')
    };

    goToPage(url) {
        browser.url(url);
    };

    getPageTitle(name) {
        expect(browser).toHaveTitle(name);
    };

    enterValue(element, text) {
        element.addValue(text);
    };

    checkValue(element, value) {
        expect(element).toHaveValue(value, { ignoreCase: true });
    };

    clickElement(element) {
        element.click();
    };

    checkElementVisibility(element) {
        const visibility = element.isDisplayed();
        expect(visibility);
    };

    openNewWindow(url) {
        browser.newWindow(url);
    };
    
};

module.exports = StartPage;