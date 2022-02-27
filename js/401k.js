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
}

document.querySelector('#reset').onclick = function() {
    document.getElementById('form401kBalance').reset()
}