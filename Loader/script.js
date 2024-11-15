/** @format */
const svg = document.getElementById("svg");
const tl = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

tl.from(".loader-wrap-heading h1", {
  delay: 1,
  y: 200,
  skewY: 10,
}).to(".loader-wrap-heading h1", {
  delay: 1.5,
  y: -200,
  skewY: 10,
});
tl.to(svg, {
  duration: 0.8,
  attr: { d: curve },
  ease: "power2.easeIn",
}).to(svg, {
  duration: 0.8,
  attr: { d: flat },
  ease: "power2.easeOut",
});
tl.to(".loader-wrap", {
  y: -1500,
});
tl.to(".loader-wrap", {
  zIndex: -1,
  display: "none",
});
tl.from(
  ".container h1",
  {
    y: 100,
    opacity: 0,
  },
  "-=1.5"
);

// Add an event listener to the button
document.querySelector(".button").addEventListener("click", () => {
  alert("Thanks for your support");
});
// Create an object to store the coordinates of the mouse
const coords = { x: 0, y: 0 };
// Select all the circles
const circles = document.querySelectorAll(".circle");

// Create an array of colors
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

// Loop through each circle and set its initial position and color
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

// Add an event listener to the window to get the coordinates of the mouse
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Create a function to animate the circles
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  // Loop through each circle and set its position and scale
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    // Get the next circle in the array
    const nextCircle = circles[index + 1] || circles[0];
    // Move the x and y coordinates towards the next circle
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  // Call the animateCircles function again to create a loop
  requestAnimationFrame(animateCircles);
}

// Call the animateCircles function to start the animation
animateCircles();
