document.getElementById('401ListenButton').onclick = function(){
    var text = document.getElementById('home401Paragraph').innerText;
    utterance401k = new SpeechSynthesisUtterance();
    utterance401k.text = text;
    speechSynthesis.speak(utterance401k);
};

document.getElementById('403ListenButton').onclick = function(){
    var text = document.getElementById('home403Paragraph').innerText;
    utterance403b = new SpeechSynthesisUtterance();
    utterance403b.text = text;
    speechSynthesis.speak(utterance403b);
};

document.getElementById('MiddleListenButton').onclick = function(){
    var text = document.getElementById('homeMiddleParagraph').innerText;
    utterance403b = new SpeechSynthesisUtterance();
    utterance403b.text = text;
    speechSynthesis.speak(utterance403b);
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