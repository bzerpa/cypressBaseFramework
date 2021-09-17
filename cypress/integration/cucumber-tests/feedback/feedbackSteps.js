import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from '../../page-objects/pages/FeedbackPage'

Given('I open feedback page', ()=> {
    FeedbackPage.visitFeedbackPage()
})

When('I fill feedback Form', () =>{
    FeedbackPage.fillFeedbackForm()
})
When('I click on send button',() => {
    FeedbackPage.submitFeedbackForm()
})

Then('Success message is displayed',() => {
    FeedbackPage.assertSuccessFeedbackMessage()
})