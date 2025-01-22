// Find the target element by its class name
const userToolbar = document.querySelector('.user-toolbar'); // Target the user-toolbar element

if (userToolbar) {
    // Create a new button element
    const newButton = document.createElement('button');
    newButton.id = 'newButton'; // Optional: Add an ID to the button
    newButton.className = 'custom-btn'; // Optional: Add a class for styling
    newButton.textContent = 'New Action'; // Set the text on the button

    // Add functionality to the button
    newButton.addEventListener('click', () => {
        alert('New Action Button Clicked!');
    });

    // Append the button to the user-toolbar
    userToolbar.appendChild(newButton);

    console.log('Button successfully added to the user-toolbar!');
} else {
    console.error('user-toolbar element not found');
}


newButton.style.backgroundColor = '#28a745'; // Green background
newButton.style.color = '#fff'; // White text
newButton.style.border = 'none'; // Remove border
newButton.style.padding = '10px 15px'; // Add padding
newButton.style.borderRadius = '5px'; // Rounded corners
newButton.style.cursor = 'pointer'; // Pointer cursor on hover
