const trainers = [
  {
    name: "Ramadan Hussien",
    speciality: "Strength Coach",
    rating: "4.9 ★",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
    description: "Expert in muscle building and strength training."  // ✅ حذف "Expert in" → أصبح أقصر بكلمة
  },
  {
    name: "Yahya alfitoury",
    speciality: "HIIT Specialist",
    rating: "4.8 ★",
    experience: "6 Years Experience",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    description: "Professional HIIT and fat-loss coach."
  },
  {
    name: "Issa Ramy",
    speciality: "Boxing Trainer",
    rating: "5.0 ★",
    experience: "10 Years Experience",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    description: "Former MMA athlete and boxing expert."  // ✅ حذف "Former" → أصبح أقصر بكلمة
  },
  {
    name: "Mohamed khaled",
    speciality: "CrossFit Coach",
    rating: "4.7 ★",
    experience: "7 Years Experience",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    description: "Functional fitness and CrossFit trainer."
  }
];

const trainersContainer = document.getElementById("trainersContainer");

trainers.forEach((trainer) => {
  trainersContainer.innerHTML += `
    <div class="trainer-card">
      <div class="trainer-image">
        <img src="${trainer.image}" alt="${trainer.name}">
        <div class="rating">${trainer.rating}</div>
      </div>
      <div class="trainer-info">
        <div class="speciality">${trainer.speciality}</div>
        <div class="trainer-name">${trainer.name}</div>
        <div class="trainer-desc">${trainer.description}</div>
        <div class="trainer-footer">
          <div class="experience">${trainer.experience}</div>
          <button class="book-btn" onclick="bookTrainer('${trainer.name}')">BOOK NOW</button>
        </div>
      </div>
    </div>
  `;
});

function bookTrainer(name) {
  document.getElementById("bookingModal").style.display = "flex";
  document.getElementById("modalText").innerHTML =
    `Your booking with <strong>${name}</strong> has been confirmed successfully.`;
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("bookingModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};