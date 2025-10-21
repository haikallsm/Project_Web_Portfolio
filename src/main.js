import './style.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  easing: 'ease-in-out',
})

window.addEventListener("load", () => {
  AOS.refresh();
});

// hamburger
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.getElementById("resume").addEventListener("click", () => {
  window.location.href = "resume.html";
});
document.getElementById("healer").addEventListener("click", () => {
  window.location.href = "/project/project_healer.html";
});
document.getElementById("careup").addEventListener("click", () => {
  window.location.href = "/project/project_careup.html";
});
document.getElementById("gcs").addEventListener("click", () => {
  window.location.href = "/project/project_gcs.html";
});
document.getElementById("ecommerce").addEventListener("click", () => {
  window.location.href = "/project/project_ecommerce.html";
});

const experiences = {
  dewo: {
    title: "Hardware Staff in VTOL Division",
    company: "Universitas Negeri Surabaya",
    date: "February 2025 - NOW",
    tech: ["C++", "Python"],
    desc: [
      "Collaborated in designing and testing hardware components for VTOL projects.",
      "Assisted the team in implementing electronic systems to support autonomous flight.",
    ],
  },
  sinc: {
    title: "Laboratory Assistant",
    company: "SINC Laboratory",
    date: "May 2025 - Now",
    tech: ["Cisco Packet Tracer"],
    desc: [
      "Guided students in practical sessions of networking fundamentals and configuration.",
      "Maintained lab devices and assisted lecturers in preparing teaching materials.",
    ],
  },
};

const buttons = document.querySelectorAll(".exp-btn");
const detail = document.getElementById("expDetail");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.exp;
    const exp = experiences[key];
    
    detail.classList.add("opacity-0", "translate-y-4");

    setTimeout(() => {
      detail.innerHTML = `
        <h4 class="text-2xl font-bold text-white">${exp.title}</h4>
        <h5 class="text-sm font-light">${exp.company}</h5>
        <p class="mt-3 text-light text-gray-300">${exp.date}</p>
        <div class="mt-3 flex gap-2">
          ${exp.tech.map(t => `<span class="border border-white/50 px-2 py-1 rounded-md text-sm font-mono">${t}</span>`).join('')}
        </div>
        <hr class="my-5 border-gray-700">
        <ul class="list-disc list-inside leading-8 text-gray-300">
          ${exp.desc.map(d => `<li>${d}</li>`).join('')}
        </ul>
      `;
      detail.classList.remove("opacity-0", "translate-y-4");
    }, 200);
  });
});


