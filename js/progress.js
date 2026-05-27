document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Membership Selection Logic
    // ==========================================
    const planButtons = document.querySelectorAll('.select-plan-btn');
    const planStatus = document.getElementById('plan-status');

    planButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedPlan = event.target.getAttribute('data-plan');
            
            // Updates display with a neat styled look
            planStatus.innerHTML = `Membership: <span style="color: #ffffff; font-weight: bold; text-shadow: 0 0 8px rgba(255,255,255,0.5);">${selectedPlan}</span>`;
            
            alert(`Welcome to Vortex! You have selected the ${selectedPlan} plan.`);
        });
    });

    // ==========================================
    // 2. Progress & Rank Tracker Logic
    // ==========================================
    let currentProgress = 0;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const rankText = document.getElementById('rank-text');
    const increaseBtn = document.getElementById('increase-progress-btn');

    // Function to calculate and update ranks based on progress percentage
    function updateRank(progress) {
        let rankName = "Initiate";
        
        if (progress >= 100) {
            rankName = "Vortex Overlord";
        } else if (progress >= 80) {
            rankName = "Alpha Titan";
        } else if (progress >= 50) {
            rankName = "Iron Elite";
        } else if (progress >= 20) {
            rankName = "Challenger";
        } else {
            rankName = "Initiate";
        }

        // Apply updated text to the UI badge
        rankText.textContent = rankName;
    }

    increaseBtn.addEventListener('click', () => {
        // Increase progress by 2% on click
        if (currentProgress < 100) {
            currentProgress += 2; 
            
            if (currentProgress > 100) {
                currentProgress = 100;
            }
            
            // Render changes visually
            progressBar.style.width = `${currentProgress}%`;
            progressText.textContent = currentProgress;
            
            // Check and update the rank dynamically
            updateRank(currentProgress);
            
            // End of track achievement alert
            if (currentProgress === 100) {
                setTimeout(() => {
                    alert('UNSTOPPABLE! You have reached maximum progress and earned the ultimate rank: Vortex Overlord!');
                }, 400);
            }
        }
    });
});