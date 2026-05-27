function togglePassword() {
  const input = document.getElementById('passwordInput');
  const icon = document.getElementById('eyeIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'bi bi-eye';
  } else {
    input.type = 'password';
    icon.className = 'bi bi-eye-slash';
  }
}