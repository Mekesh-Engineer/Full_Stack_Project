// === Initialize User ===
function initUser() {
  const user = localStorage.getItem("user") || "Mekesh";
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  // Set user name only in navbar (no greeting)
  const userSpan = document.querySelector(".dropdown-toggle span");
  if (userSpan) {
    userSpan.textContent = user;
  }

  // Show greeting toast popup
  const toastEl = document.getElementById("greetingToast");
  if (toastEl) {
    toastEl.querySelector(
      ".toast-body"
    ).textContent = `${greeting}, ${user} 👋`;
    new bootstrap.Toast(toastEl).show();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var toastEl = document.getElementById("greetingToast");
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
});
function highlightActiveSidebarLink() {
  const path = window.location.pathname.split("/").pop(); // Get current filename
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// === Data per Year ===
const dataByYear = {
  2025: {
    money: { value: "$65,000", status: "+12%", trend: "up" },
    users: { value: "2,850", status: "+9%", trend: "up" },
    clients: { value: "3,700", status: "+5%", trend: "up" },
    sales: { value: "$190,000", status: "+10%", trend: "up" },
  },
  2024: {
    money: { value: "$58,000", status: "+8%", trend: "up" },
    users: { value: "2,600", status: "+4%", trend: "up" },
    clients: { value: "3,200", status: "-3%", trend: "down" },
    sales: { value: "$180,000", status: "+7%", trend: "up" },
  },
  2023: {
    money: { value: "$50,000", status: "-2%", trend: "down" },
    users: { value: "2,100", status: "-1%", trend: "down" },
    clients: { value: "2,800", status: "-6%", trend: "down" },
    sales: { value: "$160,000", status: "+3%", trend: "up" },
  },
};

// === Render Top Summary Cards ===
// === Render Top Summary Cards ===
function renderCards(data, year) {
  const container = document.getElementById("cardContainer");
  container.style.opacity = 0;
  setTimeout(() => {
    container.innerHTML = `
      <div class="card bg-dark text-white">
        <div class="card__label">Today's Money</div>
        <div class="card__value">${data.money.value}
          <span class="card__status ${data.money.trend}">${data.money.status}</span>
        </div>
      </div>
      <div class="card bg-white text-dark border">
        <div class="card__label">Today's Users</div>
        <div class="card__value">${data.users.value}
          <span class="card__status ${data.users.trend}">${data.users.status}</span>
        </div>
      </div>
      <div class="card bg-dark text-white">
        <div class="card__label">New Clients</div>
        <div class="card__value">${data.clients.value}
          <span class="card__status ${data.clients.trend}">${data.clients.status}</span>
        </div>
      </div>
      <div class="card bg-white text-dark border">
        <div class="card__label">Total Sales</div>
        <div class="card__value">${data.sales.value}
          <span class="card__status ${data.sales.trend}">${data.sales.status}</span>
        </div>
      </div>
    `;
    container.style.opacity = 1;
    if (year) localStorage.setItem("selectedYear", year);
  }, 200);
}

// === Tilt + Shine Animation ===
function enableTiltEffect() {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      card.style.transform = `rotateX(${(y / height) * 10}deg) rotateY(${
        -(x / width) * 10
      }deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// === Toggle Read More Content ===
function enableReadMoreToggle() {
  document.querySelectorAll(".highlight-card").forEach((card) => {
    const link = card.querySelector(".highlight-card__link");
    const extra = card.querySelector(".extra-content");
    if (link && extra) {
      link.setAttribute("role", "button");
      link.addEventListener("click", () => {
        const isOpen = extra.style.display === "block";
        extra.style.display = isOpen ? "none" : "block";
        link.textContent = isOpen ? "Read more →" : "Read less ←";
      });
    }
  });
}

// === Logout Bindings ===
function enableLogoutHandlers() {
  document
    .querySelectorAll(".dropdown-item, #sidebar-logout")
    .forEach((item) => {
      if (item.textContent.includes("Logout")) {
        item.addEventListener("click", () => {
          localStorage.removeItem("user");
          alert("Logged out successfully.");
          window.location.href = "login.html";
        });
      }
    });
}

// === Theme Toggle ===
function toggleTheme() {
  const isDark = document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white", isDark);
  document.body.classList.toggle("text-dark", !isDark);
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("bg-dark", isDark);
    card.classList.toggle("text-white", isDark);
    card.classList.toggle("bg-white", !isDark);
    card.classList.toggle("text-dark", !isDark);
  });
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// === Clock ===
function updateClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");
  const timeStr = `${hrs}:${mins}:${secs}`;
  document.getElementById("liveClock").textContent = timeStr;
}

// Start clock
setInterval(updateClock, 1000);
updateClock(); // initial call

// === Toast ===
function showToast(message) {
  const toastEl = document.getElementById("toastAlert");
  if (toastEl) {
    toastEl.querySelector(".toast-body").textContent = message;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}

// === Keyboard Shortcuts ===
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "f") {
    e.preventDefault();
    document.querySelector(".search-box input")?.focus();
  }
  if (e.ctrlKey && e.key === "l") {
    document.getElementById("themeToggle")?.click();
  }
});

// === Chart Functions ===
function generateLabels(type, count) {
  return Array.from({ length: count }, (_, i) => `${type} ${i + 1}`);
}

function generateUserBarData() {
  const labels = generateLabels("Day", 30);
  const data = labels.map(() => Math.floor(Math.random() * 500 + 100));
  return {
    labels,
    datasets: [
      {
        label: "Users",
        data,
        backgroundColor: "#2fd2c8",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };
}

function generateSalesLineData() {
  const labels = generateLabels("Month", 12);
  return {
    labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() => Math.floor(Math.random() * 400 + 100)),
        fill: true,
        backgroundColor: "rgba(47,210,200,0.2)",
        borderColor: "#2fd2c8",
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Last Year",
        data: labels.map(() => Math.floor(Math.random() * 300 + 80)),
        borderColor: "#888",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
}

function downloadChart(chartId) {
  const canvas = document.getElementById(chartId);
  const link = document.createElement("a");
  link.download = `${chartId}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function renderCharts() {
  const userChart = new Chart(document.getElementById("usersBarChart"), {
    type: "bar",
    data: generateUserBarData(),
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });

  const salesChart = new Chart(document.getElementById("salesAreaChart"), {
    type: "line",
    data: generateSalesLineData(),
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } },
    },
  });
}

// === DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
  initUser();
  updateClock();
  setInterval(updateClock, 1000);
  enableTiltEffect();
  enableReadMoreToggle();
  enableLogoutHandlers();
  highlightActiveSidebarLink();

  const storedYear = localStorage.getItem("selectedYear") || "2025";
  renderCards(dataByYear[storedYear], storedYear);

  document.getElementById("searchBtn")?.addEventListener("click", () => {
    const year = new Date(
      document.getElementById("startDate").value
    ).getFullYear();
    if (dataByYear[year]) {
      renderCards(dataByYear[year], year);
    } else {
      document.getElementById(
        "cardContainer"
      ).innerHTML = `<p class="text-danger">No data available for ${year}.</p>`;
    }
  });

  renderCharts();

  document
    .getElementById("themeToggle")
    ?.addEventListener("click", toggleTheme);
  if (localStorage.getItem("theme") === "dark") toggleTheme();
});
