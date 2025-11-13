lucide.createIcons();

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", () => {
    const src = card.getAttribute("data-video");
    modalVideo.src = src;
    modal.classList.add("active");
    modalVideo.play();
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});
