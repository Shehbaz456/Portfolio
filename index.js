// Mobile Navigation Toggle
const mobNavBtn = document.getElementById("mob-nav-btn")
const navbar = document.getElementById("navbar")
const body = document.body
const navLinks = document.querySelectorAll(".navbar-link")
const header = document.getElementById("header")

// Toggle navigation menu
const toggleNav = () => {
  navbar.parentElement.classList.toggle("active")
  body.classList.toggle("no-scroll")

  // Add animation to nav links when menu opens
  if (navbar.parentElement.classList.contains("active")) {
    navLinks.forEach((link, index) => {
      link.style.animation = `fadeInDown 0.5s ease forwards ${index * 0.1 + 0.2}s`
      link.style.opacity = "0"
    })
  } else {
    navLinks.forEach((link) => {
      link.style.animation = ""
    })
  }
}

mobNavBtn.addEventListener("click", toggleNav)

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.parentElement.classList.contains("active")) {
      toggleNav()
    }
  })
})

// Reset navigation when window is resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    // Remove active class and no-scroll when in desktop mode
    if (navbar.parentElement.classList.contains("active")) {
      navbar.parentElement.classList.remove("active")
      body.classList.remove("no-scroll")

      // Reset animations on nav links
      navLinks.forEach((link) => {
        link.style.animation = ""
        link.style.opacity = "1"
      })
    }
  }
})

// Typing animation
const typed = new Typed(".multi-text", {
  strings: ["Web Developer", "MERN Developer", "Full Stack Developer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 3000,
  loop: true,
})

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Scroll animations
function reveal() {
  const reveals = document.querySelectorAll(".reveal")

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight
    const elementTop = reveals[i].getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    }
  }
}

// Add scroll event listener
window.addEventListener("scroll", reveal)

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Initial reveal
  reveal()

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})
