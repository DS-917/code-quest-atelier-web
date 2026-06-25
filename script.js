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

  function fail(message){
    const feedback = document.querySelector('#feedback');
    if (feedback) {
      feedback.textContent = message || 'Le jeu n\'a pas pu charger toutes ses donnees.';
      feedback.className = 'feedback error';
    }
  }

  function decodePart(part){
    const binary = atob(part);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }

  function cleanPreviewLinks(){
    const previewNav = document.querySelector('#preview-nav');
    if (!previewNav) {
      return;
    }
    previewNav.querySelectorAll('a').forEach(function(link){
      const label = document.createElement('span');
      label.textContent = link.textContent;
      link.replaceWith(label);
    });
    if (!document.querySelector('#preview-nav-style-fix')) {
      const style = document.createElement('style');
      style.id = 'preview-nav-style-fix';
      style.textContent = '.preview-nav span{padding:8px 11px;border:2px solid #82d5cb;border-radius:999px;background:#effffd;font-weight:800;color:#29536f;}';
      document.head.appendChild(style);
    }
  }

  function runGame(){
    try {
      const chunks = window.__CQ_PARTS.map(decodePart);
      const totalLength = chunks.reduce(function(total, chunk){ return total + chunk.length; }, 0);
      const bytes = new Uint8Array(totalLength);
      let offset = 0;
      chunks.forEach(function(chunk){
        bytes.set(chunk, offset);
        offset += chunk.length;
      });
      const code = new TextDecoder('utf-8').decode(bytes);
      (0, eval)(code);
      cleanPreviewLinks();
    } catch (error) {
      fail('Le jeu n\'a pas pu charger toutes ses donnees.');
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
    script.onerror = function(){ fail('Un fichier du jeu est introuvable.'); };
    document.head.appendChild(script);
  }

  loadPart(0);
})();