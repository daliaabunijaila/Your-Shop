document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-contents").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((content) => {
    content.addEventListener("click", () => {
      document.querySelector(".nav-contents").classList.toggle("active");
    });
  });