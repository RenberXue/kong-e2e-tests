import { SidebarMenu, URLS } from "@support/constants";

// Ensure the current page matches the target URL, otherwise navigate to it
Cypress.Commands.add('ensureOnPage', (targetUrl: string, exact: boolean = false) => {
    cy.url().then((currentUrl) => {
        const shouldNavigate = exact ? currentUrl !== targetUrl : !currentUrl.startsWith(targetUrl);
        if (shouldNavigate) {
            cy.visit(targetUrl);
        }
    });
});

Cypress.Commands.add('verifyCurrentPage', (pageUrl: string) => {
    cy.url().should('include', pageUrl);
    cy.get(`a[href="${pageUrl}"]`).should('have.attr', 'aria-current', 'page');
});

Cypress.Commands.add('visitAndVerifyPage', (pageUrl: string) => {
    cy.visit(URLS.getFullUrl(pageUrl));
    cy.verifyCurrentPage(pageUrl);
});

Cypress.Commands.add('verifyOnWorkspacesPage', () => {
    cy.verifyCurrentPage(URLS.workspaces);
    cy.title().should('include', SidebarMenu.Workspaces);
    cy.checkTextInElement('.workspace-overview-title', SidebarMenu.Workspaces);
    cy.checkDefaultWorkspaceButton();
});

Cypress.Commands.add('verifyOnOverviewPage', () => {
    cy.verifyCurrentPage(URLS.defaultOverview);
    cy.title().should('include', SidebarMenu.Overview);
    cy.checkTextInElement('h3 .title', SidebarMenu.Overview);
    cy.checkTextInElement('.card-title', 'Summary');
    cy.checkAddGatewayServiceButton();
});

Cypress.Commands.add('verifyOnGatewayServicesPage', () => {
    cy.verifyCurrentPage(URLS.gatewayServices);
    cy.title().should('include', SidebarMenu.GatewayServices);
    cy.checkTextInElement('h3 .title', SidebarMenu.GatewayServices);
});

Cypress.Commands.add('verifyOnCreateGatewayServicePage', () => {
    cy.verifyCurrentPage(URLS.gatewayServices);
    cy.title().should('include', 'Create Gateway Service');
    cy.checkTextInElement('h3 .title', 'New Gateway Service');

    cy.checkServiceNameInput();
    cy.verifyServiceNamePlaceholder('Enter a unique name');
    cy.verifyServiceNameError('The name can be any string containing characters, letters, numbers, or the following characters');

    cy.checkServiceTagsInput();
    cy.verifyServiceTagsPlaceholder('Enter a list of tags separated by comma');

    cy.checkFullURLInput();
    cy.verifyFullURLPlaceholder('e.g. https://api.kong-air.com/flights');

    cy.checkServiceViewConfigurationButton();
    cy.checkCancelServiceButton();
    cy.checkSaveServiceButton(false, false);
});

Cypress.Commands.add('verifyOnRoutesPage', () => {
    cy.verifyCurrentPage(URLS.routes);
    cy.title().should('include', SidebarMenu.Routes);
    cy.checkTextInElement('h3 .title', SidebarMenu.Routes);
});

Cypress.Commands.add('verifyOnCreateRoutePage', () => {
    cy.verifyCurrentPage(URLS.routes);
    cy.title().should('include', 'Create route');
    cy.checkTextInElement('h3 .title', 'Create Route');

    cy.checkRouteNameInput();
    cy.verifyRouteNamePlaceholder('Enter a unique name');

    cy.url().then((url)=>{
        // If the URL includes '?serviceId=', it means entered from the Service page
        if (!url.includes('?serviceId=')){
            cy.checkRouteServiceIdInput();
            cy.verifyRouteServiceIdPlaceholder('Select a service');
        }
    })

    cy.checkRouteTagsInput();
    cy.verifyRouteTagsPlaceholder('Enter a list of tags separated by commas');

    cy.checkRoutePathsInput();
    cy.verifyRoutePathsPlaceholder('Enter a path');

    cy.checkRouteViewConfigurationButton();
    cy.checkCancelRouteButton();
    cy.checkSaveRouteButton(false, false);
});

Cypress.Commands.add('goToDefaultWorkspace', () => {
    cy.checkDefaultWorkspaceButton(true);
    cy.verifyCurrentPage(URLS.defaultOverview);
});
