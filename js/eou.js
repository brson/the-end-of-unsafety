Reveal.initialize({
  history: true,
  controls: false,

  keyboard: {
    65: function() {
      if (Reveal.isFirstSlide()) {
        Reveal.slide(1000, 0, 0);
      } else {
        Reveal.slide(0, 0, 0);
      }
    }
  },

  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

Reveal.addEventListener('slidechanged', function(event) {
  let slide = event.currentSlide;
  let id = slide.id;
  let slide_name_div = document.getElementById("slide-name");
  slide_name_div.innerHTML = id;

  if (slide.className.indexOf("noid") != -1) {
    slide_name_div.innerHTML = "";
  }
});

Reveal.addEventListener('fragmentshown', function(event) {
  console.log("shown " + event.fragment.id);
  let orig = document.getElementById("balloon-orig");
  orig.style.visibility = "visible";

  if (event.fragment.id == "balloon-transfer") {
    orig.style.visibility = "hidden";
  }

  if (event.fragment.id == "balloon-owned-trigger1") {
    document.getElementById("stick-title-owned").style.visibility = "hidden";
    document.getElementById("balloon-owned").className += " visible";
    document.getElementById("boy-owned").src = "images/stick-boy-up.png";
  }
  
  if (event.fragment.id == "balloon-owned-trigger2") {
    document.getElementById("balloon-owned").className +=" moved";
    document.getElementById("boy-owned").src = "images/stick-boy-down.png";
    document.getElementById("girl-owned").src = "images/stick-girl-up.png";
  }

  if (event.fragment.id == "balloon-owned-trigger3") {
    document.getElementById("balloon-owned-di").className += " visible";
  }

  if (event.fragment.id == "balloon-owned-trigger4") {
    removeClass(document.getElementById("balloon-owned-di"), "visible");
    document.getElementById("balloon-owned").className += " floated";
    document.getElementById("girl-owned").src = "images/stick-girl-down.png";
    document.getElementById("boy-owned").src = "images/stick-boy-shocked.png";
  }

  if (event.fragment.id == "balloon-sh-trigger1") {
    document.getElementById("stick-title-sh").style.visibility = "hidden";
    document.getElementById("balloon-sh").className += " moved";
    document.getElementById("string-sh").className += " moved";
    document.getElementById("girl-sh").src = "images/stick-girl-up.png";
  }

  if (event.fragment.id == "balloon-sh-trigger2") {
    removeClass(document.getElementById("balloon-sh"), "moved");
    removeClass(document.getElementById("string-sh"), "moved");
    document.getElementById("girl-sh").src = "images/stick-girl-down.png";
  }

  if (event.fragment.id == "balloon-mut-trigger1") {
    document.getElementById("stick-title-mut").style.visibility = "hidden";
    document.getElementById("balloon-mut").className += " moved";
    document.getElementById("string-mut").className += " moved";
    document.getElementById("girl-mut").src = "images/stick-girl-up.png";
  }

  if (event.fragment.id == "balloon-mut-trigger2") {
    document.getElementById("balloon-mut").src = "images/balloon-red-nostring-mutated.png";
  }

  if (event.fragment.id == "balloon-mut-trigger3") {
    removeClass(document.getElementById("balloon-mut"), "moved");
    removeClass(document.getElementById("string-mut"), "moved");
    document.getElementById("girl-mut").src = "images/stick-girl-down.png";
  }

  if (event.fragment.id == "balloon-mut-trigger4") {
    document.getElementById("pop").className += " visible";
    document.getElementById("balloon-mut").className += " popped";
    document.getElementById("string-mut").className += " popped";
    document.getElementById("boy-mut").src = "images/stick-boy-down.png";
  }

  if (event.fragment.id == "rown-trigger") {
    document.getElementById("rown-error").className += " strike";
  }

  if (event.fragment.id == "rsh-trigger") {
    for (e of document.querySelectorAll(".rsh-em")) {
      e.className += " hot";
    }
  }

  if (event.fragment.id == "rmut-trigger") {
    for (e of document.querySelectorAll(".rmut-em")) {
      e.className += " hot";
    }
  }

  
});

Reveal.addEventListener('fragmenthidden', function(event) {
  console.log("hidden " + event.fragment.id);
  let orig = document.getElementById("balloon-orig");
  orig.style.visibility = "hidden";

  if (event.fragment.id == "balloon-transfer") {
    orig.style.visibility = "visible";
  }

  if (event.fragment.id == "balloon-owned-trigger1") {
    document.getElementById("stick-title-owned").style.visibility = "visible";
    removeClass(document.getElementById("balloon-owned"), "visible");
    document.getElementById("boy-owned").src = "images/stick-boy-down.png";
  }

  if (event.fragment.id == "balloon-owned-trigger2") {
    removeClass(document.getElementById("balloon-owned"), "moved");
    document.getElementById("boy-owned").src = "images/stick-boy-up.png";
    document.getElementById("girl-owned").src = "images/stick-girl-down.png";
  }

  if (event.fragment.id == "balloon-owned-trigger3") {
    removeClass(document.getElementById("balloon-owned-di"), "visible");
  }

  if (event.fragment.id == "balloon-owned-trigger4") {
    document.getElementById("balloon-owned-di").className += " visible";
    removeClass(document.getElementById("balloon-owned"), "floated");
    document.getElementById("girl-owned").src = "images/stick-girl-up.png";
    document.getElementById("boy-owned").src = "images/stick-boy-down.png";
  }

  if (event.fragment.id == "balloon-sh-trigger1") {
    document.getElementById("stick-title-sh").style.visibility = "visible";
    removeClass(document.getElementById("balloon-sh"), "moved");
    removeClass(document.getElementById("string-sh"), "moved");
    document.getElementById("girl-sh").src = "images/stick-girl-down.png";
  }

  if (event.fragment.id == "balloon-sh-trigger2") {
    document.getElementById("balloon-sh").className += " moved";
    document.getElementById("string-sh").className += " moved";
    document.getElementById("girl-sh").src = "images/stick-girl-up.png";
  }

  if (event.fragment.id == "balloon-mut-trigger1") {
    document.getElementById("stick-title-mut").style.visibility = "visible";
    removeClass(document.getElementById("balloon-mut"), "moved");
    removeClass(document.getElementById("string-mut"), "moved");
    document.getElementById("girl-mut").src = "images/stick-girl-down.png";
  }

  if (event.fragment.id == "balloon-mut-trigger2") {
    document.getElementById("balloon-mut").src = "images/balloon-red-nostring.png";
  }

  if (event.fragment.id == "balloon-mut-trigger3") {
    document.getElementById("balloon-mut").className += " moved";
    document.getElementById("string-mut").className += " moved";
    document.getElementById("girl-mut").src = "images/stick-girl-up.png";
  }
  
  if (event.fragment.id == "balloon-mut-trigger4") {
    removeClass(document.getElementById("pop"), "visible");
    removeClass(document.getElementById("balloon-mut"), "popped");
    removeClass(document.getElementById("string-mut"), "popped");
    document.getElementById("boy-mut").src = "images/stick-boy-up.png";
  }

  if (event.fragment.id == "rown-trigger") {
    removeClass(document.getElementById("rown-error"), "strike");
  }

  if (event.fragment.id == "rsh-trigger") {
    for (e of document.querySelectorAll(".rsh-em")) {
      removeClass(e, "hot");
    }
  }

  if (event.fragment.id == "rmut-trigger") {
    for (e of document.querySelectorAll(".rmut-em")) {
      removeClass(e, "hot");
    }
  }

});

function removeClass(e, c) {
  e.className = e.className.replace(" " + c, "");
}
