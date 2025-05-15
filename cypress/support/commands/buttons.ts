import { DashboardItem } from "@support/constants";

const Buttons = {
    defaultWorkspaceBtn: {
        testId: 'workspace-link-default',
        label: 'default',
    },
    addGatewayServiceBtn: {
        testId: 'action-button',
        label: 'Add a Gateway Service',
    },
    newGatewayServiceBtn: {
        testId: 'empty-state-action',
        label: 'New gateway service',
    },
    altNewGatewayServiceBtn: {
        testId: 'toolbar-add-gateway-service',
        label: 'New gateway service',
    },
    serviceViewConfigurationBtn: {
        testId: 'service-create-form-view-configuration',
        label: 'View Configuration',
    },
    cancelServiceBtn: {
        testId: 'service-create-form-cancel',
        label: 'Cancel',
    },
    saveServiceBtn: {
        testId: 'service-create-form-submit',
        label: 'Save',
    },
    newRouteBtn: {
        testId: 'empty-state-action',
        label: 'New route',
    },
    altNewRouteBtn: {
        testId: 'toolbar-add-route',
        label: 'New route',
    },
    routeViewConfigurationBtn: {
        testId: 'route-create-form-view-configuration',
        label: 'View Configuration',
    },
    cancelRouteBtn: {
        testId: 'route-create-form-cancel',
        label: 'Cancel',
    },
    saveRouteBtn: {
        testId: 'route-create-form-submit',
        label: 'Save',
    }
}

Cypress.Commands.add('checkDefaultWorkspaceButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.defaultWorkspaceBtn.testId, Buttons.defaultWorkspaceBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

// The "Add a Gateway Service" button on Overview page
Cypress.Commands.add('checkAddGatewayServiceButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.addGatewayServiceBtn.testId, Buttons.addGatewayServiceBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

// The "New gateway service" button on Gateway Services page
Cypress.Commands.add('checkNewGatewayServiceButton', (shouldClick: boolean = false) => {
    cy.getResourceCountFromAPI(DashboardItem.Services).then((serviceCount) => {
        // The testId will be changed if the service count is greater than 0
        if (serviceCount === 0) {
            cy.checkButton(Buttons.newGatewayServiceBtn.testId, Buttons.newGatewayServiceBtn.label, {
                click: shouldClick,
                checkVisible: true,
                checkEnabled: true,
            });
        } else {
            cy.checkButton(Buttons.altNewGatewayServiceBtn.testId, Buttons.altNewGatewayServiceBtn.label, {
                click: shouldClick,
                checkVisible: true,
                checkEnabled: true,
            });
        }
    });
});

Cypress.Commands.add('checkServiceViewConfigurationButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.serviceViewConfigurationBtn.testId, Buttons.serviceViewConfigurationBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

Cypress.Commands.add('checkCancelServiceButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.cancelServiceBtn.testId, Buttons.cancelServiceBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

Cypress.Commands.add('checkSaveServiceButton', (shouldBeEnabled: boolean, shouldClick: boolean = false) => {
    cy.checkButton(Buttons.saveServiceBtn.testId, Buttons.saveServiceBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: shouldBeEnabled,
    });
});

// The "New route" button on Routes page
Cypress.Commands.add('checkNewRouteButton', (shouldClick: boolean = false) => {
    cy.getResourceCountFromAPI(DashboardItem.Routes).then((routeCount) => {
        // The testId will be changed if the route count is greater than 0
        if (routeCount === 0) {
            cy.checkButton(Buttons.newRouteBtn.testId, Buttons.newRouteBtn.label, {
                click: shouldClick,
                checkVisible: true,
                checkEnabled: true,
            });
        } else {
            cy.checkButton(Buttons.altNewRouteBtn.testId, Buttons.altNewRouteBtn.label, {
                click: shouldClick,
                checkVisible: true,
                checkEnabled: true,
            });
        }
    });
});

// The "Add a Route" button on Gateway Services page
Cypress.Commands.add('clickAddRouteButton', ()=>{
    cy.get('.add-route-btn').click();
});

Cypress.Commands.add('checkRouteViewConfigurationButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.routeViewConfigurationBtn.testId, Buttons.routeViewConfigurationBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

Cypress.Commands.add('checkCancelRouteButton', (shouldClick: boolean = false) => {
    cy.checkButton(Buttons.cancelRouteBtn.testId, Buttons.cancelRouteBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: true,
    });
});

Cypress.Commands.add('checkSaveRouteButton', (shouldBeEnabled: boolean, shouldClick: boolean = false) => {
    cy.checkButton(Buttons.saveRouteBtn.testId, Buttons.saveRouteBtn.label, {
        click: shouldClick,
        checkVisible: true,
        checkEnabled: shouldBeEnabled,
    });
});