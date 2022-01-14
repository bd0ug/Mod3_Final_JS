const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
window.onload = function() {
    document.getElementById("generateColor").addEventListener("click", setBg);
    setBg();
}

