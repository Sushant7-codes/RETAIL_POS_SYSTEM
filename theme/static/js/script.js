// Here are the scripts of login.html

  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.textContent = "HIDE PASSWORD";
    } else {
      password.type = "password";
      togglePassword.textContent = "SHOW PASSWORD";
    }
  });

  // Add dynamic particle creation
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.querySelector('.floating-particles').appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 8000);
  }

  // Create particles periodically
  setInterval(createParticle, 2000);


//  HERE ARE THE SCRIPTS OF register.html


  const togglePasswords = document.getElementById("togglePasswords");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  togglePasswords.addEventListener("click", () => {
    if (password1.type === "password") {
      password1.type = "text";
      password2.type = "text";
      togglePasswords.textContent = "HIDE PASSWORDS";
    } else {
      password1.type = "password";
      password2.type = "password";
      togglePasswords.textContent = "SHOW PASSWORDS";
    }
  });

  // Add dynamic particle creation
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.querySelector('.floating-particles').appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 8000);
  }

  // Create particles periodically
  setInterval(createParticle, 2000);

  // Here are the changes for "as admin and as cashier"


// click the admin and cashier button and be redirected to the login page validation
  function setRole(role) {
    document.getElementById('role-input').value = role;
}
  

setTimeout(function() {
  const popup = document.getElementById('errorPopup');
  if (popup) {
    closePopup();
  }
}, 5000);

// Function to close popup
function closePopup() {
  const popup = document.getElementById('errorPopup');
  if (popup) {
    popup.classList.add('fade-out');
    setTimeout(() => {
      popup.remove();
    }, 500);
  }
}

// Clear session when user leaves the page or opens new tab
window.addEventListener('beforeunload', function() {
  fetch('/accounts/clear-session/', {
    method: 'POST',
    headers: {
      'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
    keepalive: true
  });
});

// Also clear when page becomes hidden (switching tabs, etc.)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    fetch('/accounts/clear-session/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      keepalive: true
    });
  }
});