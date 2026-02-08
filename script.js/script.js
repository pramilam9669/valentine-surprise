const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");

yesBtn.onclick = () => {
  msg.innerHTML = "Forever & Always ❤️<br><b> Susai 💖 Prami </b>";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - 50) + "px";
};
