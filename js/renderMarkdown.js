// renderMarkdown.js
async function loadAndRenderMD(url, targetId) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Error ${(res.status)}`);
    const text = await res.text();
    const html = marked.parse(text);
    document.getElementById(targetId).innerHTML = html;
  } catch (e) {
    console.error(e);
    document.getElementById(targetId).textContent = "No se pudo cargar el archivo Markdown.";
  }
}

// Usa esto cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
  loadAndRenderMD('CLAUDE.md', 'content-md');
});
