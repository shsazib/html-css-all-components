const modalBox = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("active");
});
modalBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-container")) {
    modalBox.classList.remove("active");
  }
});
