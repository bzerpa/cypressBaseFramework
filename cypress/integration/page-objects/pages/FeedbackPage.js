import BasePage from '../BasePage'
import {url_feedback} from '../../../../config'

const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_SELECTOR = '#comment'
const SUBMIT_BTN = 'input[name="submit"]'

export default class FeedbackPage extends BasePage {

	static visitFeedbackPage(){
		cy.visit(url_feedback)
	}

	static fillFeedbackForm() {
		cy.fixture('feedback').then(data => {
			cy.get(NAME_INPUT).type(data.name)
			cy.get(EMAIL_INPUT).type(data.email)
			cy.get(SUBJECT_INPUT).type(data.subject)
			cy.get(COMMENT_SELECTOR).type(data.message)
		})
	}

    static submitFeedbackForm(){
        cy.get(SUBMIT_BTN).click()
    }

	static assertSuccessFeedbackMessage(){
		cy.fixture('feedback').then(data => {
			this.assertText('.offset3.span6',`Thank you for your comments, ${data.name}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`)
		})
	}
}
