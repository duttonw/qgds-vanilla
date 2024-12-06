// Function to run to update the navigation links
function updateNavLinks() {
    // Select all anchor tags within the in-page navigation
    const links = document.querySelectorAll(".qld__inpage-nav-links a");

    links.forEach(link => {
        // Get the linked section (h2 element)
        const targetId = link.getAttribute('href').slice(1); // Remove the '#'
        const targetElement = document.querySelector(".qld__tab-content.active #" + targetId);
    
        // Check if the linked section does not exist
        if (!targetElement) {
            // Remove the corresponding list item
            link.parentElement.remove();
        }
    });
}

// Event listener for when the entire page has fully loaded
window.addEventListener('load', function() {
    // Check if there are any tabs on the page
    const tabs = document.querySelectorAll('.qld__tab-section');

    // Debugging: Log the number of tabs found
    console.log("Number of tabs found:", tabs.length);

    // If no tabs are found, exit the function
    if (tabs.length === 0) return;

    // Run the function initially
    updateNavLinks();

    // Attach a click event listener to each tab button
    tabs.forEach(button => {
        button.addEventListener('click', () => {
            // Run the function whenever a tab button is clicked
            QLD.inPageNav.init();
            updateNavLinks();
        });
    });
});