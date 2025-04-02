document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter__number");
    let isAnimated = false;
    function animateCounter(counter) {
      const target = +counter.innerText;
      let count = 0;
      const speed = target / 100;
      function updateCounter() {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
    }
    function handleScroll() {
      const section = document.querySelector(".page-main__counter");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight && !isAnimated) {
        counters.forEach(counter => animateCounter(counter));
        isAnimated = true;
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
