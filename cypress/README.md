# Testing Documentation 

For testing, I used [Cypress](https://www.cypress.io/), a modern end-to-end testing framework built for the modern web. It is the best tool for testing web applications. It is fast, easy to use, and reliable. It is also a great tool for testing Remix applications.

## Installation

To install Cypress, run the following command:

```sh

yarn install

```
this will install all the dependencies needed to run the tests.

## Running the tests

To run the tests, run the following command:

```sh   
npx cypress run
```

after the test is run, you will see the results in the terminal, and  you can find a recording in the `cypress/videos` folder.

## Testing logic

The test cases are designed to cover both happy paths and edge cases. The test cases are designed to cover the following:

- The site is displayed correctly on desktop
  - a test was created to validate that the elemets at the top are visible
- the form only accepts submissions with complete and correctly formatted data
  - tests were created to validate that the form only accepts complete and correctly formatted data
  - tests were created to validate that the form does not accept invalid emails
  - tests were created to validate that the form only accepts valid emails
- The accordion of the processes shows the details when clicking on each title
  - a test was created to validate that the accordion shows the details when clicking on each title
- All links work and are coherent
  - tests were created to validate that all links work and are coherent. 

### Assumptions
- The form is the most important part of the site, so it was given more test cases.
- The site is responsive, so only one test was created to validate that the elements at the top are visible.
- The texts displayed under each process are correct
- Coherent links meant that the links and the text wich was used for the link had some kind of relationship.
- Working links are the ones that are not empy and that are not #

## Test Results

        Spec                  runtime     Tests  Passing  Failing  Pending  Skipped
    ✔  form.feature           00:36        7        7        -        -        - 
    ✖  general.feature        00:20        2        1        1        -        - 
    ✔  process.feature        00:23        6        6        -        -        -

    ✖  1 of 3 failed (33%)    01:20        15       14       1        -        -

## Error Prioritization

The errors found were prioritized based on the impact they have on the user experience. The errors were prioritized as follows:

### High Priority
- in the form if the email has one or more spaces at the beginig or end it will be considered invalid, this was prioritized as a high priority error because it is a common mistake and it can be frustrating for the user.
  - proposed solution: make the field auto trim the blankspaces at the begining and end
- in the form if the email has a format [word@word.co or word@word.com] it will be considered valid, this is high priority we could be receiving a lot of spam emails from users that are not interested in the company or want to harm the company
  - proposed solution: use a regex to validate the email if one is already in use make it more strick
- all the links redirect to google.com this was prioritized as a high priority error, if someone wants to schedule an interview or contact the company they will not be able to do it.
  
### Medium Priority
- in the form if the user name is a blank space or just one letter it will be considered valid, this was prioritized as a medium priority because you can still contact the user by email 
- in the form if the user name is a number it will be considered valid, this was prioritized as a medium priority because you can still contact the user by email
- in the form if the description is a blank space or just a letter it will be considered valid, this was prioritized as a medium priority because you can still contact the user by email

## Next Steps

- Fix the high priority errors
  - fix the email validation
  - fix the links
- stablish a minimun number of chars for the user name
- stablish a minimun number of chars for the description
- check definition of whats a coherent link
- check definition on what does it mean to display correctly


- create new tests to verify when the errors are fixed
  - create a test that checks that element dont overflow or other kind of test cor "correctly displayed" following the new definition
  - check spaces at the begining and end of the email
  - verify the minumun chars for the user name
  - verify the minumun chars for the description
  - verify the links are coherent
  - verify the links load properly