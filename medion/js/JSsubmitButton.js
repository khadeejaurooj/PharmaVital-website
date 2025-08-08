const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closeButton = document.getElementById('close-popup');

// Function to fetch and display data from JSON
function fetchPopupData(dataUrl) {
  fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      popupMessage.textContent = data.message;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      popupMessage.textContent = 'An error occurred. Please try again later.';
    });
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  fetchPopupData('data.json');

  popup.classList.remove('hidden'); // Show the popup
});

closeButton.addEventListener('click', function() {
  popup.classList.add('hidden'); // Hide the popup
});