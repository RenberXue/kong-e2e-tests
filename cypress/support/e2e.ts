import '@support/commands'

Cypress.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Script error')) {
        return false
    }

})