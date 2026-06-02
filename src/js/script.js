// Detail Panel Logic
const detailPanel = document.getElementById("detailPanel");

const locations = {
  green: {
    name: "Menteng, Jakarta Pusat",
    time: "10 min ago",
    score: 92,
    color: "text-green-500",
    ph: "7.2",
    turbidity: "2.1",
    risk: "Low",
    complaints: "2",
    recommendation: "Water quality excellent. Safe for daily consumption.",
  },

  yellow: {
    name: "Kemang, Jakarta Selatan",
    time: "20 min ago",
    score: 67,
    color: "text-yellow-500",
    ph: "6.5",
    turbidity: "12.8",
    risk: "Moderate",
    complaints: "12",
    recommendation: "Monitor usage. Consider installing additional filtration.",
  },

  yellow2: {
    name: "Cempaka Putih, Jakarta Pusat",
    time: "25 min ago",
    score: 65,
    color: "text-yellow-500",
    ph: "6.3",
    turbidity: "15.4",
    risk: "Moderate",
    complaints: "15",
    recommendation: "Monitor usage. Consider installing additional filtration.",
  },

  red: {
    name: "Kapuk, Jakarta Utara",
    time: "30 min ago",
    score: 28,
    color: "text-red-500",
    ph: "5.8",
    turbidity: "32.5",
    risk: "Very High",
    complaints: "28",
    recommendation:
      "Immediate attention required. Do not consume. Contact technician.",
  },
};

function openDetail(type) {
  const data = locations[type];

  document.getElementById("locationName").textContent = data.name;
  document.getElementById("timeAgo").textContent = data.time;

  const score = document.getElementById("score");
  score.textContent = data.score;
  score.className = `text-5xl font-bold ${data.color}`;

  document.getElementById("phValue").textContent = data.ph;
  document.getElementById("turbidityValue").textContent = data.turbidity;
  document.getElementById("riskValue").textContent = data.risk;
  document.getElementById("complaintsValue").textContent = data.complaints;

  document.getElementById("recommendationText").textContent =
    data.recommendation;

  detailPanel.classList.remove("translate-y-full");
}

function closeDetail() {
  detailPanel.classList.add("translate-y-full");
}

const cards = document.querySelectorAll(".service-card");
const bookContainer = document.getElementById("bookContainer");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // reset semua card
    cards.forEach((c) => {
      c.classList.remove("border-blue-500", "bg-blue-50");
      c.classList.add("border-gray-200");
    });

    // card yang dipilih
    card.classList.remove("border-gray-200");
    card.classList.add("border-blue-500", "bg-blue-50");

    // tampilkan tombol
    bookContainer.classList.remove("hidden");
  });
});

// Map di gerakin
const mapArea = document.getElementById("mapArea");

if (mapArea) {
  let isDragging = false;

  let startX = 0;
  let startY = 0;

  let currentX = 0;
  let currentY = 0;

  mapArea.addEventListener("pointerdown", (e) => {
    isDragging = true;

    startX = e.clientX;
    startY = e.clientY;

    mapArea.style.cursor = "grabbing";
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    currentX += e.clientX - startX;
    currentY += e.clientY - startY;

    mapArea.style.transform = `translate(${currentX}px, ${currentY}px)`;

    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
    mapArea.style.cursor = "grab";
  });
}

// Select Problem Logic
console.log("JS BERJALAN");

const cards2 = document.querySelectorAll(".problem-card");
const continueBtn = document.getElementById("continueBtn");

let selectedProblem = "";

cards2.forEach((card) => {
  card.addEventListener("click", () => {
    cards2.forEach((c) => {
      c.classList.remove("border-yellow-400", "bg-slate-700");
    });

    card.classList.add("border-yellow-400", "bg-slate-700");

    selectedProblem = card.querySelector("h4").textContent;

    continueBtn.disabled = false;

    continueBtn.classList.remove("bg-slate-700", "text-slate-400");

    continueBtn.classList.add(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-cyan-500",
      "text-white",
    );
  });
});

// Counter textarea
const desc = document.getElementById("desc");
const counter = document.getElementById("counter");

if (desc && counter) {
  desc.addEventListener("input", () => {
    counter.textContent = `${desc.value.length}/300`;
  });
}

// Severity Select
const severityCards = document.querySelectorAll(".severity-card");

severityCards.forEach(function (card) {
  card.addEventListener("click", function () {
    severityCards.forEach(function (c) {
      c.classList.remove("border-blue-500", "bg-blue-500/20");
    });

    card.classList.add("border-blue-500", "bg-blue-500/20");
  });
});

// Submit
const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    window.location.href = "form-success.html";
  });
}
