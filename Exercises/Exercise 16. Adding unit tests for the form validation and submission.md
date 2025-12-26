Exercise: Adding unit tests for the form validation and submission
Overview
In the previous exercise, you added HTML5 validation and JavaScript functions to validate the form. As a developer, it is good practice to create unit tests for this validation to prevent regressions in the future. In this exercise, you will write unit tests for the validation and submission of your forms.

Scenario
In this exercise, you will add unit tests for the validation created in the previous exercise. As you develop applications, fix bugs and add new features, updating and adding unit tests is an important activity to help ensure the quality of code. Writing reliable, quality code will give you confidence when delivering your final product to your client. As you progress through the exercise, you may find it helpful to revisit the following lesson items:

Introduction to Jest

Writing tests with Jest

Why React testing library

Writing the first test for your form

Instructions
Step 1: Validate the HTML5 validation is applied
In a previous exercise, you implemented unit tests to test that the HTML content returned from a component was correct.

Review the previous exercise and the HTML validation you added to the form input fields. 

For each input field, add a unit test to validate that the correct attributes are applied to the HTML element.

Step 2: Add unit tests for JavaScript validation functions

In the previous exercise, you implemented JavaScript functions to validate the form input fields.

Using the React testing library, implement unit tests to verify both the valid and invalid states for these functions.

It is important to add a unit test for both valid and invalid states to ensure good test coverage of your code. Without this, there is a risk of a bug existing in a code path that is not tested.

Step 3: Run the tests

Run all tests in your web app and verify that they are all successful.

Conclusion
You have now implemented all features and automated tests for the project. However, as the developer who designed the UI and UX, it is important to validate the user experience. In the next lesson, you will conduct an evaluation of the user experience.

