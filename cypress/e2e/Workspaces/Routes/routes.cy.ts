import { DashboardItem, SidebarMenu, URLS } from '@support/constants'

describe('Kong Manager - Workspaces - Routes Page', () => {
    beforeEach(() => {
        cy.deleteAllResources();

        // Navigate to the routes page if not already
        cy.visitAndVerifyPage(URLS.workspaces);
        cy.goToDefaultWorkspace();
        cy.clickSidebarItem(SidebarMenu.Routes);
        cy.ensureOnPage(URLS.getFullUrl(URLS.routes));
    });

    it('should navigate to the Create Route page when clicking the "New route" button', () => {
        cy.verifyOnRoutesPage();
        cy.checkNewRouteButton(true);
        cy.verifyOnCreateRoutePage();
        cy.checkCancelRouteButton(true);
    });
});