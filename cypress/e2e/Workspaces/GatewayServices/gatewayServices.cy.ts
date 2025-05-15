import { DashboardItem, SidebarMenu, URLS } from '@support/constants'
import { testData } from "@fixtures/testData";

describe('Kong Manager - Workspaces - Gateway Services Page', () => {
    beforeEach(() => {
        cy.deleteAllResources();

        // Navigate to the gateway services page if not already
        cy.visitAndVerifyPage(URLS.workspaces);
        cy.goToDefaultWorkspace();
        cy.clickSidebarItem(SidebarMenu.GatewayServices);
        cy.ensureOnPage(URLS.getFullUrl(URLS.gatewayServices));
    });

    it('should navigate to the New Gateway Service page when clicking the "New gateway service" button', () => {
        cy.verifyOnGatewayServicesPage();
        cy.checkNewGatewayServiceButton(true);
        cy.verifyOnCreateGatewayServicePage();
        cy.checkCancelServiceButton(true);
    });

    // E2E test: The assignment involves creating a new Service and configuring a Route for it
    it('should add a New Gateway Service when clicking the "New gateway service" and save buttons', () => {
        const date = new Date();
        const service = `${testData.service}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}_${date.getMilliseconds()}`;

        cy.verifyOnGatewayServicesPage();
        cy.checkNewGatewayServiceButton(true);
        cy.typeServiceName(service);
        cy.verifyServiceName(service);
        cy.typeServiceTags(testData.tags);
        cy.verifyServiceTags(testData.tags);
        cy.typeFullURL(testData.url);
        cy.verifyFullURL(testData.url);
        cy.checkSaveServiceButton(true, true);

        // Verify that the service was created successfully
        cy.getResourceCountFromAPI(DashboardItem.Services).then((serviceCount) => {
            expect(serviceCount).to.eq(1);
        });

        cy.clickAddRouteButton();
        cy.verifyOnCreateRoutePage();
        cy.typeRouteName(testData.route);
        cy.verifyRouteName(testData.route);
        cy.typeRouteTags(testData.tags);
        cy.verifyRouteTags(testData.tags);
        cy.typeRoutePaths(testData.path);
        cy.verifyRoutePaths(testData.path);
        cy.checkSaveRouteButton(true, true);

        // Verify that the route was created successfully and that the dashboard displays the corresponding numbers
        cy.clickSidebarItem(SidebarMenu.Overview);
        cy.getResourceCountFromAPI(DashboardItem.Routes).then((routeCount) => {
            expect(routeCount).to.eq(1);
        });
        cy.checkDefaultDashboardMetrics({Services: 1, Routes: 1});
    });
});