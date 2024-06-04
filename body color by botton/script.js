const btn = document.getElementById("btnn");
btn.addEventListener("click", ()=>{
    const randColor = "#" + Math.floor(Math.random() * 16777216).toString(16)
    document.body.style.backgroundColor = randColor;
})