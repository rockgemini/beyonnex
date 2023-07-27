import 'cypress-xpath';

export class HomePage {

    url = `${Cypress.config('baseUrl')}`;
    temperatureLocator = '#temperature';
    buyMoisturizersLocator = "//button[normalize-space()='Buy moisturizers']";
    buySunscreensLocator = "//button[normalize-space()='Buy sunscreens']";

    load() {
        cy.visit(this.url);
    };

    getTemperature(): Cypress.Chainable<number> {
        // Use Cypress.Chainable<number> to specify the return type as a number
        return cy.get(this.temperatureLocator).invoke('text').then((text) => {
          return parseInt(text);
        });
    };
    
    clickBuyMoisturizers() {
        cy.xpath(this.buyMoisturizersLocator).click();
    };

    clickBuySunscreens() {
        cy.xpath(this.buySunscreensLocator).click();
    }
    
}