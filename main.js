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
          entry.target.classList.add("khusus-card-model");
        }
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.remove("khusus-card-model");
      }
    });
  }, { threshold: 0 }
);

document.querySelectorAll(".from-top, .from-bottom, .from-out, .from-left, .from-bottom-card, .from-bottom-model").forEach((el) => {
  observer.observe(el);
});

// Clone untuk scroll tapi jangan observe
const ScrollAnimation = document.querySelector(".scroll-infinite").cloneNode(true);
const ScrollAnimationReverse = document.querySelector(".scroll-infinite-right").cloneNode(true);

const containers = document.querySelectorAll(".container-gallery");
if (containers[0]) containers[0].appendChild(ScrollAnimation);
if (containers[1]) containers[1].appendChild(ScrollAnimationReverse);


//Click card about function
const saitoBtn = document.getElementById('card-saito');
const akaneBtn = document.getElementById('card-akane');
const shiseiBtn = document.getElementById('card-shisei');
const mahoBtn = document.getElementById('card-maho');
const himariBtn = document.getElementById('card-himari');

const xBtn = document.querySelector(".close-btn");
const modalSaito = document.getElementById("saito-modal");

const sections = document.getElementsByTagName('section');


saitoBtn.addEventListener('click', () => {
  modalSaito.classList.toggle('active');
  for (let sec of sections) sec.classList.toggle('active');
  document.documentElement.style.overflowY = 'hidden';
});

xBtn.addEventListener('click', function() {
  modalSaito.classList.remove('active');
  for (let sec of sections) sec.classList.remove('active');
  document.documentElement.style.overflowY = 'auto';
});

// Hapus tanpa sentuh tanda silang
document.addEventListener('click', (e) => {
  if (!modalSaito.contains(e.target) && !saitoBtn.contains(e.target)) {
    modalSaito.classList.remove('active');
    for (let sec of sections) sec.classList.remove('active');
    document.documentElement.style.overflowY = 'auto';
  }
});