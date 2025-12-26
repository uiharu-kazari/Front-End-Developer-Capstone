Exercise: Defining the Bookings page
Overview
Now that you’ve set up the foundations of the project, the next step is to begin adding the key features of the Little Lemon web app.In this exercise, you’ll set up the table booking page.

Scenario
Currently, a visitor to the Little Lemon web app cannot reserve a table.  Your task is to improve the app by allowing the user to enter data into the form so that they can complete their registration.  Thus, you need to build a Booking Form component that has the following entries (form items):

Date

Time

Number of guests

Occasion (Birthday, Anniversary)

Submit reservation button (to submit the form)

To do this, you need to implement a form in a controlled component named BookingForm. As you progress through the exercise, it may be helpful to revisit the following lesson items:

Creating a form

What are controlled components?

Creating a Form component in React

Event handling and embedded expressions

Using hooks

Observing state

Instructions
Step 1: Check the component and routes
If you haven’t done so already, create the BookingForm and BookingPage components. The BookingPage will contain the BookingForm component, in addition to any additional content before and after the form. 

Note: Before proceeding to the next step, check that your routes and navigation bar are set up to allow navigation to the booking page.

Step 2: Code the form structure
Next, you’ll need to build the form structure in the BookingForm component. You can use the following plain HTML5 implementation as a starting point, however, you should convert it to JSX so that you can later connect the input to the React state.

123456789101112131415161718192021
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>

Note: Keep in mind the difference between the for attribute in HTML and htmlFor in JSX. Also, remember to self-close all tags in JSX.

Step 3: Code the form behavior
Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

Define a state variable for field in the form.

Connect each state variable to the form fields using the value and onChange form element attributes.

The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.

Conclusion
By completing this exercise, you’ve created the component of the Bookings page for customers to reserve a table. In the next lesson, you’ll work on lifting up the state and connecting the component to the list of available reservation times.


Controlled Components: Controlled components in React are form elements whose values are controlled by React state, allowing for dynamic updates and validation.
JSX Syntax: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within React components, which is then transformed into JavaScript.
State Management: State management in React involves using hooks like useState to track and update the values of form inputs, ensuring the UI reflects the current state.
Form Structure: The form structure includes input fields for date, time, number of guests, and occasion, which are essential for gathering reservation details.