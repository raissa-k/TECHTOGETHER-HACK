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

document.querySelector('#compute').addEventListener('click',amount401k)

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

    //Index fund 0.07% fee
    const intrateIndex = Math.pow((1 + (r-0.0007)/k) , N*k)
    const numeratorIndex = d * (intrateIndex -1)
    const denominatorIndex = (r-0.00007)/k
    const cBalIndex = currentBalance * Math.pow((1 + (r-0.0007)/k), N*k)

    //Mutual fund 1.74% fee
    const intrateMutual = Math.pow((1 + (r-0.0174)/k) , N*k)
    const numeratorMutual = d * (intrateMutual -1)
    const denominatorMutual = (r-0.0174)/k
    const cBalMutual = currentBalance * Math.pow((1 + (r-0.0174)/k), N*k)

    //Variable 3% fee
    const intrateVariable = Math.pow((1 + (r-0.03)/k) , N*k)
    const numeratorVariable = d * (intrateVariable -1)
    const denominatorVariable = (r-0.03)/k
    const cBalVariable = currentBalance * Math.pow((1 + (r-0.03)/k), N*k)

//catchup is additional perecentage want to add up to 540 more a month//
    //0.07% fee

    if(catchupage >= "0" && catchup !== "" && catchup !== '0' || currentage >= 50){
        const catchupN = rtmtage - 50  //catchupN limit in 20.5yrs//
        const catchuppmt = 541.666667*catchup //original payment plus percentage of catchup pmt//
        let intratecatchupIndex = Math.pow((1+(r-0.00007)/k), catchupN*k)
        let numeratorcatchupIndex =  catchuppmt * (intratecatchupIndex - 1)
        let catchupperiodsvalueIndex = numeratorcatchupIndex/ denominatorIndex
        let otherperiodsvalueIndex = numeratorIndex / denominatorIndex
        let valueIndex = (catchupperiodsvalueIndex + otherperiodsvalueIndex + cBalIndex)
        document.querySelector('#indexResult').innerText = valueIndex 
    }
    
     else if ( catchup === "" || catchup === "0"){
        let valueIndex = numeratorIndex / denominatorIndex
        valueIndex = (valueIndex + cBalIndex) 
        document.querySelector('#indexResult').innerText = valueIndex 
    }

    //1.74% fee
    if(catchupage >= "0" && catchup !== "" && catchup !== '0' || currentage >= 50){
        const catchupN = rtmtage - 50  //catchupN limit in 20.5yrs//
        const catchuppmt = 541.666667*catchup //original payment plus percentage of catchup pmt//
        let intratecatchupMutual = Math.pow((1+(r-0.0174)/k), catchupN*k)
        let numeratorcatchupMutual =  catchuppmt * (intratecatchupMutual - 1)
        let catchupperiodsvalueMutual = numeratorcatchupMutual/ denominatorMutual
        let otherperiodsvalueMutual = numeratorMutual / denominatorMutual
        let valueMutual = (catchupperiodsvalueMutual + otherperiodsvalueMutual + cBalMutual)
        document.querySelector('#mutualResult').innerText = valueMutual 
    }
    
     else if ( catchup === "" || catchup === "0"){
        let valueMutual = numeratorMutual / denominatorMutual
        valueMutual = (valueMutual + cBalMutual) 
        document.querySelector('# mutualResult').innerText = valueMutual 
    }

        //3% fee
        if(catchupage >= "0" && catchup !== "" && catchup !== '0' || currentage >= 50){
            const catchupN = rtmtage - 50  //catchupN limit in 20.5yrs//
            const catchuppmt = 541.666667*catchup //original payment plus percentage of catchup pmt//
            let intratecatchupVariable = Math.pow((1+(r-0.03)/k), catchupN*k)
            let numeratorcatchupVariable =  catchuppmt * (intratecatchupVariable - 1)
            let catchupperiodsvalueVariable = numeratorcatchupVariable/ denominatorVariable
            let otherperiodsvalueVariable = numeratorVariable / denominatorVariable
            let valueVariable = (catchupperiodsvalueVariable + otherperiodsvalueVariable + cBalVariable)
            document.querySelector('#variableResult').innerText = valueVariable 
        }
        
         else if ( catchup === "" || catchup === "0"){
            let valueVariable = numeratorVariable / denominatorVariable
            valueVariable = (valueVariable + cBalVariable) 
            document.querySelector('#variableResult').innerText = valueVariable
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
