/* ============================================================
   BARANGAY 170 – DEPARO 2  |  script.js
   ============================================================ */

"use strict";

/* ── TUTORIAL (no localStorage — shows every page load) ─── */
const tutorialModal = document.getElementById("tutorialModal");
const tutSkip       = document.getElementById("tutorialSkip");
const tutPrev       = document.getElementById("tutPrev");
const tutNext       = document.getElementById("tutNext");
const tutDots       = document.querySelectorAll(".tut-dot");
const tutSlides     = document.querySelectorAll(".tut-slide");
const helpBtn       = document.getElementById("helpBtn");

let tutStep = 1;
const tutTotal = tutSlides.length;

function tutGoTo(n) {
  tutSlides.forEach(s => s.classList.remove("active"));
  tutDots.forEach(d => d.classList.remove("active"));

  tutStep = n;
  tutSlides[n - 1].classList.add("active");
  tutDots[n - 1].classList.add("active");

  tutPrev.disabled = n === 1;
  tutNext.textContent = n === tutTotal ? "Got it! ✓" : "Next";
}

function closeTutorial() {
  tutorialModal.classList.add("tut-hiding");
  setTimeout(() => {
    tutorialModal.classList.add("tut-gone");
  }, 320);
}

function openTutorial() {
  tutStep = 1;
  tutGoTo(1);
  tutorialModal.classList.remove("tut-hiding", "tut-gone");
}

tutNext.addEventListener("click", () => {
  if (tutStep < tutTotal) {
    tutGoTo(tutStep + 1);
  } else {
    closeTutorial();
  }
});

tutPrev.addEventListener("click", () => {
  if (tutStep > 1) tutGoTo(tutStep - 1);
});

tutSkip.addEventListener("click", closeTutorial);

helpBtn.addEventListener("click", openTutorial);

// Close on backdrop click
tutorialModal.addEventListener("click", e => {
  if (e.target === tutorialModal) closeTutorial();
});

// Keyboard support
document.addEventListener("keydown", e => {
  if (tutorialModal.classList.contains("tut-gone")) return;
  if (e.key === "Escape")      closeTutorial();
  if (e.key === "ArrowRight")  tutNext.click();
  if (e.key === "ArrowLeft")   tutPrev.click();
});

// Init
tutGoTo(1);


/* ── EVENTS DATA ────────────────────────────────────────── */
const events = [
  {
    title: "SK 170 Basketball & Volleyball League 2026",
    date: "April 19, 2026",
    location: "Barangay 170 Court, Deparo 2, Caloocan City",
    body: `
      <p><strong>🏀🏐 SK 170 Basketball &amp; Volleyball League 2026</strong></p><br>
      <p><strong>📋 Pagpasa ng Line-Up:</strong> Abril 10–13, 2026</p>
      <p>Maaari na pong magpasa ng inyong mga line-up sa <strong>Facebook Page ng Sangguniang Kabataan</strong> o sa kahit sinong <strong>SK Officials</strong> bago mag itinakdang oras.</p><br>
      <p>⚠️ <em>PS: Anumang pagpasa ng lampas sa itinakdang oras at petsa ay <strong>hindi na tatanggapin</strong>.</em></p><br>
      <p><strong>🗓️ Opening Day: Abril 19, 2026 — 8:00 AM</strong></p><br>
      <p><strong>👥 Para sa:</strong> Volleyball (Men &amp; Women) at Basketball players ng Barangay 170</p><br>
      <p>Basahin po ng mabuti ang mechanics. Kita-kits, volleyball at basketball enthusiasts! 🧡</p><br>
      <p>Project of: <strong>SK Chair L.A. Bautista and Council</strong></p>
    `
  },
  {
    title: "Educational Cash Assistance",
    date: "June 21, 2025",
    location: "SK Office – Barangay Hall 170, Bldg 1, 2nd Floor",
    fbLink: null,
    body: `
      <p><strong>For Senior High School &amp; College Students</strong> of Brgy 170, Caloocan City.</p><br>
      <p><strong>📋 Qualifications:</strong></p>
      <ul>
        <li>Enrolled in Academic Year 2025–2026</li>
        <li>Bona fide resident of Barangay 170</li>
      </ul><br>
      <p><strong>📁 Requirements:</strong></p>
      <ul>
        <li>Registration Card / Certificate of Enrollment for SY 2025–2026</li>
        <li>Valid ID of applicant or parent (address must be Brgy. 170)</li>
        <li>Birth Certificate or School ID of student</li>
      </ul><br>
      <p><strong>📌 Procedure:</strong></p>
      <ul>
        <li>Submit 3 photocopies + originals on <strong>June 20, 2025 (10AM–3PM)</strong></li>
        <li>Qualified beneficiaries will be notified via text or email</li>
        <li>Release: <strong>June 21, 2025, 10AM–3PM only</strong></li>
      </ul><br>
      <p>⚠️ <em>Limited slots only. One student per family. Incomplete requirements will not be accepted.</em></p><br>
      <p>Project of: <strong>SK Chairman Leigh Angelo Bautista and Council</strong><br>
      Supported by: <strong>Hon. Crisostomo R. Contreras and Council</strong></p>
    `
  },
  {
    title: "Women's Month Celebration – Clean-up Drive",
    date: "March 15, 2025",
    location: "Barangay 170 Covered Court",
    fbLink: null,
    body: `
      <p>Celebrating <strong>Women's Month 2025</strong> with a Women Leaders Simultaneous Clean-up Drive!</p><br>
      <p>Community women leaders joined together to help clean and beautify Barangay 170, highlighting the spirit of unity and service.</p><br>
      <p>Project of: <strong>SK Chair L.A. Bautista and Council</strong><br>
      #WomensMonthCelebration #SKBRGY170</p>
    `
  },
  {
    title: "Linggo ng Kabataan 2024",
    date: "August 2024",
    location: "Barangay 170 Multi-Purpose Hall",
    fbLink: null,
    body: `
      <p>A successful 3-day celebration of the Linggo ng Kabataan led by the SK ng Brgy 170!</p><br>
      <p><strong>Activities:</strong></p>
      <ul>
        <li>Day 1 – Sustansya sa bawat Kabataan</li>
        <li>Day 2 – Lakad Kabataan &amp; ML Tournament</li>
        <li>Day 3 – Palarong Pinoy</li>
      </ul><br>
      <p>Special thanks to <strong>TAU GAMMA CEFELS II</strong> and <strong>TAU GAMMA RECOMMVILLE Community Chapter</strong> for their partnership.</p><br>
      <p>Led by <strong>SK Chair Hon. L.A. Bautista</strong> with the support of <strong>Hon. Cris R. Contreras</strong> and Council.</p>
    `
  },
  {
    title: "Linggo ng Kabataan 2025",
    date: "August 23–24, 2025",
    location: "Barangay 170 Multi-Purpose Hall",
    fbLink: null,
    body: `
      <p>Theme: <em>"Local Youth Actions for the SDGs and Beyond"</em></p><br>
      <p>Empowering the Filipino Youth to Lead as we celebrate <strong>Linggo ng Kabataan 2025</strong>! All Kabataang Brgy 170 are welcome to fun games and team-building exercises.</p><br>
      <p>For more info, contact the Barangay 170 Facebook page or SK Office.</p><br>
      <p>Project of: <strong>SK Chair L.A. Bautista and Council</strong><br>
      Supported by: <strong>P/B Crisostomo R. Contreras and Council</strong></p>
    `
  },
  {
    title: "Barangay 170 Basketball Team – Finals Bound! 🏀",
    date: "2025",
    location: "Caloocan City Sports Complex",
    fbLink: null,
    body: `
      <p><strong>Absolutely electrifying!</strong> Against all odds, the Barangay 170 Basketball Team powered through adversity and clinched a thrilling victory, earning their rightful place in the <strong>FINALS</strong>!</p><br>
      <p>The team, proudly representing <strong>Barangay 170</strong>, showed incredible resilience and teamwork throughout the tournament.</p><br>
      <p>Rally together and bring the full force of our support as they chase championship glory!</p><br>
      <p>💙 <strong>Let's go, Barangay 170!</strong></p>
    `
  }
];

/* ── RENDER EVENTS ──────────────────────────────────────── */
const eventGrid = document.getElementById("eventGrid");

events.forEach((ev, i) => {
  const card = document.createElement("div");
  card.className = "event-card fade-up";
  card.style.setProperty("--d", `${i * 0.08}s`);

  const fbBtnHTML = ev.fbLink
    ? `<a class="ec-btn-fb" href="${ev.fbLink}" target="_blank" rel="noopener">📘 See post on FB</a>`
    : "";

  card.innerHTML = `
    <div class="ec-head">
      <span class="ec-date">📅 ${ev.date}</span>
      <h3 class="ec-title">${ev.title}</h3>
    </div>
    <div class="ec-body">
      <p class="ec-loc">${ev.location}</p>
      <div class="ec-actions">
        <button class="ec-btn" data-idx="${i}">View Details</button>
        ${fbBtnHTML}
      </div>
    </div>
  `;
  eventGrid.appendChild(card);
});

eventGrid.addEventListener("click", e => {
  const btn = e.target.closest("[data-idx]");
  if (btn) openModal(+btn.dataset.idx);
});

/* ── EVENT MODAL ────────────────────────────────────────── */
const modal      = document.getElementById("eventModal");
const modalClose = document.getElementById("modalClose");
const modalDate  = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalLoc   = document.getElementById("modalLoc");
const modalBody  = document.getElementById("modalBody");
const modalFbBtn = document.getElementById("modalFbBtn");

function openModal(i) {
  const ev = events[i];
  modalDate.textContent  = "📅 " + ev.date;
  modalTitle.textContent = ev.title;
  modalLoc.textContent   = ev.location;
  modalBody.innerHTML    = ev.body;

  // Show/hide FB button in modal
  if (ev.fbLink) {
    modalFbBtn.href = ev.fbLink;
    modalFbBtn.style.display = "inline-flex";
  } else {
    modalFbBtn.style.display = "none";
  }

  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("open"));
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  setTimeout(() => {
    modal.hidden = true;
    document.body.style.overflow = "";
  }, 260);
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ── ANNOUNCEMENTS DATA ─────────────────────────────────── */
const announcements = [
  {
    date: "April 2026",
    icon: "📢",
    text: "Magandang araw, mga residente ng Brgy 170! Nais naming ipaalam na ang libreng print sa SK Office ay pansamantalang isasara. Ipagpapatuloy po namin ang aming mga serbisyo sa susunod na buwan. Maraming salamat sa inyong patuloy na suporta! 🧡💚"
  },
  {
    date: "March 2026",
    icon: "📋",
    text: "Reminder: Barangay IDs can now be renewed at the Barangay Hall every weekday, 8AM–5PM. Please bring one (1) valid government-issued ID and one (1) passport-size photo. For inquiries, contact the Barangay 170 office."
  },
  {
    date: "February 2026",
    icon: "🏥",
    text: "Free Medical Check-up and Medicine Distribution is happening soon at the Barangay Health Center. Stay tuned for the exact schedule. Open to all Brgy 170 residents. Walang bayad! Dalhin lang ang inyong Barangay ID."
  }
];

/* ── RENDER ANNOUNCEMENTS ───────────────────────────────── */
const annList = document.getElementById("annList");

announcements.forEach((ann, i) => {
  const card = document.createElement("div");
  card.className = "ann-card fade-up";
  card.style.setProperty("--d", `${i * 0.1}s`);
  card.innerHTML = `
    <div class="ann-icon">${ann.icon}</div>
    <div>
      <div class="ann-date">Posted: ${ann.date}</div>
      <p class="ann-text">${ann.text}</p>
    </div>
  `;
  annList.appendChild(card);
});

/* ── LIGHTBOX ───────────────────────────────────────────── */
const galleryItems = document.querySelectorAll(".gal-item");
const lightbox     = document.getElementById("lightbox");
const lbImg        = document.getElementById("lbImg");
const lbCaption    = document.getElementById("lbCaption");
const lbClose      = document.getElementById("lbClose");
const lbPrev       = document.getElementById("lbPrev");
const lbNext       = document.getElementById("lbNext");
const lbBackdrop   = document.getElementById("lbBackdrop");

const galData = Array.from(galleryItems).map(item => ({
  src:     item.querySelector("img").src,
  caption: item.dataset.caption || item.querySelector(".gal-name")?.textContent || ""
}));

let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  showLbSlide();
  lightbox.removeAttribute("hidden");
  requestAnimationFrame(() => lightbox.classList.add("lb-open"));
  document.body.style.overflow = "hidden";
}

function showLbSlide() {
  const d = galData[lbIndex];
  lbImg.src             = "";
  lbImg.src             = d.src;
  lbImg.alt             = d.caption;
  lbCaption.textContent = d.caption;
}

function closeLightbox() {
  lightbox.classList.remove("lb-open");
  setTimeout(() => {
    lightbox.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }, 260);
}

galleryItems.forEach((item, i) => {
  item.addEventListener("click", () => openLightbox(i));
});

lbClose.addEventListener("click", closeLightbox);
lbBackdrop.addEventListener("click", closeLightbox);

lbPrev.addEventListener("click", () => {
  lbIndex = (lbIndex - 1 + galData.length) % galData.length;
  showLbSlide();
});
lbNext.addEventListener("click", () => {
  lbIndex = (lbIndex + 1) % galData.length;
  showLbSlide();
});

document.addEventListener("keydown", e => {
  if (lightbox.hidden) return;
  if (e.key === "Escape")     closeLightbox();
  if (e.key === "ArrowLeft")  { lbIndex = (lbIndex - 1 + galData.length) % galData.length; showLbSlide(); }
  if (e.key === "ArrowRight") { lbIndex = (lbIndex + 1) % galData.length; showLbSlide(); }
});

/* ── NAVBAR SCROLL ──────────────────────────────────────── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

/* ── MOBILE HAMBURGER ───────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// Close on link click
navMenu.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

// Close on outside click (mobile)
document.addEventListener("click", e => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  }
});

/* ── ACTIVE NAV LINK ────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-menu .nav-link");

const secObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => secObs.observe(s));

/* ── FADE-UP ON SCROLL ──────────────────────────────────── */
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach(el => fadeObs.observe(el));

const dynObs = new MutationObserver(() => {
  document.querySelectorAll(".fade-up:not([data-observed])").forEach(el => {
    el.setAttribute("data-observed","1");
    fadeObs.observe(el);
  });
});
dynObs.observe(document.body, { childList: true, subtree: true });

/* ── DARK / LIGHT THEME ─────────────────────────────────── */
const themeToggle = document.getElementById("themeToggle");
const themeIcon   = document.getElementById("themeIcon");
const html        = document.documentElement;

// Use sessionStorage instead of localStorage — clears when tab closes
const saved = sessionStorage.getItem("brgy170-theme") || "light";
html.setAttribute("data-theme", saved);
themeIcon.textContent = saved === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
  sessionStorage.setItem("brgy170-theme", next);
});