var generate = () => {
    var str = "";
    var n;
    for(var i = 0; i < 8; i++)
    {
        n = Math.ceil((Math.random()*10)+1);
        str += String(n);
    }
    if(str.length==8)
    {
        document.getElementById("random").innerHTML = parseInt(str);
    }
    else
    {
        generate();
    }
}
