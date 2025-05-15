Cypress.Commands.add('checkButton', (testId: string, label: string, options: {
    click?: boolean,
    checkVisible?: boolean,
    checkEnabled?: boolean,
    force?: boolean,
} = {}) => {
    let button = cy.get(`[data-testid="${testId}"]`).should('exist').and('contain', label);

    if (options.checkVisible !== false) {
        button = button.scrollIntoView().should('be.visible');
    }
    if (options.checkEnabled !== false) {
        button = button.should('not.be.disabled');
    } else {
        // in this case, the button cannot be clicked
        button = button.should('be.disabled');
        return button;
    }
    if (options.click) {
        button.click({force: options.force});
    }

    return button;
});

Cypress.Commands.add('checkTextInElement', (selector: string, expectedText: string) => {
    cy.get(selector)
        .should('exist')
        .invoke('text')
        .then((rawText) => {
            const normalizedText = rawText.replace(/\s+/g, ' ').trim();
            cy.log(`Actual text: "${normalizedText}"`);
            expect(normalizedText).to.include(expectedText);
        });
});

Cypress.Commands.add('checkInput', (selector: string) => {
    cy.get(selector).scrollIntoView().should('be.visible');
});

Cypress.Commands.add('clearAndTypeInInput', (selector: string, text: string) => {
    cy.get(selector).scrollIntoView().should('be.visible').clear().type(text);
});

Cypress.Commands.add('verifyInputValue', (selector: string, expectedValue: string) => {
    cy.get(selector).should('have.value', expectedValue);
});

Cypress.Commands.add('verifyInputPlaceholder', (selector: string, expectedPlaceholder: string) => {
    cy.get(selector).should('have.attr', 'placeholder', expectedPlaceholder);
});

Cypress.Commands.add('verifyInputError', (selector: string, errorMessage: string) => {
    cy.get(selector)
        .invoke('attr', 'aria-describedby')
        .then((describedBy) => {
            if (!describedBy) {
                throw new Error(`Input ${selector} does not have aria-describedby attribute.`);
            }
            cy.get(`#${describedBy}`).should('contain.text', errorMessage).and('be.visible');
        });
});

Cypress.Commands.add('clickSidebarItem', (label: string) => {
    cy.contains('.sidebar-item-name', label)
        .parents('.sidebar-item-link')
        .click({force: true})
})