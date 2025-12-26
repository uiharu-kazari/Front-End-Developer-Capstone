Exercise: Designing components
Overview
In this exercise, you will create a drop-down animated component animation in Figma using variants. When you complete this exercise, you’ll be able to add this to your reserve-a-table section on the Little Lemon website project.

Note: The subject matter of designing a component in Figma, as well as interactive component design has previously been covered in the Principles of UX/UI design course. You may want to revise or refer to the following lesson items whilst completing the exercise:

Design a component in Figma

Interactive component design

Scenario
As defined as an opportunity in the User Journey map that you explored in the 
Principles of UX and UI 
recap earlier in this lesson, the persona Tilly wanted an option to select a type of occasion when making a reservation.  This may, for example, allow Little Lemon to prepare something special to mark the event and save her time either by calling in advance to explain or in order to be discreet, alerting the staff to the nature of the occasion before she and her party arrive for her booking.

Instructions
Step 1: Create the component and variants
Create a desktop frame:

In this frame, create a rectangle that is 400w x 80h.

Change the fill color to #EDEFEE.

Add rounded corners, with a radius of 8, and give it a drop shadow effect.

Illustration depicting empty, un-labelled button
Add some text, an icon and an arrow (a chevron) to indicate this is a dropdown menu, which, when clicked, will open up the occasion options for the user to select.

Illustration depicting dropdown menu labelled 'Occasion'
Duplicate the rectangle to examine the list as it would be displayed when it drops down:

On the duplicated rectangle, remove the rounded corners and the drop shadow.

Add a dashed bottom stroke, delete the icons as they are not necessary and change the title to Birthday. 

Then, group the elements.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Duplicate this box and add the other occasion options and name them. 

Note: Although three options - birthday, engagement and anniversary - are used in this exercise, feel free to add additional options.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Group all the elements and navigate to the top menu bar to create a component and a variant. These are encompassed in a purple dashed container.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Note: You can easily extend the container so that you can position the main component and the variant side by side.

Illustration depicting contents of dropdown menu labelled 'Occasion'
On the left, in the layers panel, there are now two variants -the default, which is how the dropdown list will display in idle state, and variant 2, which will display the active state:

Example hierarchy of elements within a Figma frame named 'dropdown'
Illustration depicting dropdown menu labelled 'Occasion', in both closed and open states
Delete the dropdown options in the default

Copy variant 2 and name it Birthday, as that's what the user will get when they select the Birthday option. 

Delete the party icon and the other options in the dropdown. 

Modify the arrow by rotating it 180 degrees. To make the user aware that they have made a selection, change the rectangular fill color to #495E57 and the text color to white.

Illustration depicting dropdown menu in various states
Duplicate this variant twice (for the additional two options) and rename them Engagement and Anniversary.

Illustration depicting possible states for dropdown menu labelled 'Occasion'
You have now created the dropdown list.

Step 2: Prototype and animate 
To animate the dropdown, navigate to prototype on the right-side bar and connect the components.

Illustration depicting outcomes from selecting various options within dropdown menu labelled 'Occasion'
To create a nice, smooth animation, use Smart animate in these connections to create a small delay when clicked.

'Interaction details' menu accessed from 'Interactions' list in the 'Prototype' section of Figma
Connect the default or idle state to variant 2. 

Connect variant 2 to the Birthday state, with the same settings: on click and smart animate.

Repeat for the Engagement and Anniversary variants.

Also connect these variants to the default or idle variant when the Birthday, Engagement, or Anniversary option is clicked. 

Note: The connections covered in point 3 to point 6 are as follows:

Illustration depicting possible outcomes for dropdown menu labelled 'Occasion'
Next, create a new desktop frame and call it prototype.

Copy the default or idle component and add it to the prototype frame.

Then, add the text Select occasion.

Illustration depicting dropdown menu labelled 'Occasion'
Step 3: Present animation 

Now is the moment of truth to determine whether the dropdown menu works as intended.

Navigate to the presentation mode.

Click the dropdown menu. The options should appear.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Select an occasion. The button should change color.

Illustration depicting a dropdown menu labelled 'Select Occasion', with the 'Birthday' option selected
Navigate back to the idle state and determine if you can change the occasion. This is important should a user make a mistake in their selection. 

Illustration depicting dropdown menu set to 'Engagement' state
Note: When testing your dropdown menu, the smooth transition created by using Smart Animate should be visible.

Conclusion
By completing this exercise, you have created a dropdown animated menu that you can incorporate into many aspects of your project when creating the reserve-a-table section for the Little Lemon website.

User Journey: The user journey refers to the process a user goes through when interacting with a product, which helps identify opportunities for enhancing user experience.
Variants: Variants in Figma allow designers to create multiple states of a component, enabling dynamic interactions and visual changes based on user actions.
Smart Animate: Smart Animate is a feature in Figma that creates smooth transitions between component states, enhancing the visual experience during interactions.
Component Design: Component design involves creating reusable UI elements that can be easily modified and maintained across a project, ensuring consistency and efficiency.
This content was generated by AI, so please check for any mistakes.
