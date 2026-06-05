const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => {
  io.observe(el);
});

document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  setTimeout(() => {
    el.classList.add('in');
  }, 90 + i * 130);
});
