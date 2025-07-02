document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navbarMenu = document.getElementById('navbar-menu');
  const navLinks = document.querySelectorAll('.navbar-link');

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close mobile menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenuBtn.classList.remove('active');
      navbarMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!navbarMenu.contains(e.target) && e.target !== mobileMenuBtn) {
      mobileMenuBtn.classList.remove('active');
      navbarMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Prevent clicks inside navbar from closing it
  navbarMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Scroll effect for header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 200);
    updateActiveSection();
  });

  // Active navbar indicator
  const marker = document.querySelector('#marker');
  const items = document.querySelectorAll('.navbar-link');

  function updateMarkerPosition() {
    const activeLink = document.querySelector('.navbar-link.active');
    if (activeLink) {
      marker.style.left = activeLink.offsetLeft + 'px';
      marker.style.width = activeLink.offsetWidth + 'px';
    }
  }

  // Set initial position
  updateMarkerPosition();

  // Update marker on click
  items.forEach(link => {
    link.addEventListener('click', function (e) {
      items.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      updateMarkerPosition();
    });
  });

  // Scroll indicator functionality
  function updateActiveSection() {
    if (window.innerWidth <= 800) return; // Don't update on mobile

    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 300) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    updateMarkerPosition();
  }

  // Initialize scroll indicator
  updateActiveSection();

  // Update on resize
  window.addEventListener('resize', function () {
    updateMarkerPosition();
    if (window.innerWidth > 800) {
      updateActiveSection();
    }
  });
  // Typed.js initialization
  var typed = new Typed("#element", {
    strings: ["Web Developer", "Web Desginer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
        // Mouse Page Cursor

      document
        .getElementsByTagName("html")[0]
        .addEventListener("mousemove", function (n) {
          (t.style.left = n.clientX + "px"),
            (t.style.top = n.clientY + "px"),
            (e.style.left = n.clientX + "px"),
            (e.style.top = n.clientY + "px"),
            (i.style.left = n.clientX + "px"),
            (i.style.top = n.clientY + "px");
        });
      var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
      function n(t) {
        e.classList.add("hover"), i.classList.add("hover");
      }
      function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover");
      }
      s();
      for (
        var r = document.querySelectorAll("#hover-target"), a = r.length - 1;
        a >= 0;
        a--
      ) {
        o(r[a]);
      }
      function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
      }
      // Progress Bar

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#08f9ff ${scrollValue}%, #000000 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
});