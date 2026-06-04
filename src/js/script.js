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

// Order Modal
function openOrder(type) {
  const modal = document.getElementById("orderModal");

  const title = document.getElementById("modalTitle");
  const status = document.getElementById("modalStatus");
  const orderId = document.getElementById("modalOrderId");
  const date = document.getElementById("modalDate");
  const location = document.getElementById("modalLocation");
  const tech = document.getElementById("modalTech");
  const price = document.getElementById("modalPrice");
  const icon = document.getElementById("modalIcon");

  if (type === "completed") {
    icon.textContent = "💧";
    title.textContent = "Water Filter Installation";
    status.textContent = "Completed";
    status.className = "text-sm font-medium text-green-600 mt-1";
    orderId.textContent = "WT240601";
    date.textContent = "01 June 2026";
    location.textContent = "Palmerah, West Jakarta";
    tech.textContent = "Budi Santoso";
    price.textContent = "Rp 500.000";
  }

  if (type === "confirmed") {
    icon.textContent = "🔧";
    title.textContent = "Pipe Leak Repair";
    status.textContent = "Confirmed";
    status.className = "text-sm font-medium text-blue-600 mt-1";
    orderId.textContent = "WT240602";
    date.textContent = "03 June 2026";
    location.textContent = "Palmerah, West Jakarta";
    tech.textContent = "Technician Assigned";
    price.textContent = "Rp 200.000";
  }

  if (type === "ongoing") {
    icon.textContent = "🚗";
    title.textContent = "Water Quality Inspection";
    status.textContent = "On Going";
    status.className = "text-sm font-medium text-yellow-600 mt-1";
    orderId.textContent = "WT240603";
    date.textContent = "Today, 09:00 AM";
    location.textContent = "Palmerah, West Jakarta";
    tech.textContent = "Technician On The Way";
    price.textContent = "Rp 150.000";
  }

  modal.classList.remove("hidden");
}

function closeOrder() {
  document.getElementById("orderModal").classList.add("hidden");
}

// Payment Method Select
const paymentCards = document.querySelectorAll(".payment-card");

paymentCards.forEach((card) => {
  card.addEventListener("click", () => {
    paymentCards.forEach((c) => {
      c.classList.remove("border-blue-500", "bg-blue-50");

      c.querySelector(".check").classList.add("hidden");
    });

    card.classList.add("border-blue-500", "bg-blue-50");

    card.querySelector(".check").classList.remove("hidden");
  });
});

// Login & Register Page
const signinTab = document.getElementById("signinTab");
const signupTab = document.getElementById("signupTab");

const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

const footerText = document.getElementById("footerText");
const footerAction = document.getElementById("footerAction");

function showSignIn() {
  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");

  signinTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-cyan-400",
    "text-white",
  );

  signupTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-cyan-400",
    "text-white",
  );

  signupTab.classList.add("text-slate-400");

  // Footer
  footerText.textContent = "Don't have an account?";
  footerAction.textContent = "Sign Up";
}

function showSignUp() {
  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");

  signupTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-cyan-400",
    "text-white",
  );

  signinTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-cyan-400",
    "text-white",
  );

  signinTab.classList.add("text-slate-400");

  // Footer
  footerText.textContent = "Already have an account?";
  footerAction.textContent = "Sign In";
}

signinTab.addEventListener("click", showSignIn);
signupTab.addEventListener("click", showSignUp);

footerAction.addEventListener("click", () => {
  if (signupForm.classList.contains("hidden")) {
    showSignUp();
  } else {
    showSignIn();
  }
});

// Validation form
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const error = document.getElementById("loginError");

  // reset style
  email.classList.remove("border-red-500");
  password.classList.remove("border-red-500");
  error.classList.add("hidden");

  if (email.value.trim() === "" || password.value.trim() === "") {
    error.textContent = "Please fill in all fields";
    error.classList.remove("hidden");

    if (email.value.trim() === "") {
      email.classList.add("border-red-500");
    }

    if (password.value.trim() === "") {
      password.classList.add("border-red-500");
    }

    return;
  }

  // sukses
  document.getElementById("loadingScreen").classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1500);
});
