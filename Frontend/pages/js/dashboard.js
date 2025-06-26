// ✅ 1. Sidebar Collapse Toggle
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const sidebar = document.getElementById("sidebar");
const sidebarFooter = document.getElementById("sidebarFooter");

// ✅ 2. Sidebar Dropdown Expand/Collapse
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) dropdown.classList.toggle("hidden");
}

// ✅ 3. Theme Toggle (Light/Dark)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// ✅ Floating Heading Animation
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
  // ── Theme Setup ─
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // ── Sidebar Setup ─
  if (sidebar && toggleIcon && toggleBtn) {
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
        tooltip.textContent = isCollapsed
          ? "Expand Sidebar"
          : "Collapse Sidebar";
      if (sidebarFooter) sidebarFooter.classList.toggle("hidden", isCollapsed);

      // Enable tooltips only when collapsed
      document.querySelectorAll(".nav-tooltip").forEach((tooltip) => {
        tooltip.style.display = isCollapsed ? "block" : "none";
      });
    });
  }

  // ── Username/Role Injection ─
  const usernameEl = document.getElementById("usernameDisplay");
  const userRoleEl = document.getElementById("userRoleDisplay");
  if (usernameEl && userRoleEl) {
    usernameEl.textContent = "Mekesh";
    userRoleEl.textContent = "Role: Administrator";
  }

  // ── Sidebar Active Link Highlight ─
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ── Hide all tooltips on load ─
  document.querySelectorAll(".nav-tooltip").forEach((tooltip) => {
    tooltip.style.display = "none";
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  });

  // ✅ 4. Search Autocomplete
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

  if (searchInput && searchResults) {
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
      if (
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)
      ) {
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
  }

  // ✅ 5. Alerts System
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

  if (alertBtn && alertPanel && alertList && alertBadge) {
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
  }

  // ✅ 6. Logout
  const logoutBtn = document.querySelector('[title="Logout"]');
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("Logging out...");
      // Place session clearing logic here
    });
  }

  // ✅ 7. Keyboard Shortcut for Search
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // ✅ 8. Newsletter Subscription Toast
  const toast = document.getElementById("toast");
  const footerForm = document.querySelector(
    'form[onsubmit^="subscribeNewsletter"]'
  );
  if (footerForm && toast) {
    footerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 3000);
      document.getElementById("footer-email").value = "";
    });
  }
});
