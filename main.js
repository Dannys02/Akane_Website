// Animas FROM CSS
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Kalau .from-out, delay 3 detik
        if (entry.target.classList.contains("from-out")) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, 2000); // ⏳ delay 3 detik
        } else {
          // .from-top dan .from-bottom langsung muncul
          entry.target.classList.add("show");
        }
      } else {
        // Reset animasi supaya bisa berulang
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.1 }
);

// === Terapkan ke semua elemen animasi ===
document.querySelectorAll(".from-top, .from-bottom, .from-out, .text-about").forEach((el) => {
  observer.observe(el);
});