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

const synth = window.speechSynthesis;
document.getElementById('easterEggButton').addEventListener('click', run)

function run() {
  let yellText = "This project is brought to you by bad baddies writing bad code pretending to be Beyonce and feasting on Domino's. This space is open to advertisement from other pizza companies, please contact our marketing department out there... somewhere. HASHTAG 100 DEVS REPRESENT."
  let yellThis = new SpeechSynthesisUtterance(yellText)
  synth.speak(yellThis);
}