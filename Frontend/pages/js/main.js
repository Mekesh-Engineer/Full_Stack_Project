// ✅ 1. Sidebar Collapse Toggle
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const sidebar = document.getElementById("sidebar");
const sidebarFooter = document.getElementById("sidebarFooter");

// ✅ 2. Sidebar Dropdown Expand/Collapse
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden");
}

// ✅ 3. Theme Toggle (Light/Dark)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// ── Floating Heading Animation ─────────────────────
const heading = document.querySelector("section h1");
let floatAmount = 0;
let direction = 1;
if (heading) {
  setInterval(() => {
    floatAmount += direction * 0.3;
    if (floatAmount > 4 || floatAmount < -4) direction *= -1;
    heading.style.transform = `translateY(${floatAmount}px)`;
  }, 40);
}

// ✅ Execute on DOM load
window.addEventListener("DOMContentLoaded", () => {
  // ── Theme Setup ──────────────────────────────
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // ── Sidebar Setup ─────────────────────────────
  sidebar.classList.remove("sidebar-collapsed");
  toggleIcon.className =
    "bi bi-chevron-double-left text-[var(--text-primary)] text-xl";

  const label = toggleBtn.querySelector(".sidebar-label");
  const tooltip = toggleBtn.querySelector(".nav-tooltip");
  if (label) label.textContent = "Collapse";
  if (tooltip) tooltip.textContent = "Collapse Sidebar";

  toggleBtn.addEventListener("click", () => {
    const isCollapsed = sidebar.classList.toggle("sidebar-collapsed");
    toggleIcon.className = isCollapsed
      ? "bi bi-chevron-double-right text-[var(--text-primary)] text-xl"
      : "bi bi-chevron-double-left text-[var(--text-primary)] text-xl";

    if (label) label.textContent = isCollapsed ? "Expand" : "Collapse";
    if (tooltip)
      tooltip.textContent = isCollapsed ? "Expand Sidebar" : "Collapse Sidebar";
    if (sidebarFooter) sidebarFooter.classList.toggle("hidden", isCollapsed);

    // Enable tooltips only when collapsed
    document.querySelectorAll(".nav-tooltip").forEach((tooltip) => {
      tooltip.style.display = isCollapsed ? "block" : "none";
    });
  });

  // ── Username/Role Injection ───────────────────
  const username = "Mekesh";
  const userRole = "Administrator";

  const usernameEl = document.getElementById("usernameDisplay");
  const userRoleEl = document.getElementById("userRoleDisplay");

  if (usernameEl && userRoleEl) {
    usernameEl.textContent = username;
    userRoleEl.textContent = `Role: ${userRole}`;
  }

  // ── Sidebar Active Link Highlight ─────────────
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ── Force hide tooltips on load ────────────────
  document.querySelectorAll(".nav-tooltip").forEach((tooltip) => {
    tooltip.style.display = "none";
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  });

  // ✅ 4. Search Autocomplete with Google Redirect
  const searchInput = document.getElementById("headerSearchInput");
  const searchResults = document.getElementById("searchResults");

  const sampleData = [
    "Load Spike",
    "Energy Usage",
    "Alert History",
    "Switch Logs",
    "AI Forecast",
    "Power Distribution",
    "Battery Status",
    "Grid Balance",
    "Real-time Monitoring",
    "Smart Meter Data",
  ];

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.length > 0) {
      const matches = sampleData.filter((item) =>
        item.toLowerCase().includes(query)
      );

      matches.forEach((item) => {
        const li = document.createElement("li");
        li.className =
          "px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer";
        li.textContent = item;
        li.onclick = () => {
          searchInput.value = item;
          searchResults.classList.add("hidden");
          window.open(
            `https://www.google.com/search?q=${encodeURIComponent(item)}`,
            "_blank"
          );
        };
        searchResults.appendChild(li);
      });

      searchResults.classList.remove("hidden");
    } else {
      searchResults.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query !== "") {
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          "_blank"
        );
        searchResults.classList.add("hidden");
      }
    }
  });

  // ✅ 5. Alerts System with Dummy Data
  const alertBtn = document.getElementById("alertBtn");
  const alertPanel = document.getElementById("alertPanel");
  const alertList = document.getElementById("alertList");
  const alertBadge = document.getElementById("alertBadge");

  let unseenCount = 0;

  const dummyAlerts = [
    "⚡ Load spike detected in Zone 4",
    "🔋 Battery level below 20%",
    "🌐 Web3 node disconnected",
    "📊 Forecast anomaly on AI model",
    "💡 Switch 3 toggled remotely",
    "🔥 Overload alert from Grid B",
  ];

  setInterval(() => {
    const randomAlert =
      dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
    const timestamp = new Date().toLocaleTimeString();

    const li = document.createElement("li");
    li.className = "bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm";
    li.innerHTML = `<strong>${randomAlert}</strong><br><small class="text-gray-500 dark:text-gray-300">${timestamp}</small>`;

    alertList.prepend(li);
    unseenCount++;
    alertBadge.textContent = unseenCount;
    alertBadge.classList.remove("hidden");

    alertBtn.classList.add("text-red-500");
    setTimeout(() => alertBtn.classList.remove("text-red-500"), 1000);
  }, 5000);

  alertBtn.addEventListener("click", () => {
    alertPanel.classList.toggle("hidden");
    if (!alertPanel.classList.contains("hidden")) {
      unseenCount = 0;
      alertBadge.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!alertPanel.contains(e.target) && !alertBtn.contains(e.target)) {
      alertPanel.classList.add("hidden");
    }
  });

  // ✅ 6. Logout Action
  document.querySelector('[title="Logout"]').addEventListener("click", () => {
    alert("Logging out...");
    // Redirect or clear session can go here
  });

  // ✅ 7. Keyboard Shortcut for Search (/ key)
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Capabilities
  function showDetails(category) {
    const emoji = {
      "Energy Monitoring": "⚡",
      "Load Forecasting": "📈",
      "Grid Management": "🧩",
      "Fault Detection": "🛡️",
      "Energy Analytics": "📊",
      "User Access & Security": "🔐",
    };
    alert(
      `${
        emoji[category] || "🔍"
      } Learn more about "${category}" module. Details coming soon.`
    );
  }

  // Cards Animation
  const slider = document.getElementById("slider");
  const slideLeft = document.getElementById("slideLeft");
  const slideRight = document.getElementById("slideRight");
  const scrollBar = document.getElementById("scrollBar");

  slideLeft?.addEventListener("click", () => {
    slider.scrollBy({ left: -350, behavior: "smooth" });
  });

  slideRight?.addEventListener("click", () => {
    slider.scrollBy({ left: 350, behavior: "smooth" });
  });

  slider?.addEventListener("scroll", () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const scrollPercent = (slider.scrollLeft / maxScroll) * 100;
    scrollBar.style.width = `${scrollPercent}%`;
  });

  let autoScrollInterval = setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 350, behavior: "smooth" });
    }
  }, 5000);

  const features = document.querySelectorAll(".transition-transform");
  features.forEach((feature) => {
    feature.addEventListener("mouseenter", () => {
      feature.classList.add("ring-1", "ring-[var(--accent-main)]");
    });
    feature.addEventListener("mouseleave", () => {
      feature.classList.remove("ring-1", "ring-[var(--accent-main)]");
    });
  });

  document
    .querySelectorAll(".animate-fade-in")
    .forEach((el) => el.classList.add("opacity-100"));
  document
    .querySelectorAll(".animate-slide-down")
    .forEach((el) => el.classList.add("translate-y-0", "opacity-100"));

  function validateNewsletterForm(event) {
    event.preventDefault();
    const name = document.getElementById("newsletter-name").value.trim();
    const email = document.getElementById("newsletter-email").value.trim();

    if (!name || !email || !email.includes("@")) {
      alert("Please enter a valid name and email.");
      return false;
    }
    alert(`Thank you, ${name}! You're now subscribed.`);
    return true;
  }

  function subscribeNewsletter(event) {
    event.preventDefault();
    const toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
    document.getElementById("footer-email").value = "";
  }
});
