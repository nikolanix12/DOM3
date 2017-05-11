/**
 * Created by Ucenik on 11.5.2017..
 */
function Submit()
{
    var prvi=document.getElementById("prvi").checked;
    if (prvi==true)
    {
        document.getElementById("height").innerHTML=window.innerHeight;
        document.getElementById("width").innerHTML='';
    }
    var drugi=document.getElementById("drugi").checked;
    if (drugi==true)
    {
        document.getElementById("width").innerHTML=window.innerWidth;
        document.getElementById("height").innerHTML='';
    }
    if (prvi==true && drugi==true)
    {
        document.getElementById("width").innerHTML=window.innerWidth;
        document.getElementById("height").innerHTML=window.innerHeight;
    }
}
function Otvori()
{
    var x=window.open("http://ss-tehnicka-zg.skole.hr/","_blank", "height=200, width=200");
}
function Zatvori()
{
    x.close();
}
function Submit2()
{
    if (document.getElementById("tri").checked==true)
    {
        document.getElementById("sch").innerHTML = screen.height;
    }
    if (document.getElementById("cetri").checked==true)
    {
        document.getElementById("scw").innerHTML = screen.width;
    }
    if (document.getElementById("pet").checked==true)
    {
        document.getElementById("scah").innerHTML = screen.availHeight;
    }
    if (document.getElementById("sest").checked==true)
    {
        document.getElementById("scaw").innerHTML = screen.availWidth;
    }
}

var prozor={
    whref:window.location.href,
    whost:window.location.host,
    wpath:window.location.pathname,
    wpro:window.location.protocol,
}

function Ispis()
{
    for (var x in prozor)
    {
        document.getElementById("ispis").innerHTML+=prozor[x] + '<br>';
    }
}























