import { DashboardItem } from "@support/constants";

Cypress.Commands.add('getResourceCountFromAPI', (dashboardItem: string, workspace: string = 'default'): Cypress.Chainable<number> => {
    // Wait 1 second to ensure the last operation has completed
    cy.wait(1000);
    return cy.request({
        method: 'GET',
        url: `http://localhost:8001/${workspace}/${dashboardItem}`,
    }).then((response) => {
        expect(response.status).to.eq(200);

        const items = Array.isArray(response.body?.data) ? response.body.data : [];
        const count = items.length;

        if ('total' in response.body && typeof response.body.total === 'number') {
            expect(response.body.total).to.eq(count);
        }

        return count;
    });
});

function deleteAllResources(resource: 'services' | 'routes' | 'consumers', workspace = 'default') {
    const baseUrl = `http://localhost:8001/${workspace}`;

    return cy.request(`${baseUrl}/${resource}`).then((res) => {
        expect(res.status).to.eq(200);

        const items = Array.isArray(res.body?.data) ? res.body.data : [];

        if (items.length === 0) {
            cy.log(`No ${resource} to delete.`);
            return
        }

        const deletePromises = items.map((item) => {
            return cy.request({
                method: 'DELETE',
                url: `${baseUrl}/${resource}/${item.id}`,
                failOnStatusCode: false,
            }).then((delRes) => {
                if (delRes.status === 204) {
                    cy.log(`Deleted ${resource.slice(0, -1)}: ${item.name || item.id}`);
                } else {
                    cy.log(`Failed to delete ${resource.slice(0, -1)}: ${item.name || item.id}, status: ${delRes.status}`);
                }
            })
        })

        return cy.wrap(Promise.all(deletePromises));
    })
}

Cypress.Commands.add('deleteAllServices', (workspace = 'default'): Cypress.Chainable<any> => {
    return deleteAllResources(DashboardItem.Services, workspace).then(() => {
        return cy.getResourceCountFromAPI(DashboardItem.Services, workspace).should('eq', 0);
    })
})

Cypress.Commands.add('deleteAllRoutes', (workspace = 'default'): Cypress.Chainable<any> => {
    return deleteAllResources(DashboardItem.Routes, workspace).then(() => {
        return cy.getResourceCountFromAPI(DashboardItem.Routes, workspace).should('eq', 0);
    })
})

Cypress.Commands.add('deleteAllConsumers', (workspace = 'default'): Cypress.Chainable<any> => {
    return deleteAllResources(DashboardItem.Consumers, workspace).then(() => {
        return cy.getResourceCountFromAPI(DashboardItem.Consumers, workspace).should('eq', 0);
    })
})

Cypress.Commands.add('deleteAllResources', (workspace = 'default'): Cypress.Chainable<any> => {
    return cy.deleteAllRoutes(workspace)
        .then(() => cy.deleteAllServices(workspace))
        .then(() => cy.deleteAllConsumers(workspace))
})