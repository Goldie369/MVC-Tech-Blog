// Signup request
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to sign up.'); // When unsuccessful, show alert
    }
  }
};


// Event listener
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
