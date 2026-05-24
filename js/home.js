/* =============================================
   VORTEX FITNESS — home.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Animate popularity bars on load ── */
    setTimeout(() => {
        document.querySelectorAll('.popularity-bar-fill').forEach(bar => {
            const target = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = target; }, 100);
        });
    }, 300);

    /* ── Init charts ── */
    initCalChart();
    initMuscleChart();
});


/* ============================================================
   STATS SECTION — switch Male / Female KPI data
   ============================================================ */
const statData = {
    male:   { members: '1,284', cal: '620',  session: '68m', goal: '89%' },
    female: { members: '976',   cal: '480',  session: '55m', goal: '82%' }
};

function switchStatGender(gender) {
    document.getElementById('statTabMale').classList.toggle('active', gender === 'male');
    document.getElementById('statTabFemale').classList.toggle('active', gender === 'female');

    const d = statData[gender];
    document.getElementById('kpiMembers').textContent = d.members;
    document.getElementById('kpiCal').textContent     = d.cal;
    document.getElementById('kpiSession').textContent = d.session;
    document.getElementById('kpiGoal').textContent    = d.goal;
}


/* ============================================================
   CHART 1 — Weekly Calories (Bar + Goal Line)
   ============================================================ */
function initCalChart() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const cals = [420, 380, 510, 620, 480, 440, 390];

    const ctx = document.getElementById('calChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Calories Burned',
                    data: cals,
                    backgroundColor: cals.map(c => c >= 500 ? '#ff2b2b' : 'rgba(255,43,43,0.45)'),
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Goal',
                    data: Array(7).fill(500),
                    type: 'line',
                    borderColor: '#555555',
                    borderDash: [5, 4],
                    borderWidth: 1.5,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    ticks: { color: '#b3b3b3', font: { size: 11, family: 'Montserrat' } },
                    grid: { color: 'rgba(255,255,255,0.04)' }
                },
                y: {
                    min: 0, max: 700,
                    ticks: { color: '#b3b3b3', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.07)' }
                }
            }
        }
    });
}


/* ============================================================
   CHART 2 — Muscle Groups Radar
   ============================================================ */
function initMuscleChart() {
    const ctx = document.getElementById('muscleChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Chest', 'Back', 'Shoulders', 'Arms', 'Core', 'Legs'],
            datasets: [
                {
                    label: 'Current',
                    data: [75, 60, 80, 70, 55, 65],
                    backgroundColor: 'rgba(255,43,43,0.18)',
                    borderColor: '#ff2b2b',
                    borderWidth: 2,
                    pointBackgroundColor: '#ff2b2b',
                    pointRadius: 4
                },
                {
                    label: 'Goal',
                    data: [90, 85, 85, 80, 80, 85],
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: '#555555',
                    borderDash: [4, 4],
                    borderWidth: 1.5,
                    pointRadius: 3,
                    pointBackgroundColor: '#555555'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    min: 0, max: 100,
                    ticks: {
                        stepSize: 25,
                        color: '#888888',
                        backdropColor: 'transparent',
                        font: { size: 10 }
                    },
                    grid:        { color: 'rgba(255,255,255,0.08)' },
                    angleLines:  { color: 'rgba(255,255,255,0.08)' },
                    pointLabels: { color: '#b3b3b3', font: { size: 12, weight: '700', family: 'Montserrat' } }
                }
            }
        }
    });
}
