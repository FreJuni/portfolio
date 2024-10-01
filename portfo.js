/*  ===================SHOW MENU ===================*/

const naveMenu = document.getElementById("nav-menu"),
  naveToggle = document.getElementById("nav-toggle"),
  naveClose = document.getElementById("nav-close");
// == MENU SHOW ==//
if (naveToggle) {
  naveToggle.addEventListener("click", () => {
    naveMenu.classList.add("show-menu");
  });
}
// == MENU HIDDEN == //
if (naveClose) {
  naveClose.addEventListener("click", () => {
    naveMenu.classList.remove("show-menu");
  });
}
// == REMOVE MENU MOBILE == //
const naveLink = document.querySelectorAll(".nav__link");

naveLink.forEach((element) => {
  element.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  });
});

/*==================SHADOW HEADER=====================*/

const homeHeader = () => {
  const headerId = document.getElementById("header");
  // when the scroll is greater than 50 viewport height ,and add the shadow-header to header//
  this.scrollY >= 50
    ? headerId.classList.add("shadow-header")
    : headerId.classList.remove("shadow-header");
};
window.addEventListener("scroll", homeHeader);

// node.js //
/*node Exercise 8.01.js*/

//=================================Email Js ============================//

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (email) => {
  email.preventDefault();

  // Email js // id template #form form us public //
  //services id // template id // #form // publickey//
  emailjs
    .sendForm(
      "service_37isze5",
      "template_b7nev5q",
      "#contact-form",
      "beOoQWNgUeNUmxcXV"
    )
    // show sent message//
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully";

        // after 5s message will disappear//
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // clear contact form //
        contactForm.reset();
      },
      () => {
        // error message //
        contactMessage.textContent = "Message not sent (services error)";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // clear contact form //
        contactForm.reset();
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

/*=====================show scroll up ====================*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport height, add the  //
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

// *======== scroll sections active link ========*/

const sections = document.querySelectorAll(".sectioin[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===============================dark light theme =========================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// scroll reveal animation //

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // animation repeat
});

//reset : ture // animation repeat

sr.reveal(`.home__prefile, .about__perfile, .contact__mail`, {
  origin: "right",
});

sr.reveal(
  `.home__name ,.home__info,
           .about__container, .section__title-1,.about__info,
           .contact__social,.contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
