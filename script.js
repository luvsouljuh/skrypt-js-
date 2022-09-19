 function start() {
    let czas = new Date();
    let godzina = czas.getHours();
    let minuta = czas.getMinutes();
    let sekunda = czas.getSeconds();
    let dzien = czas.getDate();
    let miesiac = czas.getMonth();
    let rok = czas.getFullYear();


    if(sekunda < 10) sekunda = "0" + sekunda;
    if(minuta < 10) minuta  = "0" + minuta;
    if(miesiac < 10) miesiac = "0" + miesiac;
    console.log(godzina + " : " + minuta + " : " + sekunda);
    const zegar = document.getElementById('czas');
    zegar.innerHTML = godzina + " : " + minuta + " : " + sekunda + " <br> "+dzien+ " . "+miesiac+ " . "+rok;
    setTimeout(start, 1000);
}
