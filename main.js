// Animas FROM CSS
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("from-out")) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, 2000);
        } else {
          entry.target.classList.add("show");
        }
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".from-top, .from-bottom, .from-out, .from-left").forEach((el) => {
  observer.observe(el);
});

// Smooth animation scroll
const ScrollAnimation = document.querySelector(".scroll-infinite").cloneNode(true);
const ScrollAnimationReverse = document.querySelector(".scroll-infinite-right").cloneNode(true);

const containers = document.querySelectorAll(".container-gallery");
if (containers[0]) containers[0].appendChild(ScrollAnimation);
if (containers[1]) containers[1].appendChild(ScrollAnimationReverse);


//Click card about function
const akaneBtn = document.getElementById('card-akane');

akaneBtn.addEventListener('click', function () {
  alert('Tombol ini berfungsi');
})