function selectAvatar(el) {
  document.querySelectorAll('.circle-option').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const preview = document.getElementById('selectedPreview');
  preview.style.backgroundImage = '';
  preview.style.backgroundColor = el.style.backgroundColor;
  preview.style.color = '#ffffff';
  preview.style.border = '2px solid #5a5a5a';
  preview.innerHTML = el.dataset.label;
}

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

document.getElementById('photoUpload').addEventListener('change', function() {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById('selectedPreview');
    preview.innerHTML = '';
    preview.style.backgroundImage = `url(${e.target.result})`;
    preview.style.backgroundSize = 'cover';
    preview.style.backgroundPosition = 'center';
    preview.style.border = '2px solid #5a5a5a';
    document.querySelectorAll('.circle-option').forEach(c => c.classList.remove('selected'));
  };
  reader.readAsDataURL(file);
});