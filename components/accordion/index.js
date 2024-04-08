const accordion = document.querySelectorAll(".accordion");

accordion.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("active");
    const panel = element.nextElementSibling;
    panel.classList.toggle("open");
  });
});
