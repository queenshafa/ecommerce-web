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

function toggleDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");

  if (drawer.classList.contains("translate-x-full")) {
    // Open
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    document.body.style.overflow = "hidden"; // Stop scrolling page
  } else {
    // Close
    drawer.classList.add("translate-x-full");
    overlay.classList.remove("opacity-100");
    setTimeout(() => {
      overlay.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 300);
  }
}
