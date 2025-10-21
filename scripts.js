/* =========================
   JMB Studio Production Scripts
   ========================= */

// Toggle sections
function showSection(id) {
  document.querySelectorAll('.section-content').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

// Christmas Countdown
function updateCountdown() {
  const targetDate = new Date("Dec 25, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdownTimer").innerHTML = "🎉 Merry Christmas!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Modal Control
function showAdminLogin() {
  document.getElementById('adminLoginModal').classList.remove('hidden');
}
function closeAdminLogin() {
  document.getElementById('adminLoginModal').classList.add('hidden');
}

// Simple Admin Login Validation
function handleAdminLogin(e) {
  e.preventDefault();
  const username = document.getElementById('adminUsername').value;
  const password = document.getElementById('adminPassword').value;
  const error = document.getElementById('loginError');
  if (username === "admin" && password === "1234") {
    alert("Welcome, Admin!");
    closeAdminLogin();
    document.querySelectorAll('.admin-portal').forEach(p => p.classList.add('active'));
  } else {
    error.classList.remove('hidden');
  }
}
