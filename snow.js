const snowContainer = document.querySelector(".snow");

for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement("div");
  snowflake.style.position = "absolute";
  snowflake.style.top = Math.random() * -100 + "px";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.width = snowflake.style.height = Math.random() * 4 + 2 + "px";
  snowflake.style.background = "white";
  snowflake.style.borderRadius = "50%";
  snowflake.style.opacity = Math.random();

  snowflake.style.animation = `
    fall ${Math.random() * 5 + 5}s linear infinite
  `;

  snowContainer.appendChild(snowflake);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh);
  }
}`;
document.head.appendChild(style);

const music = document.getElementById("bg-music");

function startMusic() {
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

// First interaction triggers music
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);


