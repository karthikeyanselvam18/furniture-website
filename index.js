document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top-button");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });