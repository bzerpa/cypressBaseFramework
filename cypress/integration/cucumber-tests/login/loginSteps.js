import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../page-objects/pages/LoginPage'
import AccountsLinks from '../../page-objects/components/AccountsLinks'
Given('I open login page', () =>{
    LoginPage.visitLoginPage()
})

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

When('I click on submit login', () => {
    LoginPage.submitForm()
})
Then('I should see homepage', () => {
    cy.url().should('eq', 'http://zero.webappsecurity.com/bank/account-summary.html')
})

Then('I should see error message', () =>{
    LoginPage.shouldShowErrorMessage()
})

