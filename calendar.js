// js for calender
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date = new Date();

function renderCalendar() {
  const daysContainer = document.querySelector(".calendar-days");
  daysContainer.innerHTML = "";

  let year = date.getFullYear();
  let month = date.getMonth();

  document.getElementById("month").innerText = monthNames[month];
  document.getElementById("year").innerText = year;

  let firstDay = new Date(year, month, 1).getDay();
  let totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += "<div></div>";
  }

  for (let i = 1; i <= totalDays; i++) {
    let div = document.createElement("div");
    div.innerText = i;

    let today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      div.classList.add("current-date");
    }

    div.onclick = () => showDateCard(i, month, year);
    daysContainer.appendChild(div);
  }
}

document.getElementById("prev").onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

document.getElementById("next").onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

/* Theme */
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};

/* Time */
setInterval(() => {
  let now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
  document.getElementById("date").innerText = now.toDateString();
}, 1000);

renderCalendar();

/* 👉 SHOW CARD */
function showDateCard(day, month, year) {
  const d = new Date(year, month, day);

  document.getElementById("card-day").innerText =
    d.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("card-date").innerText =
    d.toDateString();

  document.getElementById("date-card").classList.add("show");
}

/* ❌ CLOSE */
document.getElementById("close-btn").onclick = () => {
  document.getElementById("date-card").classList.remove("show");
};
