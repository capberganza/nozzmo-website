Feature: test the process section

    Scenario: verify that section steps expand and display the correct text
        Given I navigate to the Recruitment page
        Then I scroll to Our Process section
        Then I click on "<Step>" and verify the "<Description>" appears

        Examples:
            | Step                           | Description                                                                                                                                                             |
            | Understanding your needs       | We'll work with you to understand your company culture, goals, and technical requirements.,                                                                             |
            | Sourcing candidates            | Our team of expert recruiters will use a variety of channels to find the best candidates for your positions.                                                            |
            | Technical evaluation           | We'll evaluate candidates' technical skills and fit for your company through a rigorous screening process that includes technical interviews and reference checks.      |
            | Cultural fit evaluation        | Our team will conduct in-depth interviews to assess candidates' fit for your company culture.                                                                           |
            | Data-driven insights           | We'll provide you with data-driven insights and feedback on your hiring process to help you make more informed decisions and improve your overall recruitment strategy. |
            | Final selection and onboarding | We'll help you select the best candidates and support you through the onboarding process to ensure a successful transition for both the candidate and your team.        |
