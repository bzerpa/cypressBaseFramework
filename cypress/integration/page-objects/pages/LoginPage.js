import BasePage from "../BasePage"
import {url_login} from '../../../../config'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUMBIT_BTN = 'input[type="submit"]'
const ERROR_MSG = '.alert-error'

export default class LoginPage extends BasePage {

    static visitLoginPage(){
        cy.visit(url_login)
        cy.log(url_login)
    }

    static fillUsername(name){
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submitForm(){
        cy.get(SUMBIT_BTN).click()
    }

    static shouldShowErrorMessage(){
        this.assertText(ERROR_MSG, 'Login and/or password are wrong')
    }

    static assertErrorMessageDisplayed() {
        this.assertVisibleElement(ERROR_MSG)
    }
}