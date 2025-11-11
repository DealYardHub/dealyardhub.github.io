
function handleForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return; }
  // Open user's email client with pre-filled content
  const subject = encodeURIComponent('Website contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
  window.location.href = `mailto:dealyardhub@gmail.com?subject=${subject}&body=${body}`;
}
