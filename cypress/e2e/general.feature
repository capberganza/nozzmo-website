Feature: general testing

    Scenario: verify page loads
        Given I navigate to the Recruitment page
        Then I verify the page loads

    Scenario: verify links work and are coherent
        Given I navigate to the Recruitment page
        Then I verify the links are working
        Then I verify the links are coherent
