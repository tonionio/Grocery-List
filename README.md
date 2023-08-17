# Grocery-List
This project is a shopping list app implemented using HTML, CSS, and JavaScript. It utilizes the Document Object Model (DOM) to manipulate the HTML elements and provide interactivity.

The HTML file sets up the basic structure of the app, including a form with an input field and a button to add items, an unordered list to display the items, and a button to print the list. It also includes a script tag that links to the JavaScript file.

The CSS file styles the elements of the app, including the font, colors, and layout. It uses selectors to target specific elements and applies styles to them.

The JavaScript file contains the logic and functionality of the app. It starts by declaring an empty array called list to store the items. The shoppingList variable is assigned the reference to the unordered list element with the id "shoppingList".

The getItem function is triggered when the form is submitted. It prevents the default form submission behavior, retrieves the value entered in the input field, and performs some error handling. If the input field is empty, an alert is displayed asking the user to enter an item. If the item already exists in the list, another alert is displayed. If the input is valid, the item is added to the list array, sorted alphabetically, and the form is reset. Then, the removeList function is called to clear the list display, and the makeList function is called to recreate the list with the updated items.

The makeList function iterates over the list array and creates a new list item element for each item. It sets the text content of the list item to the item value and adds an event listener to handle the removal of the item when clicked. The list item is then appended to the shoppingList element.

The removeList function removes all child elements from the shoppingList element, effectively clearing the list display.

The removeItem function is triggered when a list item is clicked. It retrieves the text content of the clicked item, finds the index of the item in the list array, removes the item from the array, and calls the removeList and makeList functions to update the list display.

Finally, an event listener is added to the form element to listen for the "submit" event and trigger the getItem function.

Overall, this program demonstrates the use of the DOM to manipulate HTML elements and provide interactivity. It also showcases error handling by displaying alerts for invalid input or duplicate items. The program utilizes functions to encapsulate and organize the code for different tasks, such as adding items, removing items, and updating the list display.
