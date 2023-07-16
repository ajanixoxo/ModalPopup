window.onload = function() {
    var modalOverlay = document.querySelector('.modal-overlay');
    var modalContent = document.querySelector('.modal-content');
  
    modalOverlay.style.display = 'block';
    modalContent.style.display = 'block';
  
    // Close the modal when "No" button is clicked
    modalContent.querySelector('button:last-of-type').addEventListener('click', function() {
      modalOverlay.style.display = 'none';
      modalContent.style.display = 'none';
    });
  };
  