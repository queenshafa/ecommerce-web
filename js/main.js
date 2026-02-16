const cards = document.querySelectorAll(".category-card");
const bg = document.getElementById("sliding-bg");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const cardHeight = card.offsetHeight;
    const cardTop = card.offsetTop;

    // Set tinggi dan posisi sliding background sesuai card yang di-hover
    bg.style.height = `${cardHeight}px`;
    bg.style.transform = `translateY(${cardTop}px)`;
  });
});
