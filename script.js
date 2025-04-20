var translations = {
  en: {
    aboutMe: " About me - WordPad",
    text:
      '<div style="text-align: center;"><b>Giovanni Mascitelli</b></div>\n\nI hold a degree in Information Systems and am currently pursuing a postgraduate degree in Cloud Computing. I work as a Software Engineer/Full-Stack Developer specializing in C#, .NET, ASP.NET, and Blazor, with expertise in both back-end and full-stack development.\n\nI’m consistently recognized for creating thorough documentation and performing extensive testing that guarantees robust, high-quality systems.\n\nMy commitment to continuous improvement drives me to constantly acquire new knowledge and refine my practices, leveraging agile methodologies to foster innovative solutions.\n\nI view technology as a powerful tool for enhancing quality of life—mastering it enables us to simplify and enrich people`s everyday experiences.\n\n<b><a href="https://docs.google.com/document/d/16n7j227r3bsdiAx3wjUX6fbW8-_IgTc3/edit?usp=sharing&ouid=104410619890185715236&rtpof=true&sd=true" target="_blank">Click here</a> to access my resume and click twice on the Github icon in the desktop to access my Github profile.\n\n<b><a href="https://www.linkedin.com/in/giomascitelli/?locale=en_US" target="_blank">Click here</a> to access my LinkedIn profile.</b>',
    startMenu: "start",
    startImage: "https://i.imgur.com/W9lQKSP.png",
    recycleBin: "Recycle Bin"
  },

  pt: {
    aboutMe: " Sobre mim - WordPad",
    text:
      '<div style="text-align: center;"><b>Giovanni Mascitelli</b></div>\n\nGraduado em Sistemas de Informação e atualmente cursando pós-graduação em Cloud Computing, atualmente atuo como Engenheiro de Software/Desenvolvedor Full-stack, com foco em C#, .NET, ASP.NET e Blazor, abrangendo tanto o back-end quanto o full-stack.\n\nSou frequentemente elogiado pela excelência na elaboração de documentações detalhadas e pela condução de testes extensivos, assegurando a alta qualidade e a robustez do sistema.\n\nTenho compromisso com minha melhoria contínua, que me impulsiona a buscar novos conhecimentos e refinar práticas, aplicando metodologias ágeis que promovem soluções inovadoras. \n\nVejo a tecnologia como uma ferramenta de qualidade de vida, onde, tendo seu domínio, podemos facilitar a vida das pessoas de diversas formas.\n\n<b><a href="https://docs.google.com/document/d/1uD-m5625lfo-KzWJHs48xxnEWmajH8tR/edit?usp=sharing&ouid=104410619890185715236&rtpof=true&sd=true" target="_blank">Clique aqui</a> para acessar o meu currículo e clique duas vezes no ícone do Github na área de trabalho para acessar o meu Github.</b>\n\n<b><a href="https://www.linkedin.com/in/giomascitelli/" target="_blank">Clique aqui</a> para acessar o meu perfil do LinkedIn.</b>',
    startMenu: "Iniciar",
    startImage: "https://i.imgur.com/Rj8NmBi.png",
    recycleBin: "Lixeira"
  }
};

function applyTranslation() {
  var userLang = navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage;
  var lang = userLang.startsWith("pt") ? "pt" : "en"; // se o idioma do usuário começar com 'pt', use 'pt', caso contrário, use 'en'
  var translation = translations[lang];
  document.querySelector(".about-me").textContent = translation.aboutMe;
  document.getElementById("texto").innerHTML = translation.text;

  document.querySelector(".start-button").textContent = translation.startMenu;

  document.querySelector(".modal-content").style.backgroundImage =
    "url(" + translation.startImage + ")";

  document.querySelector("#recycle-bin-icon span").textContent =
    translation.recycleBin;
}

window.addEventListener("load", applyTranslation);

function myEngines() {
  makeDraggable("#window1");
  makeDraggable("#window2");

  $(".window").click(function () {
    $(".window").css("z-index", "");
    $(this).css("z-index", 999);
  });

  $("#github-desktop-icon").dblclick(function () {
    window.open("https://github.com/giomascitelli", "_blank");
  });

  var icons = $("#main-icons li a");
  var text = $("#main-icons li a span");
  icons.each(function () {
    $(this).click(function (event) {
      event.stopPropagation();
      icons.removeClass("click-icons");
      text.removeClass("click-text-icons");
      $(this).addClass("click-icons");
      $(this).find("span").addClass("click-text-icons");
    });
  });

  $("body").click(function () {
    icons.removeClass("click-icons");
    text.removeClass("click-text-icons");
  });

  $("#btn-minimize1").click(function () {
    $("#window1").css("display", "none");
  });

  $("#taskbar-button1").click(function () {
    $("#window1").css("display", "block");
  });

  $("#btn-minimize2").click(function () {
    $("#window2").css("display", "none");
  });

  $("#taskbar-button2").click(function () {
    $("#window2").css("display", "block");
  });
}

$(document).ready(myEngines);

function makeDraggable(elementId) {
  $(elementId).draggable({
    containment: "window",
    handle: ".window-header"
  });
}

function padTime(time) {
  return time < 10 ? "0" + time : time;
}

function updateClock() {
  let now = new Date();
  let hours = padTime(now.getHours());
  let minutes = padTime(now.getMinutes());
  document.getElementById("clock").textContent = hours + ":" + minutes;
}

setInterval(updateClock, 1000);
