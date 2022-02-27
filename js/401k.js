document.getElementById('401ListenButton').onclick = function(){
    var text = document.getElementById('home401Paragraph').innerText;
    utterance401k = new SpeechSynthesisUtterance();
    utterance401k.text = text;
    speechSynthesis.speak(utterance401k);
};

document.getElementById('zoomInButton').onclick = function() {
	x=document.querySelector('html')
    x.style.fontSize= '120%';
}

document.getElementById('zoomOutButton').onclick = function() {
	x=document.querySelector('html')
    x.style.fontSize= '45%';
}

document.getElementById('zoomNormalButton').onclick = function() {
	x=document.querySelector('html')
    x.style.fontSize= '62.5%';
}

/* document.querySelector('#compute').addEventListener('click',amount401k)

function amount401k(){
    const currentBalance = document.querySelector('#value401k').value
    const d = document.querySelector('#monthlycont').value 
    const k = 12;
    const r = document.querySelector('#annualrate').value 
    const N = document.querySelector('#yearsleft').value 
    const intrate= Math.pow(1 + r/k , N*k)
    const numerator = d * (intrate - 1)
    const denominator = r/k
    const growth = 0.05
    const estgrowth = Math.pow((1 + growth/k),k*N)
    let value = numerator / denominator
    value = value + currentBalance * estgrowth
    document.querySelector('#placeForValue').innerText = value
    document.getElementById('401kCalcResults').style.display = 'block' 
} */

document.querySelector('#compute').addEventListener('click',amount401k)
//document.querySelector('#reset').addEventListener('click',reset)

function amount401k(){
    const currentBalance = document.querySelector('#value401k').value
    const d = document.querySelector('#monthlycont').value //payment value//
    const k = 12; //compounding period//
    const catchup = document.querySelector('#catchupamount').value/100 //extra contribution amount after 50//
    const currentage = document.querySelector('#currentage').value 
    const rtmtage = document.querySelector('#rtmtage').value
    const r = document.querySelector('#annualrate').value/100
    const N = rtmtage - currentage
    const catchupage = 50-currentage
    const intrate= Math.pow((1 + r/k) , N*k)
    const numerator = d * (intrate - 1)
    const denominator = r/k
   // const growth = 0.05
    //const estgrowth = Math.pow((1 + growth/k),k*N)
//catchup is additional perecentage want to add up to 540 more a month//
    if(catchupage >= "0" && catchup !== "" && catchup !== '0'){
        const catchupN = rtmtage - 50  //catchupN limit in 20.5yrs//
        const catchuppmt = 541.666667*catchup //original payment plus percentage of catchup pmt//
        let intratecatchup = Math.pow((1+r/k), catchupN*k)
        let numeratorcatchup =  catchuppmt * (intratecatchup - 1)
        let catchupperiodsvalue = numeratorcatchup/ denominator
       // let otherperiodN = N - catchupN  
       // let otherperiodintrate = Math.pow((1 + r/k), otherperiodN*k)
       // let otherperiodnumerator = d * (otherperiodintrate -1)
        let otherperiodsvalue = numerator / denominator
        let value = catchupperiodsvalue + otherperiodsvalue + currentBalance
        document.querySelector('#placeForValue').innerText = value 

    } else if ( catchup === "" || catchup === "0"){
        let value = numerator / denominator
        value = (value + currentBalance) 
         document.querySelector('#placeForValue').innerText = value 
    }

}

document.querySelector('#estimate').addEventListener('click', calculate)
function calculate() {

    //Get values
    const valueMonthly = document.querySelector('#valueMonthly').value
    const growthInput = document.querySelector('#growthInput').value
    const retAge = document.querySelector('#retAge').value
    const lifeAge = document.querySelector('#lifeAge').value

    //Calculate for Growth Percentage and Number of years withdrawing money
    let growthP = growthInput / 100
    let withdrawYrs = lifeAge - retAge

    //Calculation for Payout
    // let numerator = valueMonthly * (1 - (1 + (growthP/12)) ** (-(withdrawYrs * 12)))
    let numerator = valueMonthly * (1 - (1 + (growthP/12)) ** (-(withdrawYrs * 12)))
    let denominator = growthP / 12
    let retirementAmount = numerator / denominator
    document.querySelector('#placeForEst').innerText = retirementAmount
}


document.querySelector('#reset401Calc').onclick = function() {
    document.getElementById('form401kBalance').reset()
}

document.querySelector('#reset401Projection').onclick = function() {
    document.getElementById('form401kEstimate').reset()
}
