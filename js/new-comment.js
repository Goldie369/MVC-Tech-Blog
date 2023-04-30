// Get the post ID from the endpoint
const post_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1];

// Create a comment  
const newcommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#content-newcomment').value.trim();

  if (content) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); // When successful, reload the same page
    } else {
      alert('Failed to create a comment.'); // When unsuccessful, show alert
    }
  }
};


// Event listeners
document
  .querySelector('.newcomment-form')
  .addEventListener('submit', newcommentFormHandler);
