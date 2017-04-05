Reveal.initialize({
  history: true,

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
});

