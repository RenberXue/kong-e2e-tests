import { SidebarMenu, URLS, DashboardItem } from '@support/constants'

describe('Kong Manager - Workspaces - Overview Page', () => {
    beforeEach(() => {
        cy.deleteAllResources();

        // Navigate to the overview page if not already
        cy.visitAndVerifyPage(URLS.workspaces);
        cy.goToDefaultWorkspace();
        cy.ensureOnPage(URLS.getFullUrl(URLS.defaultOverview));
    });

    it('The default dashboard elements and values should be displayed', () => {
        cy.checkDefaultDashboardMetrics();
    });

    it('should navigate to the Gateway Services when clicking the Gateway Services item in sidebar', () => {
        cy.clickSidebarItem(SidebarMenu.GatewayServices);
        cy.verifyOnGatewayServicesPage();
    });

    it('should navigate to the New Gateway Service page when clicking the "Add a gateway service" button', () => {
        cy.getResourceCountFromAPI(DashboardItem.Services).then((serviceCount) => {
            if (serviceCount === 0) {
                cy.checkAddGatewayServiceButton(true);
                cy.verifyOnCreateGatewayServicePage();
            } else {
                // If the service count is greater than 0, the "Add a gateway service" button will not be displayed
                cy.verifyOnOverviewPage();
            }
        });
    });
});
