function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='resalt'>" + principal + "</span>" + ",  <br> at an interest rate of "+ "<span class='resalt'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='resalt'>" + interest + "</span>" + ", <br> in the year " + "<span class='resalt'>" + yearNow + "</span>";
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}



