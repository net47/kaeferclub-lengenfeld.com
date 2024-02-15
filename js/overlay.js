// Get the overlay
var overlay = document.getElementById("myoverlay");

// Get the button that opens the overlay
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the overlay
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the overlay
btn.onclick = function() {
  overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the overlay
span.onclick = function() {
  overlay.style.display = "none";
}

// When the user clicks anywhere outside of the overlay, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}

// Event listener for page load
window.onload = function() {
    overlay.style.display = "block";
  }