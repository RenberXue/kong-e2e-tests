Cypress.Commands.add('checkDashboardMetricFromUI', (testId: string, label: string, expectedValue?: number | string) => {
    const selector = `[data-testid="${testId}"]`;

    cy.get(selector)
        .find('.metric-title-text')
        .should('have.text', label);

    cy.get(selector)
        .find('.metric-value-text')
        .invoke('text')
        .then((text) => {
            const trimmedText = text.trim();

            expect(trimmedText).to.not.be.empty;

            const isNumber = !isNaN(Number(trimmedText));
            expect(isNumber || trimmedText.length > 0).to.be.true;

            if (expectedValue !== undefined) {
                expect(trimmedText).to.eq(expectedValue.toString());
            }
        });
});

Cypress.Commands.add('checkDashboardMetrics', (metrics: { testId: string; label: string; expectedValue?: number | string }[]) => {
    metrics.forEach((metric) => {
        cy.checkDashboardMetricFromUI(metric.testId, metric.label, metric.expectedValue);
    });
});

// The default dashboard metrics should be [0, 0, 0, 0]
Cypress.Commands.add('checkDefaultDashboardMetrics', (customMetrics?: Partial<{ [key: string]: number }>) => {
    const defaultMetrics = [
        {testId: 'Services', label: 'Services', expectedValue: 0},
        {testId: 'Routes', label: 'Routes', expectedValue: 0},
        {testId: 'Consumers', label: 'Consumers', expectedValue: 0},
        {testId: 'Plugins', label: 'Plugins', expectedValue: 0},
    ]

    const metricsToCheck = defaultMetrics.map(metric => {
        const customValue = customMetrics?.[metric.testId];
        return {
            ...metric,
            expectedValue: customValue !== undefined ? customValue : metric.expectedValue
        };
    });

    cy.checkDashboardMetrics(metricsToCheck);
})
