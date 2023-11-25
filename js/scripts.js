function toggleContent(buttonNumber) {
    // Reset all buttons to normal state
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`button${i}`).classList.remove('active');
        document.getElementById(`content${i}`).style.display = 'none';
    }

    // Activate the clicked button and show corresponding content
    document.getElementById(`button${buttonNumber}`).classList.add('active');
    document.getElementById(`content${buttonNumber}`).style.display = 'block';
}



function showNumber(number, contentId) {
    var numberContent = document.getElementById(contentId);

    // Check if the content is visible
    var isVisible = window.getComputedStyle(numberContent).display !== 'none';

    // Update the content and toggle visibility
    if (isVisible) {
        numberContent.style.display = 'none';
    } else {
        numberContent.innerHTML = 'Phone Number: ' + number;
        numberContent.style.display = 'block';
    }
}


function toggleFAQ(contentId) {
    var faqContent = document.getElementById(contentId);

    // Check if the content is visible
    var isVisible = window.getComputedStyle(faqContent).display !== 'none';

    // Toggle visibility
    faqContent.style.display = isVisible ? 'none' : 'block';
}

function toggleDropdown(button, contentId) {
    // Find the parent container of the clicked button
    var container = button.parentNode;

    // Toggle the class on the container to show or hide the content
    container.classList.toggle("active");

    // Toggle FAQ content visibility
    var faqContent = document.getElementById(contentId);
    if (faqContent) {
        var isVisible = window.getComputedStyle(faqContent).display !== 'none';
        faqContent.style.display = isVisible ? 'none' : 'block';
    }

    // Iterate through all other containers and hide their content
    var allContainers = document.querySelectorAll(".faq-container");
    allContainers.forEach(function (otherContainer) {
        if (otherContainer !== container) {
            otherContainer.classList.remove("active");
        }
    });
}


function openSignupPopup() {
      var signupPopup = document.getElementById('signupPopup');
      signupPopup.style.display = 'block';
    }

    function closeSignupPopup() {
      var signupPopup = document.getElementById('signupPopup');
      signupPopup.style.display = 'none';
    }

    // Attach event listener to the signup button
    document.getElementById('signupb').addEventListener('click', openSignupPopup);
 

 


 // scripts.js

document.addEventListener('DOMContentLoaded', function () {

  const toggleMenu = () => {
    menuContainer.classList.toggle('show');
  };

  // Add a listener to the navbar-toggler-icon button
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    toggleMenu();
  });

  // Add a listener to each menu item to close the menu when clicked
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (menuContainer.classList.contains('show')) {
        toggleMenu();
      }
    });
  });
});


