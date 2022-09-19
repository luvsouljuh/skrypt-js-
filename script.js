 function start() {
    let czas = new Date();
    let godzina = czas.getHours();
    let minuta = czas.getMinutes();
    let sekunda = czas.getSeconds();

    if(sekunda < 10) sekunda = "0" + sekunda;
    if(minuta < 10) minuta  = "0" + minuta;
    console.log(godzina + " : " + minuta + " : " + sekunda);
    const zegar = document.getElementById('czas');
    zegar.innerHTML = godzina + " : " + minuta + " : " + sekunda;
    setTimeout(start, 1000);
}