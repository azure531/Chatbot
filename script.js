// Get references to the button and the iframe
const dialogflowButton = document.getElementById('dialogflow-button');
const dialogflowFrame = document.getElementById('dialogflow-frame');

// Add a click event listener to the button
dialogflowButton.addEventListener('click', function () {
    // Toggle the visibility of the iframe
    if (dialogflowFrame.style.display === 'none') {
        dialogflowFrame.style.display = 'block';
    } else {
        dialogflowFrame.style.display = 'none';
    }
});
