const selectors = {
    serviceNameInput: '[data-testid="gateway-service-name-input"]',
    serviceTagsInput: '[data-testid="gateway-service-tags-input"]',
    fullURLInput: '[data-testid="gateway-service-url-input"]',
    routeNameInput: '[data-testid="route-form-name"]',
    routeServiceIdInput: '[data-testid="route-form-service-id"]',
    routeTagsInput: '[data-testid="route-form-tags"]',
    routePathsInput: '[data-testid="route-form-paths-input-1"]',
};

Cypress.Commands.add('typeServiceName', (name: string) => {
    cy.clearAndTypeInInput(selectors.serviceNameInput, name);
});

Cypress.Commands.add('typeServiceTags', (tags: string) => {
    cy.clearAndTypeInInput(selectors.serviceTagsInput, tags);
});

Cypress.Commands.add('typeFullURL', (tags: string) => {
    cy.clearAndTypeInInput(selectors.fullURLInput, tags);
});

Cypress.Commands.add('verifyServiceName', (expectedName: string) => {
    cy.verifyInputValue(selectors.serviceNameInput, expectedName);
});

Cypress.Commands.add('verifyServiceTags', (expectedTags: string) => {
    cy.verifyInputValue(selectors.serviceTagsInput, expectedTags);
});

Cypress.Commands.add('verifyFullURL', (expectedTags: string) => {
    cy.verifyInputValue(selectors.fullURLInput, expectedTags);
});

Cypress.Commands.add('verifyServiceNamePlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.serviceNameInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyServiceTagsPlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.serviceTagsInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyFullURLPlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.fullURLInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyServiceNameError', (errorMessage: string) => {
    // Type the invalid characters to let the error message shown
    cy.typeServiceName('&&&');
    cy.verifyInputError(selectors.serviceNameInput, errorMessage);
});

Cypress.Commands.add('verifyServiceTagsError', (errorMessage: string) => {
    cy.verifyInputError(selectors.serviceTagsInput, errorMessage);
});

Cypress.Commands.add('checkServiceNameInput', () => {
    cy.checkInput(selectors.serviceNameInput);
});

Cypress.Commands.add('checkServiceTagsInput', () => {
    cy.checkInput(selectors.serviceTagsInput);
});

Cypress.Commands.add('checkFullURLInput', () => {
    cy.checkInput(selectors.fullURLInput);
});

Cypress.Commands.add('typeRouteName', (name: string) => {
    cy.clearAndTypeInInput(selectors.routeNameInput, name);
});

Cypress.Commands.add('typeRouteServiceId', (name: string) => {
    cy.clearAndTypeInInput(selectors.routeServiceIdInput, name);
});

Cypress.Commands.add('typeRouteTags', (tags: string) => {
    cy.clearAndTypeInInput(selectors.routeTagsInput, tags);
});

Cypress.Commands.add('typeRoutePaths', (tags: string) => {
    cy.clearAndTypeInInput(selectors.routePathsInput, tags);
});

Cypress.Commands.add('verifyRouteName', (expectedName: string) => {
    cy.verifyInputValue(selectors.routeNameInput, expectedName);
});

Cypress.Commands.add('verifyRouteServiceId', (expectedName: string) => {
    cy.verifyInputValue(selectors.routeServiceIdInput, expectedName);
});

Cypress.Commands.add('verifyRouteTags', (expectedTags: string) => {
    cy.verifyInputValue(selectors.routeTagsInput, expectedTags);
});

Cypress.Commands.add('verifyRoutePaths', (expectedTags: string) => {
    cy.verifyInputValue(selectors.routePathsInput, expectedTags);
});

Cypress.Commands.add('verifyRouteNamePlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.routeNameInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyRouteServiceIdPlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.routeServiceIdInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyRouteTagsPlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.routeTagsInput, expectedPlaceholder);
});

Cypress.Commands.add('verifyRoutePathsPlaceholder', (expectedPlaceholder: string) => {
    cy.verifyInputPlaceholder(selectors.routePathsInput, expectedPlaceholder);
});

Cypress.Commands.add('checkRouteNameInput', () => {
    cy.checkInput(selectors.routeNameInput);
});

Cypress.Commands.add('checkRouteServiceIdInput', () => {
    cy.checkInput(selectors.routeServiceIdInput);
});

Cypress.Commands.add('checkRouteTagsInput', () => {
    cy.checkInput(selectors.routeTagsInput);
});

Cypress.Commands.add('checkRoutePathsInput', () => {
    cy.checkInput(selectors.routePathsInput);
});