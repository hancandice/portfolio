$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".site-main .project-area .grid .element-item").removeClass("swing");
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");
    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  // Owl-carousel
  $(".site-main .clients-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });

  // Sticky Navigation Menu

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

// ********** smooth scroll ************

const navbar = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".scroll-link");
const linksContainer = document.getElementById("navbarNav");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // Navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // Calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("navbar_fixed");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 120) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.classList.remove("show");
  });
});

// ************* responsive projects display **************

const projects = [
  {
    id: 1,
    title: "Food delivery website",
    category: "latest responsive",
    img: "./img/portfolio/foodsforgeeks.png",
    link: "http://35.181.136.156/",
    tool: "Python Django",
  },
  {
    id: 2,
    title: "LetsTalk Chat App",
    category: "latest popular",
    img: "./img/portfolio/letstalk.png",
    link: "https://letstalkk.netlify.app",
    tool: "React, Express, NodeJS, Socket.IO",
  },
  {
    id: 3,
    title: "Popular movie list website",
    category: "latest responsive",
    img: "./img/portfolio/movie_app.png",
    link: "https://hancandice.github.io/movie_app/",
    tool: "React JS",
  },
  {
    id: 4,
    title: "productivity app - Momentum",
    category: "popular latest",
    img: "./img/portfolio/momentum.png",
    link: "https://hancandice.github.io/VanillaJS_Chrome_app/",
    tool: "Vanilla Javascript",
  },
  {
    id: 5,
    title: "Current Weather Check Mobile App",
    category: "latest",
    img: "./img/portfolio/howstheweather.png",
    link: "https://expo.io/@candicehan/romantic-weather",
    tool: "React Native",
  },
  {
    id: 6,
    title: "To Do List Mobile App",
    category: "latest",
    img: "./img/portfolio/komdoritodo.png",
    link: "https://expo.io/@candicehan/komdoritodo",
    tool: "React Native",
  },
  {
    id: 7,
    title: "Drawing tool",
    category: "popular",
    img: "./img/portfolio/paintjs.png",
    link: "https://hancandice.github.io/paintjs/",
    tool: "Vanilla Javascript",
  },
  {
    id: 8,
    title: "Mobile KakaoTalk Clone",
    category: "popular",
    img: "./img/portfolio/kakao-clone.png",
    link: "https://hancandice.github.io/geekjeeyoung-kakaotalk/",
    tool: "HTML, CSS",
  },
  {
    id: 9,
    title: "Desktop/Mobile responsive Youtube clone",
    category: "responsive popular",
    img: "./img/portfolio/youtube-clone.png",
    link: "https://hancandice.github.io/youtube_cloning_html_css/",
    tool: "HTML, CSS, JavaScript",
  },
  {
    id: 10,
    title: "Job scrapper",
    category: "latest",
    img: "./img/portfolio/stackoverflow-jobscrapper.png",
    link: "https://github.com/hancandice/python-web_scrapping",
    tool: "Python",
  },
  {
    id: 11,
    title: "Online forum",
    category: "responsive",
    img: "./img/portfolio/namuarae.png",
    link: "https://github.com/hancandice/django_board",
    tool: "Python Django",
  },
  {
    id: 12,
    title: "Dynamic beat game<br>(in progress ⛑)",
    category: "upcoming",
    img: "./img/portfolio/dynamicbeat.png",
    link: "https://github.com/hancandice/Dynamic_Beat",
    tool: "Java",
  },
];

const sectionCenter = document.querySelector(".project-section-center");
const btnContainer = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayProjectsItems(projects);
});

function displayProjectsItems(projects) {
  let displayProjects = projects.map(function (item) {
    return `<div
    class="swing col-sm-12 col-md-6 col-lg-4 element-item ${item.category}"
  >
    <div class="my-project">
      <div class="img">
        <a
          class="test-popup-link"
          href=${item.img}
        >
          <img
            src=${item.img}
            alt="portfolio-${item.id}"
          />
        </a>
      </div>
      <a href=${item.link} target="_blank">
        <div class="title py-4">
          <h4 class="text-uppercase">${item.title}</h4>
          <span class="text-secondary">${item.tool}</span>
        </div></a
      >
    </div>
  </div>`;
  });
  displayProjects = displayProjects.join("");
  sectionCenter.innerHTML = displayProjects;
}
