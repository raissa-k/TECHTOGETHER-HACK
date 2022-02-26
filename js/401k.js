document.getElementById('401ListenButton').onclick = function(){
    var text = document.getElementById('home401Paragraph').innerText;
    utterance401k = new SpeechSynthesisUtterance();
    utterance401k.text = text;
    speechSynthesis.speak(utterance401k);
};

/* document.getElementById('403BButton').onclick = function(){
    document.getElementById('401kCalcResults').style.display = 'block'
}; */

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
