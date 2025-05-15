# Kong Gateway E2E Test Suite

This project contains E2E tests for the Kong Gateway Service using Cypress with TypeScript.  
It validates core UI interactions such as creating Services and Routes via the Kong Manager interface.

---

## Overview

* Framework: [Cypress](https://www.cypress.io/) + TypeScript
* Scope: Service and Route creation, Workspace navigation, Dashboard metrics
* Structure: Modular and scalable with reusable commands and page-specific test specs
* Reporting: Integrated with [Mochawesome](https://github.com/adamgruber/mochawesome) for rich HTML reports

---

## Setup Instructions
1. **Install Prerequisites**
   * [Node.js](https://nodejs.org/)
   * [Docker](https://www.docker.com/)
   
2. **Install dependencies**
   ```bash
   npm install   
   
3. **Run tests (headless mode)**
   ```bash
   npx cypress run
   ```

   This will automatically:

   * Start Kong Gateway via Docker Compose (`docker-compose up -d`)
   * Shut it down afterward (`docker-compose down`)
   
4. **Run tests (interactive mode)**

   ```bash
   npx cypress open
   ```

---

## Key Design Considerations

* Written in **TypeScript** for type safety and IntelliSense support
* Modular file structure with clear separation of:

   * E2E specs (`/cypress/e2e`)
   * Reusable commands (`/cypress/support/commands`)
* UI interactions are **wrapped in custom Cypress commands**
* Tests rely on **Dockerized** Kong Gateway environment

---

## Assumptions

* Login credentials or auth are preconfigured.
* Kong Manager is accessible at [http://localhost:8002](http://localhost:8002) once Docker is running.

---

## Trade-offs
* Focused on core UI flows (Service & Route creation)
* Simple selectors used; may require improvements for long-term test stability

---

## Tips

* To add more tests, create new `.cy.ts` files under `cypress/e2e/Workspaces/<Feature>/`
* To add shared UI commands, extend `cypress/support/commands/`
* For CI integration, update `.github/workflows/cypress.yml`

---
