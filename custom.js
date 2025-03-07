// Find the target element by its class name
const userToolbar = document.querySelector('.user-toolbar'); // Target the user-toolbar element

if (userToolbar) {
    // Create a new button element
    const newButton = document.createElement('button');
    newButton.id = 'newButton'; // Optional: Add an ID to the button
    newButton.className = 'custom-btn'; // Optional: Add a class for styling
    newButton.textContent = 'Billing Center'; // Set the text on the button

    // Add functionality to the button
    newButton.addEventListener('click', () => {
return location.href="https://billingcenter.voicelogix.com"
    });
    
    newButton.style.color = '#08c'; // Blue text
    newButton.style.border = 'none'; // Remove border
    newButton.style.padding = '10px 15px'; // Add padding
    newButton.style.cursor = 'pointer'; // Pointer cursor on hover
    newButton.style.background = 'transparent'; // Remove background
    // Append the button to the user-toolbar
    userToolbar.appendChild(newButton);
 // Create a CSS class for the hover effect
    const style = document.createElement('style');
    style.innerHTML = `
        #newButton:hover {
            text-decoration: underline; /* Underline on hover */
        }
    `;
    document.head.appendChild(style);
    console.log('Button successfully added to the user-toolbar!');
} else {
    console.error('user-toolbar element not found');
}


    
