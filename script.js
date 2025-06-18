//your JS code here. If required.
// Wait for the DOM to load before attaching event listener
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by ID
  const button = document.getElementById("enterBtn");

  // Add click event listener to the button
  button.addEventListener("click", function () {
    // Get the paragraph element with ID 'status'
    const statusElement = document.getElementById("status");

    // Change its inner HTML to an <h1> tag with new text
    statusElement.innerHTML = "<h1>Entered Metaverse</h1>";
  });
});
