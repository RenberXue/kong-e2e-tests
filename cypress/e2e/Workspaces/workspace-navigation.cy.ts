import { URLS } from '@support/constants'

describe('Kong Manager - Workspace Navigation', () => {
    beforeEach(() => {
        cy.deleteAllResources();
        cy.visitAndVerifyPage(URLS.workspaces);
    });

    it('should navigate to the default workspace overview when clicking the default button', () => {
        cy.verifyOnWorkspacesPage();
        cy.checkDefaultDashboardMetrics();
        cy.goToDefaultWorkspace();
        cy.verifyOnOverviewPage();
    });
});
