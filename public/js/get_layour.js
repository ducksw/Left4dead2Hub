window.onload = function () {
  const savedStyle = JSON.parse(localStorage.getItem('layout'));
  if (savedStyle) {
    const body = document.body;
    body.style.maxWidth = savedStyle.maxWidth;
    body.style.width = savedStyle.width;
    body.style.margin = savedStyle.margin;
    console.log("Estilo restaurado desde localStorage");
  }
}