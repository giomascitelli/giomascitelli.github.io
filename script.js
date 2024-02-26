var translations = {
  en: {
    aboutMe: " About me - WordPad",
    text:
      '<div style="text-align: center;"><b>Giovanni Mascitelli</b></div>\n\nI am a Information Systems student and am currently focused on building web projects, focusing on languages such as Python, PHP, Javascript, frameworks like Bootstrap, in addition to using tools like CSS and HTML.\n\nIt’s worth mentioning that I worked as a Full Stack Developer and, during this experience, I deepened my knowledge in Java and Groovy, in addition to the languages mentioned earlier. Today, I am seeking new experiences with a focus on Web Development and/or Full Stack Development.\n\nI am motivated by the application of my knowledge in code quality and curiosity, which keeps me in constant pursuit of new knowledge and deepening the ones already acquired. The key, in my opinion, is to constantly seek learning.\n\nI also have knowledge of agile methodologies and testing, project modeling, and technical documentation.\n\n<b><a href="https://docs.google.com/document/d/1zPG8n_Gn_FsVT24grnPGHh1CmQGpDwTe/edit?usp=sharing&ouid=109231413337027054769&rtpof=true&sd=true" target="_blank">Click here</a> to access my resume and click twice on the Github icon in the desktop to access my Github profile.\n\n<b><a href="https://www.linkedin.com/in/giomascitelli/?locale=en_US" target="_blank">Click here</a> to access my LinkedIn profile.</b>',
    startMenu: "start",
    startImage: "https://i.imgur.com/W9lQKSP.png",
    recycleBin: "Recycle Bin"
  },

  pt: {
    aboutMe: " Sobre mim - WordPad",
    text:
      '<div style="text-align: center;"><b>Giovanni Mascitelli</b></div>\n\nGraduando em Sistemas de Informação, estou focado, atualmente, na construção de projetos Web, com ênfase em linguagens como Python, PHP, Javascript, frameworks como Bootstrap, além do uso de ferramentas como CSS e HTML.\n\nVale dizer que trabalhei como Desenvolvedor Full Stack e, durante essa experiência, me aprofundei, além dos supracitados, em Java e Groovy e hoje busco novas experiências com foco em Desenvolvimento Web e/ou Desenvolvimento Full Stack.\n\nSou motivado pela aplicação de meus conhecimentos em qualidade de código e pela curiosidade, o que me faz estar em constante busca de novos conhecimentos e em aprofundar os já adquiridos. A chave, em minha opinião, está em buscar constantemente o aprendizado.\n\nQuanto à parte de análise, tenho conhecimento de metodologias ágeis e de teste, modelagens de projeto e realização de documentações técnicas.\n\n<b><a href="https://docs.google.com/document/d/1e49M0EZ12PVnmdw_IOLONEHNHbtrbFxd/edit?usp=sharing&ouid=109231413337027054769&rtpof=true&sd=true" target="_blank">Clique aqui</a> para acessar o meu currículo e clique duas vezes no ícone do Github na área de trabalho para acessar o meu Github.</b>\n\n<b><a href="https://www.linkedin.com/in/giomascitelli/" target="_blank">Clique aqui</a> para acessar o meu perfil do LinkedIn.</b>',
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

$(function () {
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
});

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
