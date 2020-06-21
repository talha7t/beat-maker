window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  // producing sound effects

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0; // resetting time to zero to allow multiple plays of the same music
      sounds[index].play();
      createBubble(index);
    });
  });

  // function that makes bubbles
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";

    bubble.addEventListener("animationend", function () {
      // remove the bubble
      visual.removeChild(this);
    });
  };
});
