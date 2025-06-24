// Chart.js initialization for Active Users (bar) and Sales Overview (line)

const activeUsersCtx = document
  .getElementById("activeUsersChart")
  .getContext("2d");
const salesOverviewCtx = document
  .getElementById("salesOverviewChart")
  .getContext("2d");

// Dummy data for bar chart (Active Users)
new Chart(activeUsersCtx, {
  type: "bar",
  data: {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
    ],
    datasets: [
      {
        label: "Active Users",
        data: [80, 120, 100, 140, 180, 90, 160, 110, 140, 170, 130, 60],
        backgroundColor: "rgba(62, 207, 175, 0.7)",
        borderRadius: 7,
        maxBarThickness: 22,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#7b809a", font: { size: 12 } },
      },
      y: {
        grid: { color: "#e9ecef" },
        ticks: { color: "#7b809a", font: { size: 12 }, stepSize: 50 },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

// Dummy data for line chart (Sales Overview)
new Chart(salesOverviewCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [300, 200, 270, 210, 420, 350, 380, 410, 360, 460, 410, 500],
        fill: true,
        backgroundColor: "rgba(62,207,175,0.13)",
        borderColor: "#3ecfaf",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Last Year",
        data: [250, 180, 200, 190, 330, 280, 340, 350, 300, 410, 370, 420],
        borderColor: "#353b48",
        backgroundColor: "rgba(53,59,72,0.06)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#7b809a", font: { size: 12 } },
      },
      y: {
        grid: { color: "#e9ecef" },
        ticks: { color: "#7b809a", font: { size: 12 }, stepSize: 100 },
      },
    },
  },
});
