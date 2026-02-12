// Fade-in animation saat halaman load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});


// Efek klik ripple sederhana
const cards = document.querySelectorAll(".link-card");

cards.forEach(card => {
  card.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - card.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - card.offsetTop - radius}px`;
    circle.style.position = "absolute";
    circle.style.background = "rgba(255,255,255,0.4)";
    circle.style.borderRadius = "50%";
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple 0.6s linear";
    circle.style.pointerEvents = "none";

    card.style.position = "relative";
    card.style.overflow = "hidden";

    card.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});


// Tambahkan keyframes ripple via JS
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);


// Hover glow effect ringan
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
