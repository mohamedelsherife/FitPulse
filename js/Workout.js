// ── GENDER SWITCH
function selectGender(gender) {
  var btnMale   = document.getElementById('btn-male');
  var btnFemale = document.getElementById('btn-female');
  var maleDiv   = document.getElementById('male-workouts');
  var femaleDiv = document.getElementById('female-workouts');

  if (gender === 'male') {
    btnMale.classList.add('active');
    btnFemale.classList.remove('active');
    maleDiv.classList.add('active-workouts');
    femaleDiv.classList.remove('active-workouts');
  } else {
    btnFemale.classList.add('active');
    btnMale.classList.remove('active');
    femaleDiv.classList.add('active-workouts');
    maleDiv.classList.remove('active-workouts');
  }

  document.getElementById('schedule-area').classList.remove('visible');
  document.querySelectorAll('.workout-card').forEach(function(c) {
    c.classList.remove('active');
  });
}

// ── WORKOUT CARDS
document.querySelectorAll('.workout-card').forEach(function(card) {
  card.addEventListener('click', function() { selectWorkout(card); });
  card.querySelector('.card-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    selectWorkout(card);
  });
});

function selectWorkout(card) {
  document.querySelectorAll('.workout-card').forEach(function(c) {
    c.classList.remove('active');
  });
  card.classList.add('active');

  var name     = card.getAttribute('data-workout');
  var icon     = card.getAttribute('data-icon');
  var schedule = JSON.parse(card.getAttribute('data-schedule'));

  var scheduleArea  = document.getElementById('schedule-area');
  var scheduleIcon  = document.getElementById('schedule-icon');
  var scheduleTitle = document.getElementById('schedule-title');
  var scheduleSub   = document.getElementById('schedule-sub');
  var scheduleDays  = document.getElementById('schedule-days');

  scheduleIcon.className    = icon + ' schedule-icon';
  scheduleTitle.textContent = name + ' — Weekly Schedule';
  scheduleSub.textContent   = 'Your full week plan for ' + name;

  scheduleDays.innerHTML = '';
  schedule.forEach(function(item, index) {
    var parts   = item.split(':');
    var day     = parts[0].trim();
    var workout = parts[1] ? parts[1].trim() : '';
    var isRest  = workout.toLowerCase().includes('rest');

    var div = document.createElement('div');
    div.className = 'schedule-day' + (isRest ? ' rest-day' : '');
    div.style.animationDelay = (index * 0.07) + 's';
    div.innerHTML =
      '<span class="day-name"><i class="fa-solid fa-circle-dot"></i> ' + day + '</span>' +
      '<span class="day-workout">' +
        (isRest
          ? '<i class="fa-solid fa-moon"></i> Rest'
          : '<i class="fa-solid fa-circle-check"></i> ' + workout) +
      '</span>';
    scheduleDays.appendChild(div);
  });

  scheduleArea.classList.add('visible');
  scheduleArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── PROGRAM ACCORDION
document.querySelectorAll('.program-header').forEach(function(header) {
  header.addEventListener('click', function() {
    toggleProgram(header.parentElement);
  });
});

function toggleProgram(block) {
  var isOpen = block.classList.contains('open');
  document.querySelectorAll('.program-block').forEach(function(b) {
    b.classList.remove('open');
  });
  if (!isOpen) block.classList.add('open');
}