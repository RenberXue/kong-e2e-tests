declare namespace Cypress {
    interface Chainable<Subject = any> {

        // Button related interfaces
        checkButton(testId: string, label: string, options?: { click?: boolean, force?: boolean, checkVisible?: boolean, checkEnabled?: boolean }): Chainable<JQuery<HTMLElement>>;

        checkTextInElement(selector: string, expectedText: string): Chainable<void>;

        checkDefaultWorkspaceButton(shouldClick?: boolean): Chainable<void>;

        checkAddGatewayServiceButton(shouldClick?: boolean): Chainable<void>;

        checkNewGatewayServiceButton(shouldClick?: boolean): Chainable<void>;

        checkServiceViewConfigurationButton(shouldClick?: boolean): Chainable<void>;

        checkCancelServiceButton(shouldClick?: boolean): Chainable<void>;

        checkSaveServiceButton(shouldBeEnabled: boolean, shouldClick?: boolean): Chainable<void>;

        checkNewRouteButton(shouldClick?: boolean): Chainable<void>;

        clickAddRouteButton(): Chainable<void>;

        checkRouteViewConfigurationButton(shouldClick?: boolean): Chainable<void>;

        checkCancelRouteButton(shouldClick?: boolean): Chainable<void>;

        checkSaveRouteButton(shouldBeEnabled: boolean, shouldClick?: boolean): Chainable<void>;

        // Service input related interfaces
        checkInput(selector: string): Chainable<void>;

        clearAndTypeInInput(selector: string, text: string): Chainable<void>;

        verifyInputValue(selector: string, expectedValue: string): Chainable<void>;

        typeServiceName(name: string): Chainable<void>;

        typeServiceTags(tags: string): Chainable<void>;

        typeFullURL(tags: string): Chainable<void>;

        verifyServiceName(expectedName: string): Chainable<void>;

        verifyServiceTags(expectedTags: string): Chainable<void>;

        verifyFullURL(expectedTags: string): Chainable<void>;

        verifyServiceNamePlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyServiceTagsPlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyFullURLPlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyServiceNameError(errorMessage: string): Chainable<void>;

        verifyServiceTagsError(errorMessage: string): Chainable<void>;

        checkServiceNameInput(): Chainable<void>;

        checkServiceTagsInput(): Chainable<void>;

        checkFullURLInput(): Chainable<void>;

        verifyInputPlaceholder(selector: string, expectedPlaceholder: string): Chainable<void>;

        verifyInputError(selector: string, errorMessage: string): Chainable<void>;

        // Route input related interfaces
        typeRouteName(name: string): Chainable<void>;

        typeRouteServiceId(name: string): Chainable<void>;

        typeRouteTags(tags: string): Chainable<void>;

        typeRoutePaths(tags: string): Chainable<void>;

        verifyRouteName(expectedName: string): Chainable<void>;

        verifyRouteServiceId(expectedName: string): Chainable<void>;

        verifyRouteTags(expectedTags: string): Chainable<void>;

        verifyRoutePaths(expectedTags: string): Chainable<void>;

        verifyRouteNamePlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyRouteServiceIdPlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyRouteTagsPlaceholder(expectedPlaceholder: string): Chainable<void>;

        verifyRoutePathsPlaceholder(expectedPlaceholder: string): Chainable<void>;

        checkRouteNameInput(): Chainable<void>;

        checkRouteServiceIdInput(): Chainable<void>;

        checkRouteTagsInput(): Chainable<void>;

        checkRoutePathsInput(): Chainable<void>;

        verifyInputPlaceholder(selector: string, expectedPlaceholder: string): Chainable<void>;

        verifyInputError(selector: string, errorMessage: string): Chainable<void>;

        // Sidebar related interfaces
        clickSidebarItem(label: string): Chainable<void>;

        // Navigation related interfaces
        ensureOnPage(url: string, exact?: boolean): Chainable<void>;

        verifyCurrentPage(pageUrl: string):Chainable<void>;

        visitAndVerifyPage(pageUrl: string):Chainable<void>;

        verifyOnWorkspacesPage(): Chainable<void>;

        verifyOnOverviewPage(): Chainable<void>;

        verifyOnGatewayServicesPage(): Chainable<void>;

        verifyOnCreateGatewayServicePage(): Chainable<void>;

        verifyOnRoutesPage(): Chainable<void>;

        verifyOnCreateRoutePage(): Chainable<void>;

        goToDefaultWorkspace(): Chainable<void>;

        // Dashboard related interfaces
        checkDashboardMetricFromUI(testId: string, label: string, expectedValue?: number | string): Chainable<void>;

        checkDashboardMetrics(metrics: { testId: string; label: string; expectedValue?: number | string }[]): Chainable<void>;

        checkDefaultDashboardMetrics(customMetrics?: Partial<{ [key: string]: number }>): Chainable<void>;

        // API related interfaces
        getResourceCountFromAPI(dashboardItem: string, workspace?: string): Chainable<number>;

        deleteAllServices(workspace?: string): Chainable<any>;

        deleteAllRoutes(workspace?: string): Chainable<any>;

        deleteAllConsumers(workspace?: string): Chainable<any>;

        deleteAllResources(workspace?: string): Chainable<any>;
    }
}