Feature: tests the contact form

    Scenario: verify all form fields are mandatory
        Given I navigate to the Recruitment page
        Then I click the send button
        Then I should see all fields are required
        Then I fill the "name" field
        Then I should not see the "name" alert
        Then I fill the "email" field
        Then I should not see the "name" alert
        Then I fill the "description" field
        Then I should not see the "description" alert
        Then I click the send button
        Then I should see a confirmation at the top

    Scenario: verify the form doest not accept emails in incorrect format
        Given I navigate to the Recruitment page
        Then I fill the "name" field
        Then I fill the email field with "<Email>"
        Then I fill the "description" field
        Then I should see that its not a valid email

        Examples:
            | Email        |
            | @example.com |
            | jhondoe      |
            | jhondoe.com  |

    Scenario: verify the form accepts valid emails
        Given I navigate to the Recruitment page
        Then I fill the "name" field
        Then I fill the email field with "<Email>"
        Then I fill the "description" field
        Then I click the send button
        Then I should see a confirmation at the top

        Examples:
            | Email               |
            | jhondoe@example.com |
            | jhondoe@gmail.com   |
            | jhondoe@hotmail.com |

