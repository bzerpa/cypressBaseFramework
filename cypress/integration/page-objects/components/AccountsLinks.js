const SUMMARY_TAB = '#account_summmary_tab'
const ACTIVITY_TAB = '#account_activity_tab'
const TRANSFER_FUNDS_TAB = '#transfer_funds_tab'
const PAY_BILLS_TAB = '#pay_bills_tab'
const MONEY_MAP_TAB = '#money_map_tab'
const STATEMENTS_TAB = '#online_statements_tab'

export default class AccountLinks {
    static clickSummary(){
        cy.get(SUMMARY_TAB).click()
    }

    static clickActivity() {
        cy.get(ACTIVITY_TAB).click()
    }

    static clickTransferFunds() {
        cy.get(TRANSFER_FUNDS_TAB).click()
    }

    static clickPayBills() {
        cy.get(PAY_BILLS_TAB).click()
    }

    static clickMoneyApp() {
        cy.get(MONEY_MAP_TAB).click()
    }

    static clickOnLineStatements() {
        cy.get(STATEMENTS_TAB).click()
    }

    static summaryTabIsDisplayed(){
        cy.get(SUMMARY_TAB).should('be.visible')
    }
}