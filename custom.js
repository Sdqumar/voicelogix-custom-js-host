// Find the target element by its class name
const userToolbar = document.querySelector('.user-toolbar'); // Target the user-toolbar element

if (userToolbar) {
    // Create a container div to wrap both pipe and button
    const container = document.createElement('li');
    container.className = 'button-container'; // Add class for styling

    // Create the pipe element

    // Create the new button
    const newButton = document.createElement('button');
    newButton.id = 'newButton'; // Optional: Add an ID to the button
    newButton.className = 'custom-btn'; // Optional: Add a class for styling
    newButton.textContent = 'Billing Center'; // Set the text on the button

    // Add functionality to the button
    newButton.addEventListener('click', () => {
        window.open("https://billingcenter.voicelogix.com", "_blank");
    });

    // Apply inline styles for button (or use CSS)
    Object.assign(newButton.style, {
        color: '#08c', // Blue text
        border: 'none', // Remove border
        cursor: 'pointer', // Pointer cursor on hover
        background: 'transparent', // Remove background
        fontSize: '14px' // Adjust font size
    });

    // Append the pipe and button inside the container
    container.appendChild(newButton);

  
    // Append the container to the user-toolbar
    userToolbar.appendChild(container);

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
