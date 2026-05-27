document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const tab = item.textContent.trim().toLowerCase();
        document.querySelectorAll('.tab-content').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(tab + '-tab').classList.add('active');
    });
});

document.querySelectorAll('.progress-item').forEach(item => {
    const percent = item.querySelector('.progress-percent').textContent.trim();
    const value = parseFloat(percent);
    item.querySelector('.progress-bar-fill').style.width = value + '%';
});