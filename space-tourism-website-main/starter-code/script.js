const circles = document.querySelectorAll(".nextCircle");

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => {
      c.style.backgroundColor = "lightGray";
    });

    circle.style.backgroundColor = "white";
  });
});
