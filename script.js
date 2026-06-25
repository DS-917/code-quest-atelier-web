(function(){
  const parts = [
    'assets/script-parts/part01.js',
    'assets/script-parts/part02.js',
    'assets/script-parts/part03.js',
    'assets/script-parts/part04.js',
    'assets/script-parts/part05.js',
    'assets/script-parts/part06.js'
  ];
  window.__CQ_PARTS = [];

  function fail(){
    const feedback = document.querySelector('#feedback');
    if (feedback) {
      feedback.textContent = 'Le jeu n\'a pas pu charger toutes ses donnees.';
      feedback.className = 'feedback error';
    }
  }

  function runGame(){
    try {
      const binary = atob(window.__CQ_PARTS.join(''));
      const bytes = Uint8Array.from(binary, function(char){ return char.charCodeAt(0); });
      const code = new TextDecoder('utf-8').decode(bytes);
      (0, eval)(code);
    } catch (error) {
      fail();
    }
  }

  function loadPart(index){
    if (index >= parts.length) {
      runGame();
      return;
    }
    const script = document.createElement('script');
    script.src = parts[index];
    script.onload = function(){ loadPart(index + 1); };
    script.onerror = fail;
    document.head.appendChild(script);
  }

  loadPart(0);
})();
