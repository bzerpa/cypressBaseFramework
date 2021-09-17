import LoginPage from "../integration/page-objects/pages/LoginPage"
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
 
//esto se puede parametrizar en la misma llamada al método matchImageSnapshot, lo pasás como json y olvidate
addMatchImageSnapshotCommand({
    failureTreshold: 0.00,
    failureTresholdType: "percent",
    customDiffConfig: { treshold: 0.0},
    capture: "viewport"
})
 
Cypress.Commands.add("setResolution", size => {
    if(Cypress._.isArray(size)){
        cy.viewport(size[0], size[1])
    } else{
        cy.viewport(size)
    }    
})

Cypress.Commands.add('login', (username, password) => {
    LoginPage.visitLoginPage()
    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
    LoginPage.submitForm()
})