function Change()
{  
    
        document.getElementById("change").style.backgroundColor='white'
    

}

function calculate()
{
    var a=document.getElementById("choose").value;
    var amount=document.getElementById("amount").value;

    if(a=="dollor to INR")
    {
    var c=82.03*amount;
    document.getElementById("show").value=c;
    }
    else if(a=="INR to DOLLAR")
    {
        const i=amount/82.03;
        document.getElementById("show").value=Math.round(i);
    }
    else
     {
    console.log("no amount entered");
     }
}
