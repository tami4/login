"use strict"
function checkidnum(idnum)
{ 
    var idnum1,idnum2,idnum3,idnum4,idnum5,idnum6,idnum7,idnum8,idnum9;
    while (idnum.length<9)
    { idnum="0"+idnum; } 
    idnum1=idnum.substr(0,1)*1;
    idnum2=idnum.substr(1,1)*2; 
    idnum3=idnum.substr(2,1)*1;
    idnum4=idnum.substr(3,1)*2; 
    idnum5=idnum.substr(4,1)*1; 
    idnum6=idnum.substr(5,1)*2;
    idnum7=idnum.substr(6,1)*1;
    idnum8=idnum.substr(7,1)*2; 
    idnum9=idnum.substr(8,1)*1; 
    if (idnum1>9) 
        idnum1=(idnum1%10)+1;
        if (idnum2>9)
            idnum2=(idnum2%10)+1;
    if (idnum3>9) 
        idnum3=(idnum3%10)+1;
    if (idnum4>9) 
        idnum4=(idnum4%10)+1;
    if (idnum5>9) 
        idnum5=(idnum5%10)+1; 
    if (idnum6>9) 
        idnum6=(idnum6%10)+1;
    if (idnum7>9) 
        idnum7=(idnum7%10)+1;
    if (idnum8>9)
        idnum8=(idnum8%10)+1;
    if (idnum9>9) 
        idnum9=(idnum9%10)+1;
    var sumval=idnum1+idnum2+idnum3+idnum4+idnum5+idnum6+idnum7+idnum8+idnum9;
    sumval=sumval%10;
    if (sumval>0)
    {
        alert("תעודת הזהות שגוייה");
        return false; 
    } 
    return true; 
}


function at_click()
{
    var y=document.getElementById("a2").value;
    var name=document.getElementById("a1").value
    if(checkidnum(y))
       document.write("welcome "+name);
    else 
       document.getElementById("message").innerHTML="ERROR! try again";
    
}