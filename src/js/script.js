const panel = document.getElementById("detailPanel");

function openDetail() {
  panel.classList.remove("translate-y-full");
}

function closeDetail() {
  panel.classList.add("translate-y-full");
}

const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});
