const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let header = document.querySelector("header");

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png"; 

let middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";

let navigation = document.querySelectorAll("header nav a");
navigation[0].textContent = "Services";
navigation[1].textContent = "Product";
navigation[2].textContent = "Vision";
navigation[3].textContent = "Features";
navigation[4].textContent = "About";
navigation[5].textContent = "Contact";

let title = document.querySelector(".cta-text h1");
title.textContent = "DOM IS AWESOME";

let btn = document.querySelector(".cta-text button");
btn.textContent = "Get Started";

let cTitles = document.querySelectorAll(".text-content h4");
cTitles[0].textContent = "FEATURES";
cTitles[1].textContent = "ABOUT";
cTitles[2].textContent = "SERVICES";
cTitles[3].textContent = "PRODUCT";
cTitles[4].textContent = "VISION";

let cParagraphs = document.querySelectorAll(".text-content p");
cParagraphs[0].textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
cParagraphs[1].textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
cParagraphs[2].textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
cParagraphs[3].textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
cParagraphs[4].textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = "CONTACT";

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = `123 Way 456 Street. Somewhere, USA`;
contactInfo[1].textContent = "1 (888) 888-8888";
contactInfo[2].textContent = "sales@greatidea.io";

let copyRight = document.querySelector("footer p");
copyRight.textContent = "Copyright Great Idea! 2018";

navigation.forEach(item => item.style.color = "green");

let firstItem = document.createElement("a");
firstItem.textContent = "Yo!";
firstItem.href = "#";

let lastItem = document.createElement("a");
lastItem.textContent = "Live Life!";
lastItem.href = "#";

let navContainer = document.querySelector("header nav");
navContainer.prepend(firstItem);
navContainer.appendChild(lastItem);

firstItem.style.color = "green";
lastItem.style.color = "green";

//Stretch

cTitles.forEach(item => item.style.fontSize = "2rem");
cParagraphs.forEach(item => item.style.fontSize = "1.2rem");