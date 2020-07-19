var arr = [];
var num;
var generate = () => {
    let uniqueArray = [...new Set(arr)];
    if(arr.length==0)
    {
        num = Math.ceil(Math.random()*10);
        if(num!=10)
        {
            arr.push(num);
            generate();
        }
        else
        generate();
    }
    else if(uniqueArray.length<8)
    {
        num = Math.floor(Math.random()*10);
        if(num!=10)
        {
            arr.push(num);
            generate();
        }
        else{
            arr.push(0);
            generate();
        }
    }
    else
    {
        document.getElementById('random').innerHTML = uniqueArray.join('');
        arr = [];
    }
}