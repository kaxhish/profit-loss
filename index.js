window.onload=function(){
const initialPrice = document.querySelector("#initial-price");
const stocksQuantity= document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-here");
const ouputBox = document.querySelector("#output")


checkBtn.addEventListener('click', submitHandler)

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
     
    if(ip ==''|| qty =='' || curr =='' || ip <=0 || qty <=0 || curr<=0){
        showOutput("Enter valid input");
    }else{
        calculateProfitAndLoss(ip, qty,curr)
    }
    
}
function calculateProfitAndLoss(initial, quantity, current){

    var profit;
    var profitPercentage;
    var loss;
    var lossPercentage;
    var costprice=initial * quantity;
    var sellingprice=current * quantity;

    if(costprice> sellingprice){
        loss = costprice - sellingprice;
        lossPercentage = (loss/costprice)*100;

        showOutput("Loss is:  "+loss+" and the Loss Percentge: "+lossPercentage+"%");
        showOutput.style.color = '#green'
      
        
    }else if(current> initial) {
             profit = sellingprice-costprice;
             profitPercentage = (profit/costprice) * 100;
    
            showOutput("Profit is:  "+profit+" and the Profit Percentge: "+profitPercentage+"%");

        } else if(costprice == sellingprice){
            showOutput("No Pain No Gain");
        } 
}


function showOutput(message){
    ouputBox.innerHTML = message;
}
}